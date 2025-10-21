# 🚀 Serene's 24/7 Timetable Notification System

A reliable server-side application that sends automatic email notifications for Serene's class schedule.

## ✨ Features

- 📧 **24/7 Email Notifications** - Works without any webpage being open
- ⏰ **Daily Summaries** - Sent at 5:00 PM (day before classes)
- 🔔 **10-Minute Reminders** - Sent before each class starts
- 🔐 **Secure Configuration** - Environment variables for sensitive data
- 🌍 **Malaysia Timezone** - All schedules in Asia/Kuala_Lumpur
- 💜 **Loving Messages** - Personalized, caring email content

## 🏗️ Project Structure

```
server/
├── config/
│   └── config.js          # Configuration management
├── data/
│   └── timetable.js        # Serene's complete timetable
├── services/
│   ├── emailService.js     # Email sending functionality
│   ├── timetableService.js # Schedule management
│   └── notificationService.js # Notification logic
├── index.js                # Main server application
├── test.js                 # Testing utilities
├── package.json            # Dependencies and scripts
├── .env.example            # Environment variables template
└── README.md               # This file
```

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd server
npm install
```

### 2. Configure Environment
```bash
# Copy environment template
cp .env.example .env

# Edit .env with your credentials
nano .env
```

### 3. Set Up Gmail App Password
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Enable 2-Factor Authentication
3. Generate App Password for "Mail"
4. Use this password in `.env` file

### 4. Test the System
```bash
npm test
```

### 5. Start the Server
```bash
npm start
```

## ⚙️ Configuration

### Environment Variables (.env)
```env
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-digit-app-password

# Recipient Configuration
RECIPIENT_EMAIL=limtzehui05@gmail.com
RECIPIENT_NAME=Serene

# System Configuration
TIMEZONE=Asia/Kuala_Lumpur
NODE_ENV=production
```

## 📧 Email Schedule

### Daily Summary (5:00 PM)
- Sent every day at 5:00 PM Malaysia time
- Contains tomorrow's complete class schedule
- Includes helpful tips and reminders
- Only sent if there are classes tomorrow

### Class Reminders (10 minutes before)
- Sent 10 minutes before each class starts
- Contains class details and quick reminders
- Automatically calculated based on Malaysia timezone

## 🧪 Testing

### Run All Tests
```bash
npm test
```

### Test Individual Components
```javascript
// Test email sending
const { NotificationService } = require('./services/notificationService');
const service = new NotificationService();
await service.sendTestNotification();

// Test daily summary generation
const summary = service.generateDailySummary();
console.log(summary);

// Check system status
const status = service.getStatus();
console.log(status);
```

## 🚀 Deployment Options

### Option 1: Railway (Recommended)
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

### Option 2: Heroku
```bash
# Install Heroku CLI
# Create new app
heroku create serene-timetable-notifications

# Set environment variables
heroku config:set SMTP_USER=your-email@gmail.com
heroku config:set SMTP_PASS=your-app-password
heroku config:set RECIPIENT_EMAIL=limtzehui05@gmail.com

# Deploy
git push heroku main
```

### Option 3: DigitalOcean App Platform
1. Connect your GitHub repository
2. Set environment variables in dashboard
3. Deploy automatically

## 📊 Monitoring

### Server Logs
```bash
# View logs in production
railway logs  # Railway
heroku logs --tail  # Heroku
```

### Health Check
The server provides status information on startup and includes error handling for:
- Email service failures
- Configuration errors
- Network issues
- Cron job failures

## 🔐 Security Features

- ✅ Environment variables for sensitive data
- ✅ Input validation and sanitization
- ✅ Error handling and logging
- ✅ Graceful shutdown handling
- ✅ No hardcoded credentials

## 🛠️ Maintenance

### Update Timetable Data
Edit `data/timetable.js` to add/modify classes:
```javascript
{
  week: 15, 
  day: "Mon", 
  time: "8:00 AM - 10:00 AM", 
  course: "NEW101", 
  activity: "New Lecture", 
  mode: "Physical", 
  venue: "New Venue"
}
```

### Modify Schedule Times
Edit `config/config.js`:
```javascript
schedule: {
  dailySummary: '0 17 * * *', // 5:00 PM daily
  reminderCheck: '* * * * *',  // Every minute
  timezone: 'Asia/Kuala_Lumpur'
}
```

## 📞 Support

### Common Issues

**Email not sending:**
- Check Gmail App Password
- Verify SMTP credentials
- Check server logs

**Wrong timezone:**
- Verify TIMEZONE environment variable
- Check system timezone settings

**Missing notifications:**
- Ensure server is running 24/7
- Check cron job status
- Verify timetable data

### Debug Commands
```bash
# Check configuration
node -e "console.log(require('./config/config').config)"

# Test email service
node -e "require('./test').runTests()"

# Check current week/day
node -e "const t = new (require('./services/timetableService'))(); console.log('Week:', t.getCurrentWeek(), 'Day:', t.getCurrentDay())"
```

## 💜 About

This system was built with love to help Serene stay organized with her studies. It runs 24/7 to ensure she never misses a class and always knows what's coming up.

**Features designed with care:**
- Loving, supportive message tone
- Helpful tips and reminders
- Reliable 24/7 operation
- Beautiful email formatting
- Timezone-aware scheduling

Made with 💜 for Serene's academic success!