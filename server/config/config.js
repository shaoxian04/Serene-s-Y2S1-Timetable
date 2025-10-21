// Secure Configuration for Server-Side Notifications
require('dotenv').config();

const config = {
  // Email Configuration
  email: {
    smtp: {
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    },
    from: process.env.SMTP_USER,
    to: {
      email: process.env.RECIPIENT_EMAIL || 'limtzehui05@gmail.com',
      name: process.env.RECIPIENT_NAME || 'Serene'
    }
  },

  // Schedule Configuration
  schedule: {
    dailySummary: '0 17 * * *', // 5:00 PM daily
    reminderCheck: '* * * * *',  // Every minute
    timezone: process.env.TIMEZONE || 'Asia/Kuala_Lumpur'
  },

  // Timetable Reference
  timetable: {
    referenceDate: new Date(2025, 9, 22), // October 22, 2025 (Week 2 Wednesday)
    referenceWeek: 2,
    totalWeeks: 14
  },

  // Security
  security: {
    allowedIPs: process.env.ALLOWED_IPS?.split(',') || ['127.0.0.1'],
    nodeEnv: process.env.NODE_ENV || 'development'
  }
};

// Validation
function validateConfig() {
  const required = [
    'SMTP_USER',
    'SMTP_PASS',
    'RECIPIENT_EMAIL'
  ];

  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }

  console.log('✅ Configuration validated successfully');
  return true;
}

module.exports = { config, validateConfig };