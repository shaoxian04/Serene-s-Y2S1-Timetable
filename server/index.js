// Serene's 24/7 Timetable Notification System
// Server-side application for reliable email notifications

const cron = require('node-cron');
const { validateConfig } = require('./config/config');
const NotificationService = require('./services/notificationService');

class TimetableNotificationServer {
  constructor() {
    this.notificationService = null;
    this.jobs = [];
  }

  // Initialize the server
  async init() {
    try {
      console.log('🚀 Starting Serene\'s Timetable Notification System...\n');
      
      // Validate configuration
      validateConfig();
      
      // Initialize notification service
      this.notificationService = new NotificationService();
      
      // Schedule jobs
      this.scheduleJobs();
      
      // Show status
      this.showStatus();
      
      console.log('\n✅ Server started successfully!');
      console.log('💜 Ready to send loving notifications to Serene 24/7!\n');
      
    } catch (error) {
      console.error('❌ Server initialization failed:', error.message);
      process.exit(1);
    }
  }

  // Schedule cron jobs
  scheduleJobs() {
    const { config } = require('./config/config');
    
    // Daily summary at 5:00 PM Malaysia time
    const dailySummaryJob = cron.schedule(config.schedule.dailySummary, async () => {
      await this.notificationService.sendDailySummary();
    }, {
      timezone: config.schedule.timezone,
      scheduled: false
    });

    // Class reminders (check every minute)
    const reminderJob = cron.schedule(config.schedule.reminderCheck, async () => {
      await this.notificationService.sendClassReminders();
    }, {
      timezone: config.schedule.timezone,
      scheduled: false
    });

    this.jobs = [
      { name: 'Daily Summary', job: dailySummaryJob, schedule: config.schedule.dailySummary },
      { name: 'Class Reminders', job: reminderJob, schedule: config.schedule.reminderCheck }
    ];

    // Start all jobs
    this.jobs.forEach(({ name, job }) => {
      job.start();
      console.log(`✅ ${name} job scheduled and started`);
    });
  }

  // Show system status
  showStatus() {
    const status = this.notificationService.getStatus();
    
    console.log('\n📊 System Status:');
    console.log('─'.repeat(50));
    console.log(`🔐 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`📧 Recipient: ${status.recipient.email} (${status.recipient.name})`);
    console.log(`🌍 Timezone: ${status.system.timezone}`);
    console.log(`📅 Current Week: ${status.current.week || 'N/A'}`);
    console.log(`📆 Current Day: ${status.current.day}`);
    console.log(`📚 Today's Classes: ${status.current.todayClasses}`);
    console.log(`📚 Tomorrow's Classes: ${status.tomorrow.classes}`);
    console.log('─'.repeat(50));
    
    console.log('\n⏰ Scheduled Jobs:');
    this.jobs.forEach(({ name, schedule }) => {
      console.log(`  • ${name}: ${schedule}`);
    });
  }

  // Send test notification
  async sendTest() {
    try {
      console.log('\n🧪 Sending test notification...');
      await this.notificationService.sendTestNotification();
    } catch (error) {
      console.error('❌ Test notification failed:', error.message);
    }
  }

  // Graceful shutdown
  shutdown() {
    console.log('\n🛑 Shutting down server...');
    
    this.jobs.forEach(({ name, job }) => {
      job.stop();
      console.log(`✅ ${name} job stopped`);
    });
    
    console.log('✅ Server shutdown complete');
    process.exit(0);
  }
}

// Initialize server
const server = new TimetableNotificationServer();

// Handle process signals
process.on('SIGINT', () => server.shutdown());
process.on('SIGTERM', () => server.shutdown());

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('❌ Uncaught Exception:', error.message);
  server.shutdown();
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
  server.shutdown();
});

// Start the server
server.init();

// Export for testing
module.exports = server;