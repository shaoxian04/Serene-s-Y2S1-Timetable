// Serene's Complete Timetable Data
const timetableData = [
  // Week 1
  {week: 1, day: "Mon", time: "8:00 AM - 10:00 AM", course: "OIA2002", activity: "Lecture (Pharmacopeia)", mode: "Physical", venue: "The Cube @Pharmacy"},
  {week: 1, day: "Mon", time: "2:00 PM - 4:00 PM", course: "OIA2012", activity: "Briefing & Lecture (Opioids)", mode: "Physical", venue: "Cube"},
  {week: 1, day: "Tue", time: "8:00 AM - 10:00 AM", course: "OIA2013", activity: "Intro & Lecture (Gout)", mode: "Physical", venue: "The Cube"},
  {week: 1, day: "Tue", time: "10:00 AM - 1:00 PM", course: "OIA1017", activity: "Lecture (Herbal supplement)", mode: "Online", venue: "SDL (PRE-RECORDED)"},
  {week: 1, day: "Tue", time: "5:00 PM - 7:00 PM", course: "GKS1001", activity: "Volunteerism", mode: "Online", venue: "Online Platform"},
  {week: 1, day: "Wed", time: "2:00 PM - 4:00 PM", course: "GFW0031", activity: "Computer Network", mode: "Online", venue: "Online Platform"},
  {week: 1, day: "Wed", time: "5:00 PM - 7:00 PM", course: "GIG1013", activity: "Ethics", mode: "Online", venue: "Online Platform"},
  {week: 1, day: "Thu", time: "8:00 AM - 10:00 AM", course: "OIA2014", activity: "Intro & Lecture (Anti-TB, Antifungal)", mode: "Physical", venue: "The Cube"},
  {week: 1, day: "Thu", time: "10:00 AM - 12:00 PM", course: "OIA2003", activity: "Intro & Lecture (Emulsion)", mode: "Physical", venue: "The Cube"},
  {week: 1, day: "Fri", time: "8:00 AM - 9:00 AM", course: "OIA2012", activity: "Lecture (Opioids)", mode: "Physical", venue: "Cube"},
  {week: 1, day: "Fri", time: "9:00 AM - 10:00 AM", course: "OIA2002", activity: "Lecture (Electromagnetic spectrum)", mode: "Physical", venue: "The Cube @Pharmacy"},

  // Week 2
  {week: 2, day: "Mon", time: "All Day", course: "OIA2002/OIA2012", activity: "Public Holiday (Deepavali)", mode: "N/A", venue: "N/A"},
  {week: 2, day: "Tue", time: "8:00 AM - 10:00 AM", course: "OIA2013", activity: "Lecture (RA, Osteoarthritis)", mode: "Physical", venue: "The Cube"},
  {week: 2, day: "Tue", time: "5:00 PM - 7:00 PM", course: "GKS1001", activity: "Volunteerism", mode: "Online", venue: "Online Platform"},
  {week: 2, day: "Wed", time: "9:00 AM - 12:00 PM", course: "OIA1017", activity: "Intro to module, Lecture (Health supplement)", mode: "Online", venue: "F2F ONLINE"},
  {week: 2, day: "Wed", time: "2:00 PM - 4:00 PM", course: "GFW0031", activity: "Computer Network", mode: "Online", venue: "Online Platform"},
  {week: 2, day: "Wed", time: "5:00 PM - 7:00 PM", course: "GIG1013", activity: "Ethics", mode: "Online", venue: "Online Platform"},
  {week: 2, day: "Thu", time: "8:00 AM - 10:00 AM", course: "OIA2014", activity: "Lecture (Antihepatitis, antiretroviral)", mode: "Online", venue: "Microsoft Teams"},
  {week: 2, day: "Thu", time: "10:00 AM - 12:00 PM", course: "OIA2003", activity: "Lecture (Emulsion mfg)", mode: "Online", venue: "Pre-Recorded"},
  {week: 2, day: "Thu", time: "2:00 PM - 5:00 PM", course: "OIA2002", activity: "Practical 1 (Group A)", mode: "Online", venue: "MK2, Makmal Pelbagai/ Alat 1 & 2"},
  {week: 2, day: "Fri", time: "8:00 AM - 9:00 AM", course: "OIA2012", activity: "Tutorial 1", mode: "Online", venue: "Online Platform"},
  {week: 2, day: "Fri", time: "9:00 AM - 10:00 AM", course: "OIA2002", activity: "Tutorial 1", mode: "Online", venue: "Self-paced"},

  // Add recurring classes for all weeks (3-14)
  // This will be generated programmatically
];

// Generate recurring classes for weeks 3-14
const recurringClasses = [
  {day: "Tue", time: "5:00 PM - 7:00 PM", course: "GKS1001", activity: "Volunteerism", mode: "Online", venue: "Online Platform"},
  {day: "Wed", time: "2:00 PM - 4:00 PM", course: "GFW0031", activity: "Computer Network", mode: "Online", venue: "Online Platform"},
  {day: "Wed", time: "5:00 PM - 7:00 PM", course: "GIG1013", activity: "Ethics", mode: "Online", venue: "Online Platform"}
];

// Add recurring classes to weeks 3-14
for (let week = 3; week <= 14; week++) {
  recurringClasses.forEach(classItem => {
    timetableData.push({
      week: week,
      day: classItem.day,
      time: classItem.time,
      course: classItem.course,
      activity: classItem.activity,
      mode: classItem.mode,
      venue: classItem.venue
    });
  });
}

// Add your complete timetable data here (weeks 3-14)
// For brevity, I'm showing the structure - you can copy from your frontend

module.exports = { timetableData };