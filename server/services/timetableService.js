// Timetable Service for Serene's Schedule
const { timetableData } = require('../data/timetable');
const { config } = require('../config/config');

class TimetableService {
  constructor() {
    this.timetableData = timetableData;
    this.referenceDate = config.timetable.referenceDate;
    this.referenceWeek = config.timetable.referenceWeek;
  }

  // Get current week number
  getCurrentWeek() {
    const now = new Date();
    const diffTime = now.getTime() - this.referenceDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const weekDiff = Math.floor(diffDays / 7);
    const weekNumber = this.referenceWeek + weekDiff;
    
    return (weekNumber >= 1 && weekNumber <= config.timetable.totalWeeks) ? weekNumber : null;
  }

  // Get current day name
  getCurrentDay() {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[new Date().getDay()];
  }

  // Get activities for specific week and day
  getActivities(weekNumber, dayName) {
    return this.timetableData.filter(activity => 
      activity.week === weekNumber && activity.day === dayName
    );
  }

  // Get tomorrow's activities
  getTomorrowActivities() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const tomorrowWeek = this.getWeekForDate(tomorrow);
    const tomorrowDay = this.getDayName(tomorrow);
    
    if (!tomorrowWeek || !['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(tomorrowDay)) {
      return null; // No classes on weekends or invalid week
    }
    
    return {
      week: tomorrowWeek,
      day: tomorrowDay,
      date: tomorrow,
      activities: this.getActivities(tomorrowWeek, tomorrowDay)
    };
  }

  // Get today's activities
  getTodayActivities() {
    const currentWeek = this.getCurrentWeek();
    const currentDay = this.getCurrentDay();
    
    if (!currentWeek) return null;
    
    return {
      week: currentWeek,
      day: currentDay,
      date: new Date(),
      activities: this.getActivities(currentWeek, currentDay)
    };
  }

  // Get week number for specific date
  getWeekForDate(date) {
    const diffTime = date.getTime() - this.referenceDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const weekDiff = Math.floor(diffDays / 7);
    const weekNumber = this.referenceWeek + weekDiff;
    
    return (weekNumber >= 1 && weekNumber <= config.timetable.totalWeeks) ? weekNumber : null;
  }

  // Get day name for date
  getDayName(date) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[date.getDay()];
  }

  // Parse time string to minutes
  parseTime(timeString) {
    if (timeString === 'All Day') return 0;
    
    const match = timeString.match(/(\d+):(\d+)\s*(AM|PM)/);
    if (!match) return 0;
    
    let hours = parseInt(match[1]);
    const minutes = parseInt(match[2]);
    const period = match[3];
    
    if (period === 'PM' && hours !== 12) hours += 12;
    if (period === 'AM' && hours === 12) hours = 0;
    
    return hours * 60 + minutes;
  }

  // Get class datetime
  getClassDateTime(baseDate, timeString) {
    const match = timeString.match(/(\d+):(\d+)\s*(AM|PM)/);
    if (!match) return baseDate;
    
    let hours = parseInt(match[1]);
    const minutes = parseInt(match[2]);
    const period = match[3];
    
    if (period === 'PM' && hours !== 12) hours += 12;
    if (period === 'AM' && hours === 12) hours = 0;
    
    const classDate = new Date(baseDate);
    classDate.setHours(hours, minutes, 0, 0);
    
    return classDate;
  }

  // Check for upcoming classes (10-minute reminders)
  getUpcomingClasses() {
    const today = this.getTodayActivities();
    if (!today || today.activities.length === 0) return [];
    
    const now = new Date();
    const upcomingClasses = [];
    
    today.activities.forEach(activity => {
      if (activity.time === 'All Day') return;
      
      const classTime = this.getClassDateTime(now, activity.time);
      const tenMinutesBefore = new Date(classTime.getTime() - 10 * 60 * 1000);
      
      // Check if current time is within 1 minute of the 10-minute warning
      const timeDiff = Math.abs(now.getTime() - tenMinutesBefore.getTime());
      if (timeDiff < 60000) { // Within 1 minute
        upcomingClasses.push({
          ...activity,
          classTime: classTime,
          reminderTime: tenMinutesBefore
        });
      }
    });
    
    return upcomingClasses;
  }
}

module.exports = TimetableService;