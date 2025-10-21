// EmailJS Setup Functions

// Auto-configured email system - no manual setup needed
function getEmailStatus() {
  return {
    configured: true,
    serviceId: "service_4vw6rdn",
    recipient: "limtzehui05@gmail.com",
    status: "Active",
  };
}

// Simple notification toggle - no setup needed
function toggleNotifications() {
  let container = document.getElementById("notificationContainer");

  if (!container) {
    container = notificationSystem.createNotificationContainer();

    // Add status info instead of setup button
    const statusInfo = document.createElement("div");
    statusInfo.className = "notification-status";
    const config = window.SECURE_CONFIG;
    if (config) {
      statusInfo.innerHTML = `
                <div style="background: rgba(16, 185, 129, 0.1); padding: 15px; border-radius: 10px; margin: 10px 0; border-left: 4px solid #10B981;">
                    <strong>🔐 Secure Email System Active</strong><br>
                    <small>� Reucipient: ${config.recipient.email} (${config.recipient.name})</small><br>
                    <small>⏰ Daily summaries at ${config.notifications.dailySummaryTime}:00</small><br>
                    <small>🔔 ${config.notifications.reminderMinutes}-minute class reminders</small><br>
                    <small>🔐 Configuration secured & encrypted</small><br>
                    <small>💜 Ready to send loving notifications!</small>
                </div>
            `;
    } else {
      statusInfo.innerHTML = `
                <div style="background: rgba(239, 68, 68, 0.1); padding: 15px; border-radius: 10px; margin: 10px 0; border-left: 4px solid #EF4444;">
                    <strong>🚫 Security Check Failed</strong><br>
                    <small>Email system disabled for security</small>
                </div>
            `;
    }
    container.appendChild(statusInfo);

    // Show some example notifications for demo
    showDemoNotifications();
  } else {
    container.style.display =
      container.style.display === "none" ? "block" : "none";
  }
}

// Enhanced demo notifications with current date
function showDemoNotifications() {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const tomorrowFormatted = tomorrow.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Kuala_Lumpur",
  });

  const demoNotifications = [
    {
      type: "daily-summary",
      timestamp: new Date().toISOString(),
      subject: `📚 Tomorrow's Classes - ${tomorrowFormatted}`,
      body: `Hi Serene! 💕 Here's your schedule for tomorrow:\n\n1. 🕐 2:00 PM - 4:00 PM\n   📖 GFW0031 - Computer Network\n   💻 Online\n   📍 Online Platform\n\n2. 🕐 5:00 PM - 7:00 PM\n   📖 GIG1013 - Ethics\n   💻 Online\n   📍 Online Platform\n\n💡 Tips for tomorrow:\n• Set your alarms 15 minutes before each class\n• Check your internet connection for online classes\n• Stay hydrated! 💧\n\nGood luck tomorrow! You've got this! 🌟\nLove, Your Timetable Assistant 💜`,
      sent: false,
    },
    {
      type: "10-minute-reminder",
      timestamp: new Date(Date.now() - 300000).toISOString(),
      subject: "⏰ Class Starting Soon - GFW0031",
      body: "Hi Serene! 💕\n\nYour class is starting in 10 minutes!\n\n📖 Course: GFW0031\n📚 Activity: Computer Network\n🕐 Time: 2:00 PM - 4:00 PM\n💻 Mode: Online\n📍 Venue: Online Platform\n\nQuick reminders:\n• Join the class link\n• Have your materials ready\n• Take a deep breath - you're prepared! 🌟\n\nGood luck! 💜",
      sent: false,
    },
  ];

  demoNotifications.forEach((notification) => {
    notificationSystem.displayNotificationInUI(notification);
  });
}

// Secure email system status
document.addEventListener("DOMContentLoaded", function () {
  const config = window.SECURE_CONFIG;
  if (config) {
    console.log("🔐 Email System Status: ✅ Securely Configured & Active");
    console.log(
      "📧 Recipient:",
      config.recipient.email,
      `(${config.recipient.name})`
    );
    console.log(
      "📧 Daily summaries:",
      `${config.notifications.dailySummaryTime}:00 (day before classes)`
    );
    console.log(
      "📧 Reminders:",
      `${config.notifications.reminderMinutes} minutes before each class`
    );
    console.log("📧 Timezone:", config.notifications.timezone);
    console.log("🔐 Configuration loaded securely");
    console.log("💜 Ready to send loving notifications!");
  } else {
    console.error("🚫 Security check failed - Email system disabled");
  }
});
