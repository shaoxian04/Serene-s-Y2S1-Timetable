// Secure Configuration for Serene's Timetable
// This file contains sensitive EmailJS credentials

const CONFIG = {
    // EmailJS Configuration
    emailjs: {
        publicKey: 'zQjgsucyyRVt9WxzU',
        serviceId: 'service_4vw6rdn',
        templateId: 'template_7aq02rs'
    },
    
    // Recipient Configuration
    recipient: {
        email: 'limtzehui05@gmail.com',
        name: 'Serene'
    },
    
    // Notification Settings
    notifications: {
        dailySummaryTime: 17, // 5:00 PM (24-hour format)
        reminderMinutes: 10,   // 10 minutes before class
        timezone: 'Asia/Kuala_Lumpur'
    },
    
    // Security Settings
    security: {
        allowedDomains: ['localhost', '127.0.0.1', 'your-domain.com'], // Add your actual domain
        enableLogging: true
    }
};

// Security check - only allow on authorized domains
function isAuthorizedDomain() {
    const currentDomain = window.location.hostname;
    return CONFIG.security.allowedDomains.includes(currentDomain) || 
           currentDomain.includes('github.io') || // GitHub Pages
           currentDomain.includes('netlify.app') || // Netlify
           currentDomain.includes('vercel.app'); // Vercel
}

// Secure config getter
function getSecureConfig() {
    if (!isAuthorizedDomain()) {
        console.error('🚫 Unauthorized domain access blocked');
        return null;
    }
    return CONFIG;
}

// Export for use in other files
window.SECURE_CONFIG = getSecureConfig();