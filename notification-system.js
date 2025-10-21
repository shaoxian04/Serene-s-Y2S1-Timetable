// Notification System for Bae's Timetable
// Email: limtzehui05@gmail.com

class TimetableNotificationSystem {
  constructor() {
    // Load secure configuration
    this.config = window.SECURE_CONFIG;
    if (!this.config) {
      console.error('🚫 Security check failed - Notification system disabled');
      return;
    }
    
    this.girlfriendEmail = this.config.recipient.email;
    this.girlfriendName = this.config.recipient.name;
    this.notifications = [];
    this.checkInterval = null;
    this.init();
  }

  init() {
    // Check for notifications every minute
    this.checkInterval = setInterval(() => {
      this.checkNotifications();
    }, 60000); // 60 seconds

    // Initial check
    this.checkNotifications();

    // Schedule all notifications
    this.scheduleAllNotifications();
  }

  // Get current Malaysia time
  getMalaysiaTime() {
    return new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kuala_Lumpur",
    });
  }

  // Check if notifications should be sent
  checkNotifications() {
    const now = new Date(this.getMalaysiaTime());
    const currentTime = now.getTime();

    // Check for daily summary notifications (5 PM day before)
    this.checkDailySummaryNotifications(now);

    // Check for 10-minute before class notifications
    this.check10MinuteNotifications(now);
  }

  // Generate daily summary for next day's classes
  generateDailySummary(date) {
    const targetDate = new Date(date);
    targetDate.setDate(targetDate.getDate() + 1); // Next day

    const dayName = this.getDayName(targetDate);
    const weekNumber = this.getWeekNumber(targetDate);

    if (!weekNumber || !["Mon", "Tue", "Wed", "Thu", "Fri"].includes(dayName)) {
      return null; // No classes on weekends or invalid week
    }

    const activities = this.getActivitiesForDate(weekNumber, dayName);

    if (activities.length === 0) {
      return null; // No classes tomorrow
    }

    const formattedDate = targetDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "Asia/Kuala_Lumpur",
    });

    let summary = `📚 Tomorrow's Class Schedule - ${formattedDate}\n\n`;
    summary += `Hi Bae! 💕 Here's your schedule for tomorrow:\n\n`;

    // Group activities by time for better readability
    activities.sort((a, b) => {
      const timeA = this.parseTime(a.time);
      const timeB = this.parseTime(b.time);
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
    summary += `• Stay hydrated and take breaks between classes! 💧\n\n`;
    summary += `Good luck tomorrow! You've got this! 🌟\n`;
    summary += `Love, Your Timetable Assistant 💜`;

    return {
      subject: `📚 Tomorrow's Classes - ${formattedDate}`,
      body: summary,
      activities: activities,
    };
  }

  // Generate 10-minute reminder
  generate10MinuteReminder(activity) {
    const subject = `⏰ Class Starting Soon - ${activity.course}`;
    const body =
      `Hi Bae! 💕\n\n` +
      `Your class is starting in 10 minutes!\n\n` +
      `📖 Course: ${activity.course}\n` +
      `📚 Activity: ${activity.activity}\n` +
      `🕐 Time: ${activity.time}\n` +
      `${activity.mode === "Online" ? "💻" : "🏫"} Mode: ${activity.mode}\n` +
      `📍 Venue: ${activity.venue}\n\n` +
      `Quick reminders:\n` +
      `• Join the class link if it's online\n` +
      `• Have your materials ready\n` +
      `• Take a deep breath - you're prepared! 🌟\n\n` +
      `Good luck! 💜`;

    return { subject, body };
  }

  // Parse time string to minutes for comparison
  parseTime(timeString) {
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

  // Get day name from date
  getDayName(date) {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
  }

  // Get week number from date (based on your timetable reference)
  getWeekNumber(date) {
    const week2Wednesday = new Date(2025, 9, 22); // October 22, 2025
    const diffTime = date.getTime() - week2Wednesday.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const weekDiff = Math.floor(diffDays / 7);
    const weekNumber = 2 + weekDiff;

    return weekNumber >= 1 && weekNumber <= 14 ? weekNumber : null;
  }

  // Get activities for specific date
  getActivitiesForDate(weekNumber, dayName) {
    return timetableData.filter(
      (activity) => activity.week === weekNumber && activity.day === dayName
    );
  }

  // Check for daily summary notifications (5 PM day before)
  checkDailySummaryNotifications(now) {
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    // Check if it's 5:00 PM (17:00)
    if (currentHour === 17 && currentMinute === 0) {
      const summary = this.generateDailySummary(now);
      if (summary) {
        this.sendNotification("daily-summary", summary);
      }
    }
  }

  // Check for 10-minute before class notifications
  check10MinuteNotifications(now) {
    const currentDay = this.getDayName(now);
    const currentWeek = this.getWeekNumber(now);

    if (!currentWeek) return;

    const todayActivities = this.getActivitiesForDate(currentWeek, currentDay);

    todayActivities.forEach((activity) => {
      if (activity.time === "All Day") return;

      const classTime = this.getClassDateTime(now, activity.time);
      const tenMinutesBefore = new Date(classTime.getTime() - 10 * 60 * 1000);

      // Check if current time is within 1 minute of the 10-minute warning
      const timeDiff = Math.abs(now.getTime() - tenMinutesBefore.getTime());
      if (timeDiff < 60000) {
        // Within 1 minute
        const reminder = this.generate10MinuteReminder(activity);
        this.sendNotification("10-minute-reminder", reminder);
      }
    });
  }

  // Convert time string to full datetime
  getClassDateTime(baseDate, timeString) {
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

  // Send notification (multiple methods)
  sendNotification(type, content) {
    console.log(`📧 Notification (${type}):`, content);

    // Method 1: Browser notification
    this.showBrowserNotification(content);

    // Method 2: Email via EmailJS (requires setup)
    this.sendEmailNotification(content);

    // Method 3: Store for manual sending
    this.storeNotification(type, content);
  }

  // Browser notification
  showBrowserNotification(content) {
    if ("Notification" in window) {
      if (Notification.permission === "granted") {
        new Notification(content.subject, {
          body: content.body.substring(0, 100) + "...",
          icon: "📚",
        });
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            new Notification(content.subject, {
              body: content.body.substring(0, 100) + "...",
              icon: "📚",
            });
          }
        });
      }
    }
  }

  // Email notification via EmailJS - Auto-configured
  sendEmailNotification(content) {
    if (!this.config) {
      console.error('🚫 Security check failed - Email not sent');
      return;
    }
    
    if (typeof emailjs !== "undefined") {
      // Get secure configuration
      const SERVICE_ID = this.config.emailjs.serviceId;
      const TEMPLATE_ID = this.config.emailjs.templateId;

      const templateParams = {
        to_email: this.girlfriendEmail,
        to_name: this.girlfriendName,
        subject: content.subject,
        message: content.body,
        from_name: "Serene's Bae 💜",
      };

      console.log("📧 Auto-sending email notification...", content.subject);

      emailjs
        .send(SERVICE_ID, TEMPLATE_ID, templateParams)
        .then((response) => {
          console.log("✅ Email sent successfully to Serene!");
          console.log("📧 Subject:", content.subject);
          this.markNotificationAsSent(content);

          // Show success notification
          this.showSuccessNotification("Email sent to Serene! 💜");
        })
        .catch((error) => {
          console.error("❌ Email failed to send:", error);
          console.log("📧 Failed subject:", content.subject);

          // Show error notification
          this.showErrorNotification("Failed to send email to Serene");
        });
    } else {
      console.error("❌ EmailJS not loaded");
      this.showErrorNotification("EmailJS not available");
    }
  }

  // Show success notification
  showSuccessNotification(message) {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("✅ Success!", {
        body: message,
        icon: "💜",
      });
    }
    console.log("✅", message);
  }

  // Show error notification
  showErrorNotification(message) {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("❌ Error", {
        body: message,
        icon: "⚠️",
      });
    }
    console.error("❌", message);
  }

  // Open manual email as fallback
  openManualEmail(content) {
    const subject = encodeURIComponent(content.subject);
    const body = encodeURIComponent(content.body);
    const mailtoLink = `mailto:${this.girlfriendEmail}?subject=${subject}&body=${body}`;
    window.open(mailtoLink);
  }

  // Mark notification as sent
  markNotificationAsSent(content) {
    const stored = JSON.parse(
      localStorage.getItem("timetableNotifications") || "[]"
    );
    const notification = stored.find((n) => n.subject === content.subject);
    if (notification) {
      notification.sent = true;
      notification.sentAt = new Date().toISOString();
      localStorage.setItem("timetableNotifications", JSON.stringify(stored));
    }
  }

  // Store notification for manual review
  storeNotification(type, content) {
    const notification = {
      type: type,
      timestamp: new Date().toISOString(),
      email: this.girlfriendEmail,
      subject: content.subject,
      body: content.body,
      sent: false,
    };

    // Store in localStorage for persistence
    const stored = JSON.parse(
      localStorage.getItem("timetableNotifications") || "[]"
    );
    stored.push(notification);
    localStorage.setItem("timetableNotifications", JSON.stringify(stored));

    // Show in UI
    this.displayNotificationInUI(notification);
  }

  // Display notification in UI
  displayNotificationInUI(notification) {
    const container =
      document.getElementById("notificationContainer") ||
      this.createNotificationContainer();

    const notificationElement = document.createElement("div");
    notificationElement.className = "notification-item";
    notificationElement.innerHTML = `
            <div class="notification-header">
                <span class="notification-type">${notification.type}</span>
                <span class="notification-time">${new Date(
                  notification.timestamp
                ).toLocaleTimeString()}</span>
            </div>
            <div class="notification-subject">${notification.subject}</div>
            <div class="notification-preview">${notification.body.substring(
              0,
              100
            )}...</div>
            <button onclick="notificationSystem.viewFullNotification('${
              notification.timestamp
            }')">View Full</button>
            <div class="auto-sent-status">
                <small style="color: #10B981; font-weight: 600;">✅ Auto-sent to Serene</small>
            </div>
        `;

    container.insertBefore(notificationElement, container.firstChild);
  }

  // Create notification container in UI
  createNotificationContainer() {
    const container = document.createElement("div");
    container.id = "notificationContainer";
    container.className = "notification-container";
    container.innerHTML = "<h3>📧 Notifications</h3>";

    document.body.appendChild(container);
    return container;
  }

  // Schedule all notifications for testing
  scheduleAllNotifications() {
    console.log(
      "📅 Notification system initialized for:",
      this.girlfriendEmail
    );
    console.log("⏰ Checking for notifications every minute...");
    console.log("📧 Daily summaries will be sent at 5:00 PM");
    console.log("⚡ 10-minute reminders will be sent before each class");
  }

  // Auto-email system - manual sending removed for security

  // View full notification
  viewFullNotification(timestamp) {
    const stored = JSON.parse(
      localStorage.getItem("timetableNotifications") || "[]"
    );
    const notification = stored.find((n) => n.timestamp === timestamp);

    if (notification) {
      alert(`Subject: ${notification.subject}\n\n${notification.body}`);
    }
  }
}

// Initialize notification system
let notificationSystem;

// Start notification system when page loads
document.addEventListener("DOMContentLoaded", function () {
  notificationSystem = new TimetableNotificationSystem();

  // Request notification permission
  if ("Notification" in window && Notification.permission === "default") {
    Notification.requestPermission();
  }
});
// Toggle notification container visibility
function toggleNotifications() {
  let container = document.getElementById("notificationContainer");

  if (!container) {
    container = notificationSystem.createNotificationContainer();
    // Show some example notifications for demo
    showDemoNotifications();
  } else {
    container.style.display =
      container.style.display === "none" ? "block" : "none";
  }
}

// Show demo notifications for testing
function showDemoNotifications() {
  const demoNotifications = [
    {
      type: "daily-summary",
      timestamp: new Date().toISOString(),
      subject: "📚 Tomorrow's Classes - Thursday, October 23, 2025",
      body: "Hi Serene! 💕 Here's your schedule for tomorrow:\n\n1. 🕐 8:00 AM - 10:00 AM\n   📖 OIA2014 - Lecture (Antihepatitis, antiretroviral)\n   💻 Online\n   📍 Microsoft Teams\n\n2. 🕐 2:00 PM - 4:00 PM\n   📖 GFW0031 - Computer Network\n   💻 Online\n   📍 Online Platform\n\n3. 🕐 5:00 PM - 7:00 PM\n   📖 GKS1001 - Volunteerism\n   💻 Online\n   📍 Online Platform\n\nGood luck tomorrow! You've got this! 🌟\nLove, Your Timetable Assistant 💜",
      sent: false,
    },
    {
      type: "10-minute-reminder",
      timestamp: new Date(Date.now() - 300000).toISOString(), // 5 minutes ago
      subject: "⏰ Class Starting Soon - GFW0031",
      body: "Hi Bae! 💕\n\nYour class is starting in 10 minutes!\n\n📖 Course: GFW0031\n📚 Activity: Computer Network\n🕐 Time: 2:00 PM - 4:00 PM\n💻 Mode: Online\n📍 Venue: Online Platform\n\nGood luck! 💜",
      sent: false,
    },
  ];

  demoNotifications.forEach((notification) => {
    notificationSystem.displayNotificationInUI(notification);
  });
}

// Testing function for email notifications
function testEmailSystem() {
    if (!window.SECURE_CONFIG) {
        console.error('🚫 Security check failed');
        return;
    }
    
    console.log('🧪 Testing email system...');
    
    // Test daily summary
    const testSummary = {
        subject: '🧪 Test: Tomorrow\'s Classes - ' + new Date().toLocaleDateString(),
        body: 'Hi Serene! 💕\n\nThis is a test email from your timetable system.\n\n📚 Test Class:\n🕐 2:00 PM - 4:00 PM\n📖 GFW0031 - Computer Network\n💻 Online\n📍 Online Platform\n\nIf you receive this, the system is working perfectly! 🌟\n\nLove, Your Timetable Assistant 💜'
    };
    
    // Send test email
    if (window.notificationSystem) {
        window.notificationSystem.sendEmailNotification(testSummary);
        console.log('✅ Test email sent!');
    }
}

// Make function available globally for testing
window.testEmailSystem = testEmailSystem;

// Auto-notification system - no manual controls needed
// EmailJS Configuration Helper
class EmailJSSetup {
  constructor() {
    this.publicKey = "zQjgsucyyRVt9WxzU";
    this.serviceId = "service_4vw6rdn";
    this.templateId = "template_7aq02rs";
  }

  // Set your EmailJS service and template IDs
  configure(serviceId, templateId) {
    this.serviceId = serviceId;
    this.templateId = templateId;

    // Update the notification system
    if (window.notificationSystem) {
      notificationSystem.emailConfig = {
        serviceId: serviceId,
        templateId: templateId,
      };
    }

    console.log("✅ EmailJS configured successfully!");
    console.log("Service ID:", serviceId);
    console.log("Template ID:", templateId);

    // Save to localStorage for persistence
    localStorage.setItem(
      "emailjsConfig",
      JSON.stringify({
        serviceId: serviceId,
        templateId: templateId,
      })
    );
  }

  // Test email sending
  testEmail() {
    if (!this.serviceId || !this.templateId) {
      console.log(
        '❌ Please configure EmailJS first using: emailSetup.configure("serviceId", "templateId")'
      );
      return;
    }

    const testContent = {
      subject: "💜 Test Email from Serene's Timetable",
      body: "Hi Bae! 💕\n\nThis is a test email from your timetable notification system.\n\nIf you receive this, everything is working perfectly! 🌟\n\nLove,\nYour Timetable Assistant 💜",
    };

    emailjs
      .send(this.serviceId, this.templateId, {
        to_email: "limtzehui05@gmail.com",
        to_name: "Serene",
        subject: testContent.subject,
        message: testContent.body,
        from_name: "Serene's Bae 💜",
      })
      .then((response) => {
        console.log("✅ Test email sent successfully!", response);
        alert("✅ Test email sent to limtzehui05@gmail.com! Check your inbox.");
      })
      .catch((error) => {
        console.log("❌ Test email failed:", error);
        alert("❌ Test email failed. Please check your EmailJS configuration.");
      });
  }

  // Load saved configuration
  loadSavedConfig() {
    const saved = localStorage.getItem("emailjsConfig");
    if (saved) {
      const config = JSON.parse(saved);
      this.configure(config.serviceId, config.templateId);
    }
  }
}

// Initialize EmailJS setup helper
const emailSetup = new EmailJSSetup();

// Load saved configuration on page load
document.addEventListener("DOMContentLoaded", function () {
  emailSetup.loadSavedConfig();
});

// Update notification system to use configured EmailJS
if (window.TimetableNotificationSystem) {
  const originalSendEmail =
    TimetableNotificationSystem.prototype.sendEmailNotification;

  TimetableNotificationSystem.prototype.sendEmailNotification = function (
    content
  ) {
    const config = JSON.parse(localStorage.getItem("emailjsConfig") || "{}");

    if (
      config.serviceId &&
      config.templateId &&
      typeof emailjs !== "undefined"
    ) {
      const templateParams = {
        to_email: this.girlfriendEmail,
        to_name: "Serene",
        subject: content.subject,
        message: content.body,
        from_name: "Serene's Timetable Assistant 💜",
      };

      emailjs
        .send(config.serviceId, config.templateId, templateParams)
        .then((response) => {
          console.log(
            "✅ Email sent successfully!",
            response.status,
            response.text
          );
          this.markNotificationAsSent(content);
        })
        .catch((error) => {
          console.log("❌ Email failed to send:", error);
          this.openManualEmail(content);
        });
    } else {
      console.log("❌ EmailJS not configured, opening manual email");
      this.openManualEmail(content);
    }
  };
}
