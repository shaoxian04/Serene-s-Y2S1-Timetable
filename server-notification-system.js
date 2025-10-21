// Server-Side Notification System for Serene's Timetable
// This runs 24/7 without needing the webpage to be open

const nodemailer = require("nodemailer");
const cron = require("node-cron");

// Secure configuration
const CONFIG = {
  recipient: {
    email: "limtzehui05@gmail.com",
    name: "Serene",
  },
  smtp: {
    // Use your Gmail credentials or EmailJS SMTP
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "your-email@gmail.com", // Your Gmail
      pass: "your-app-password", // Gmail App Password
    },
  },
  timezone: "Asia/Kuala_Lumpur",
};

// Timetable data (same as your frontend)
const timetableData = [
  // Your complete timetable data here
  {
    week: 1,
    day: "Mon",
    time: "8:00 AM - 10:00 AM",
    course: "OIA2002",
    activity: "Lecture (Pharmacopeia)",
    mode: "Physical",
    venue: "The Cube @Pharmacy",
  },
  // ... rest of your timetable
];

// Create email transporter
const transporter = nodemailer.createTransporter(CONFIG.smtp);

// Get current week and day
function getCurrentWeekAndDay() {
  const now = new Date();
  const week2Wednesday = new Date(2025, 9, 22); // October 22, 2025
  const diffTime = now.getTime() - week2Wednesday.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const weekDiff = Math.floor(diffDays / 7);
  const weekNumber = 2 + weekDiff;

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayName = days[now.getDay()];

  return { weekNumber, dayName, date: now };
}

// Generate daily summary
function generateDailySummary() {
  const { weekNumber } = getCurrentWeekAndDay();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const tomorrowDay = days[tomorrow.getDay()];

  if (!["Mon", "Tue", "Wed", "Thu", "Fri"].includes(tomorrowDay)) {
    return null; // No classes on weekends
  }

  const activities = timetableData.filter(
    (activity) => activity.week === weekNumber && activity.day === tomorrowDay
  );

  if (activities.length === 0) return null;

  const formattedDate = tomorrow.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Kuala_Lumpur",
  });

  let summary = `Hi Serene! 💕\n\nHere's your schedule for tomorrow (${formattedDate}):\n\n`;

  activities.sort((a, b) => {
    const timeA = parseTime(a.time);
    const timeB = parseTime(b.time);
    return timeA - timeB;
  });

  activities.forEach((activity, index) => {
    summary += `${index + 1}. 🕐 ${activity.time}\n`;
    summary += `   📖 ${activity.course} - ${activity.activity}\n`;
    summary += `   ${activity.mode === "Online" ? "💻" : "🏫"} ${
      activity.mode
    }\n`;
    summary += `   📍 ${activity.venue}\n\n`;
  });

  summary += `💡 Tips for tomorrow:\n`;
  summary += `• Set your alarms 15 minutes before each class\n`;
  summary += `• Prepare your materials tonight\n`;
  summary += `• Check your internet connection for online classes\n`;
  summary += `• Stay hydrated and take breaks! 💧\n\n`;
  summary += `Good luck tomorrow! You've got this! 🌟\n`;
  summary += `Love, Your Timetable Assistant 💜`;

  return {
    subject: `📚 Tomorrow's Classes - ${formattedDate}`,
    body: summary,
  };
}

// Parse time for sorting
function parseTime(timeString) {
  if (timeString === "All Day") return 0;
  const match = timeString.match(/(\d+):(\d+)\s*(AM|PM)/);
  if (!match) return 0;

  let hours = parseInt(match[1]);
  const minutes = parseInt(match[2]);
  const period = match[3];

  if (period === "PM" && hours !== 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;

  return hours * 60 + minutes;
}

// Send email
async function sendEmail(subject, body) {
  try {
    const mailOptions = {
      from: CONFIG.smtp.auth.user,
      to: CONFIG.recipient.email,
      subject: subject,
      text: body,
      html: body.replace(/\n/g, "<br>"),
    };

    const result = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully to Serene!");
    console.log("📧 Subject:", subject);
    return result;
  } catch (error) {
    console.error("❌ Email failed to send:", error);
    throw error;
  }
}

// Schedule daily summary (5:00 PM Malaysia time)
cron.schedule(
  "0 17 * * *",
  async () => {
    console.log("⏰ Checking for daily summary...");
    const summary = generateDailySummary();
    if (summary) {
      await sendEmail(summary.subject, summary.body);
    } else {
      console.log("📅 No classes tomorrow, skipping daily summary");
    }
  },
  {
    timezone: CONFIG.timezone,
  }
);

// Schedule 10-minute reminders
cron.schedule(
  "* * * * *",
  async () => {
    // Check every minute
    const { weekNumber, dayName, date } = getCurrentWeekAndDay();
    const currentTime = date.getTime();

    const todayActivities = timetableData.filter(
      (activity) => activity.week === weekNumber && activity.day === dayName
    );

    for (const activity of todayActivities) {
      if (activity.time === "All Day") continue;

      const classTime = getClassDateTime(date, activity.time);
      const tenMinutesBefore = new Date(classTime.getTime() - 10 * 60 * 1000);

      // Check if current time is within 1 minute of the 10-minute warning
      const timeDiff = Math.abs(currentTime - tenMinutesBefore.getTime());
      if (timeDiff < 60000) {
        // Within 1 minute
        const subject = `⏰ Class Starting Soon - ${activity.course}`;
        const body =
          `Hi Serene! 💕\n\n` +
          `Your class is starting in 10 minutes!\n\n` +
          `📖 Course: ${activity.course}\n` +
          `📚 Activity: ${activity.activity}\n` +
          `🕐 Time: ${activity.time}\n` +
          `${activity.mode === "Online" ? "💻" : "🏫"} Mode: ${
            activity.mode
          }\n` +
          `📍 Venue: ${activity.venue}\n\n` +
          `Quick reminders:\n` +
          `• Join the class link if it's online\n` +
          `• Have your materials ready\n` +
          `• Take a deep breath - you're prepared! 🌟\n\n` +
          `Good luck! 💜`;

        await sendEmail(subject, body);
      }
    }
  },
  {
    timezone: CONFIG.timezone,
  }
);

// Helper function to get class datetime
function getClassDateTime(baseDate, timeString) {
  const match = timeString.match(/(\d+):(\d+)\s*(AM|PM)/);
  if (!match) return baseDate;

  let hours = parseInt(match[1]);
  const minutes = parseInt(match[2]);
  const period = match[3];

  if (period === "PM" && hours !== 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;

  const classDate = new Date(baseDate);
  classDate.setHours(hours, minutes, 0, 0);

  return classDate;
}

console.log("🚀 Server-side notification system started!");
console.log("📧 Recipient:", CONFIG.recipient.email);
console.log("⏰ Daily summaries: 5:00 PM Malaysia time");
console.log("🔔 10-minute reminders: Before each class");
console.log("💜 Ready to send loving notifications to Serene 24/7!");

module.exports = { sendEmail, generateDailySummary };
