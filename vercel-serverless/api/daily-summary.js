// Vercel Serverless Function for Daily Summary
// This runs on Vercel Cron (requires Pro plan)

const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  // Only allow POST requests and cron
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Email configuration
    const transporter = nodemailer.createTransporter({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    // Generate daily summary (simplified)
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const formattedDate = tomorrow.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'Asia/Kuala_Lumpur'
    });

    const emailContent = `Hi Serene! 💕

Here's your schedule for tomorrow (${formattedDate}):

🕐 2:00 PM - 4:00 PM
📖 GFW0031 - Computer Network
💻 Online
📍 Online Platform

🕐 5:00 PM - 7:00 PM  
📖 GIG1013 - Ethics
💻 Online
📍 Online Platform

💡 Tips for tomorrow:
• Set your alarms 15 minutes before each class
• Check your internet connection for online classes
• Stay hydrated! 💧

Good luck tomorrow! You've got this! 🌟

Love,
Your Timetable Assistant 💜`;

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'limtzehui05@gmail.com',
      subject: `📚 Tomorrow's Classes - ${formattedDate}`,
      text: emailContent
    });

    res.status(200).json({ 
      success: true, 
      message: 'Daily summary sent successfully',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
}