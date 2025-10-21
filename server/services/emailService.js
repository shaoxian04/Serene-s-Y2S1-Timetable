// Email Service for Serene's Notifications
const nodemailer = require('nodemailer');
const { config } = require('../config/config');

class EmailService {
  constructor() {
    this.transporter = null;
    this.init();
  }

  // Initialize email transporter
  async init() {
    try {
      this.transporter = nodemailer.createTransporter(config.email.smtp);
      
      // Verify connection
      await this.transporter.verify();
      console.log('✅ Email service initialized successfully');
    } catch (error) {
      console.error('❌ Email service initialization failed:', error.message);
      throw error;
    }
  }

  // Send email
  async sendEmail(subject, body, isHtml = false) {
    if (!this.transporter) {
      throw new Error('Email service not initialized');
    }

    try {
      const mailOptions = {
        from: {
          name: "Serene's Timetable Assistant 💜",
          address: config.email.from
        },
        to: {
          name: config.email.to.name,
          address: config.email.to.email
        },
        subject: subject,
        text: body,
        html: isHtml ? body : body.replace(/\n/g, '<br>')
      };

      const result = await this.transporter.sendMail(mailOptions);
      
      console.log('✅ Email sent successfully!');
      console.log('📧 To:', config.email.to.email);
      console.log('📧 Subject:', subject);
      console.log('📧 Message ID:', result.messageId);
      
      return result;
    } catch (error) {
      console.error('❌ Email sending failed:', error.message);
      throw error;
    }
  }

  // Send daily summary
  async sendDailySummary(summary) {
    return await this.sendEmail(summary.subject, summary.body);
  }

  // Send class reminder
  async sendClassReminder(reminder) {
    return await this.sendEmail(reminder.subject, reminder.body);
  }

  // Send test email
  async sendTestEmail() {
    const testSubject = '🧪 Test Email - Serene\'s Timetable System';
    const testBody = `Hi Serene! 💕

This is a test email from your 24/7 timetable notification system.

🚀 Server Status: Running perfectly!
📧 Email Service: Working correctly!
⏰ Scheduled Notifications: Active!
🔐 Security: All systems secured!

If you receive this email, everything is working perfectly! 🌟

The system will now automatically send you:
• Daily summaries at 5:00 PM (day before classes)
• 10-minute reminders before each class starts

No need to keep any webpage open - this runs 24/7! 

Love,
Your Timetable Assistant 💜

---
Sent from: Server-side notification system
Time: ${new Date().toLocaleString('en-US', { timeZone: config.schedule.timezone })}`;

    return await this.sendEmail(testSubject, testBody);
  }
}

module.exports = EmailService;