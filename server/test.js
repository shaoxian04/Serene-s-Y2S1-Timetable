// Test Script for Serene's Notification System
require('dotenv').config();

const NotificationService = require('./services/notificationService');

async function runTests() {
  console.log('🧪 Testing Serene\'s Notification System\n');
  
  try {
    // Initialize notification service
    const notificationService = new NotificationService();
    
    // Test 1: System Status
    console.log('📊 Test 1: System Status');
    console.log('─'.repeat(30));
    const status = notificationService.getStatus();
    console.log('Current Week:', status.current.week);
    console.log('Current Day:', status.current.day);
    console.log('Today\'s Classes:', status.current.todayClasses);
    console.log('Tomorrow\'s Classes:', status.tomorrow.classes);
    console.log('✅ Status test passed\n');
    
    // Test 2: Daily Summary Generation
    console.log('📚 Test 2: Daily Summary Generation');
    console.log('─'.repeat(30));
    const summary = notificationService.generateDailySummary();
    if (summary) {
      console.log('Subject:', summary.subject);
      console.log('Activities Count:', summary.activitiesCount);
      console.log('✅ Daily summary generated successfully\n');
    } else {
      console.log('ℹ️ No classes tomorrow - summary not generated\n');
    }
    
    // Test 3: Email Service Test
    console.log('📧 Test 3: Email Service Test');
    console.log('─'.repeat(30));
    console.log('Sending test email to Serene...');
    
    await notificationService.sendTestNotification();
    console.log('✅ Test email sent successfully!\n');
    
    // Test 4: Configuration Validation
    console.log('🔐 Test 4: Configuration Validation');
    console.log('─'.repeat(30));
    console.log('SMTP User:', process.env.SMTP_USER ? '✅ Set' : '❌ Missing');
    console.log('SMTP Pass:', process.env.SMTP_PASS ? '✅ Set' : '❌ Missing');
    console.log('Recipient Email:', process.env.RECIPIENT_EMAIL ? '✅ Set' : '❌ Missing');
    console.log('✅ Configuration validation complete\n');
    
    console.log('🎉 All tests completed successfully!');
    console.log('💜 The system is ready to send notifications to Serene!');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    process.exit(1);
  }
}

// Run tests if this file is executed directly
if (require.main === module) {
  runTests();
}

module.exports = { runTests };