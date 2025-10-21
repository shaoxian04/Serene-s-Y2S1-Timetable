# 📧 Email Notification Setup Guide

## Overview

The notification system for Serene's timetable includes:

- **Daily Summary**: Sent at 5:00 PM the day before classes
- **10-minute Reminders**: Sent 10 minutes before each class starts
- **Recipient**: limtzehui05@gmail.com

## 🚀 Setup Options

### Option 1: EmailJS (Recommended - Free & Easy)

1. **Sign up at EmailJS**: Go to https://www.emailjs.com/
2. **Create a service**: Connect your Gmail account
3. **Create a template** with these variables:

   - `{{to_email}}` - Recipient email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email body
   - `{{from_name}}` - Sender name

4. **Add EmailJS to your HTML**:

```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>
  emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your public key
</script>
```

5. **Update notification-system.js**:

```javascript
// Replace YOUR_SERVICE_ID and YOUR_TEMPLATE_ID with actual values
emailjs.send("service_4vw6rdn", "YOUR_TEMPLATE_ID", {
  to_email: "limtzehui05@gmail.com",
  subject: content.subject,
  message: content.body,
  from_name: "Serene's Timetable Assistant",
});
```

### Option 2: Browser Notifications (Already Working)

- Automatically requests permission when page loads
- Shows desktop notifications
- Works offline

### Option 3: Manual Email (Already Working)

- Notifications are stored in browser
- Click "Send Email" to open email client
- Pre-fills recipient, subject, and body

## 📱 Current Features

### Daily Summary Email Example:

```
Subject: 📚 Tomorrow's Classes - Wednesday, October 23, 2024

Hi Bae! 💕 Here's your schedule for tomorrow:

1. 🕐 9:00 AM - 12:00 PM
   📖 OIA1017 - Intro to module, Lecture (Health supplement)
   💻 Online
   📍 F2F ONLINE

2. 🕐 2:00 PM - 4:00 PM
   📖 GFW0031 - Computer Network
   💻 Online
   📍 Online Platform

3. 🕐 5:00 PM - 7:00 PM
   📖 GIG1013 - Ethics
   💻 Online
   📍 Online Platform

💡 Tips for tomorrow:
• Set your alarms 15 minutes before each class
• Prepare your materials tonight
• Check your internet connection for online classes
• Stay hydrated and take breaks between classes! 💧

Good luck tomorrow! You've got this! 🌟
Love, Your Timetable Assistant 💜
```

### 10-Minute Reminder Example:

```
Subject: ⏰ Class Starting Soon - OIA1017

Hi Bae! 💕

Your class is starting in 10 minutes!

📖 Course: OIA1017
📚 Activity: Intro to module, Lecture (Health supplement)
🕐 Time: 9:00 AM - 12:00 PM
💻 Mode: Online
📍 Venue: F2F ONLINE

Quick reminders:
• Join the class link if it's online
• Have your materials ready
• Take a deep breath - you're prepared! 🌟

Good luck! 💜
```

## 🔧 Testing the System

1. **Open browser console** (F12)
2. **Check for logs**: Look for notification system messages
3. **Test notifications**:

   ```javascript
   // Test daily summary
   notificationSystem.generateDailySummary(new Date());

   // Test 10-minute reminder
   notificationSystem.generate10MinuteReminder({
     course: "TEST101",
     activity: "Test Class",
     time: "2:00 PM - 3:00 PM",
     mode: "Online",
     venue: "Test Venue",
   });
   ```

## 📋 Notification Schedule

The system automatically:

- ✅ Checks every minute for notifications
- ✅ Sends daily summaries at 5:00 PM (day before)
- ✅ Sends 10-minute reminders before each class
- ✅ Uses Malaysia timezone (Asia/Kuala_Lumpur)
- ✅ Stores notifications in browser for manual sending

## 🎯 Next Steps

1. **Set up EmailJS** for automatic email sending
2. **Test the system** with upcoming classes
3. **Enable browser notifications** for desktop alerts
4. **Bookmark the timetable page** for easy access

## 💝 Sweet Features for Your Girlfriend

- Personalized messages with "Hi Bae! 💕"
- Encouraging words and motivational messages
- Cute emojis and formatting
- Practical reminders and tips
- Love notes from "Your Timetable Assistant 💜"

The system is designed to be helpful, caring, and supportive - just like a loving partner! 🌟
