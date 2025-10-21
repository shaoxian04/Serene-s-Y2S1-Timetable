// Notification Service for Serene's Timetable
const EmailService = require('./emailService');
const TimetableService = require('./timetableService');
const { config } = require('../config/config');

class NotificationService {
  constructor() {
    this.emailService = new EmailService();
    this.timetableService = new TimetableService();
  }

  // Generate daily summary
  generateDailySummary() {
    const tomorrow = this.timetableService.getTomorrowActivities();
    
    if (!tomorrow || tomorrow.activities.length === 0) {
      console.log('📅 No classes tomorrow, skipping daily summary');
      return null;
    }

    const formattedDate = tomorrow.date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: config.schedule.timezone
    });

    let summary = `Hi Serene! 💕\n\nHere's your schedule for tomorrow (${formattedDate}):\n\n`;

    // Sort activities by time
    const sortedActivities = tomorrow.activities.sort((a, b) => {
      const timeA = this.timetableService.parseTime(a.time);
      const timeB = this.timetableService.parseTime(b.time);
      return timeA - timeB;
    });

    sortedActivities.forEach((activity, index) => {
      summary += `${index + 1}. 🕐 ${activity.time}\n`;
      summary += `   📖 ${activity.course} - ${activity.activity}\n`;
      summary += `   ${activity.mode === 'Online' ? '💻' : '🏫'} ${activity.mode}\n`;
      summary += `   📍 ${activity.venue}\n\n`;
    });

    summary += `💡 Tips for tomorrow:\n`;
    summary += `• Set your alarms 15 minutes before each class\n`;
    summary += `• Prepare your materials tonight\n`;
    summary += `• Check your internet connection for online classes\n`;
    summary += `• Stay hydrated and take breaks between classes! 💧\n\n`;
    summary += `Good luck tomorrow! You've got this! 🌟\n\n`;
    summary += `Love,\nYour Timetable Assistant 💜\n\n`;
    summary += `---\n`;
    summary += `📱 This is an automated message from your 24/7 timetable system\n`;
    summary += `🕐 Sent at: ${new Date().toLocaleString('en-US', { timeZone: config.schedule.timezone })}`;

    return {
      subject: `📚 Tomorrow's Classes - ${formattedDate}`,
      body: summary,
      activitiesCount: sortedActivities.length
    };
  }

  // Generate class reminder
  generateClassReminder(activity) {
    const subject = `⏰ Class Starting Soon - ${activity.course}`;
    const body = `Hi Serene! 💕\n\n` +
                `Your class is starting in 10 minutes!\n\n` +
                `📖 Course: ${activity.course}\n` +
                `📚 Activity: ${activity.activity}\n` +
                `🕐 Time: ${activity.time}\n` +
                `${activity.mode === 'Online' ? '💻' : '🏫'} Mode: ${activity.mode}\n` +
                `📍 Venue: ${activity.venue}\n\n` +
                `Quick reminders:\n` +
                `• Join the class link if it's online\n` +
                `• Have your materials ready\n` +
                `• Take a deep breath - you're prepared! 🌟\n\n` +
                `Good luck! 💜\n\n` +
                `---\n` +
                `📱 This is an automated reminder from your timetable system\n` +
                `🕐 Sent at: ${new Date().toLocaleString('en-US', { timeZone: config.schedule.timezone })}`;

    return { subject, body };
  }

  // Send daily summary
  async sendDailySummary() {
    try {
      console.log('⏰ Checking for daily summary...');
      const summary = this.generateDailySummary();
      
      if (summary) {
        await this.emailService.sendDailySummary(summary);
        console.log(`✅ Daily summary sent! (${summary.activitiesCount} classes tomorrow)`);
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('❌ Failed to send daily summary:', error.message);
      throw error;
    }
  }

  // Send class reminders
  async sendClassReminders() {
    try {
      const upcomingClasses = this.timetableService.getUpcomingClasses();
      
      if (upcomingClasses.length === 0) {
        return false;
      }

      for (const activity of upcomingClasses) {
        const reminder = this.generateClassReminder(activity);
        await this.emailService.sendClassReminder(reminder);
        console.log(`✅ Class reminder sent for ${activity.course}`);
      }
      
      return true;
    } catch (error) {
      console.error('❌ Failed to send class reminders:', error.message);
      throw error;
    }
  }

  // Send test notification
  async sendTestNotification() {
    try {
      await this.emailService.sendTestEmail();
      console.log('✅ Test notification sent successfully!');
      return true;
    } catch (error) {
      console.error('❌ Failed to send test notification:', error.message);
      throw error;
    }
  }

  // Get system status
  getStatus() {
    const currentWeek = this.timetableService.getCurrentWeek();
    const currentDay = this.timetableService.getCurrentDay();
    const tomorrow = this.timetableService.getTomorrowActivities();
    const today = this.timetableService.getTodayActivities();

    return {
      system: {
        status: 'running',
        timezone: config.schedule.timezone,
        timestamp: new Date().toISOString()
      },
      current: {
        week: currentWeek,
        day: currentDay,
        todayClasses: today?.activities?.length || 0
      },
      tomorrow: {
        week: tomorrow?.week || null,
        day: tomorrow?.day || null,
        classes: tomorrow?.activities?.length || 0
      },
      recipient: {
        email: config.email.to.email,
        name: config.email.to.name
      }
    };
  }
}

module.exports = NotificationService;