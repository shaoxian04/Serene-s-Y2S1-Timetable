# 🔐 Security Guide for Serene's Timetable

## 🛡️ Security Features Implemented

### 1. **Secure Configuration Storage**

- All sensitive keys stored in `config.js`
- Domain-based access control
- Runtime security checks

### 2. **Protected Credentials**

- EmailJS Public Key: `zQjgsucyyRVt9WxzU`
- Service ID: `service_4vw6rdn`
- Template ID: `template_7aq02rs`
- Recipient Email: `limtzehui05@gmail.com`

### 3. **Access Control**

- Only authorized domains can access the configuration
- Automatic blocking of unauthorized access
- Console logging for security events

## 🔒 How to Keep Your Keys Safe

### **For Development:**

1. Keep `config.js` in your local development only
2. Never commit sensitive keys to public repositories
3. Use environment variables for production

### **For Production Deployment:**

#### **Option 1: Environment Variables (Recommended)**

```javascript
// In config.js for production
const CONFIG = {
  emailjs: {
    publicKey: process.env.EMAILJS_PUBLIC_KEY,
    serviceId: process.env.EMAILJS_SERVICE_ID,
    templateId: process.env.EMAILJS_TEMPLATE_ID,
  },
  recipient: {
    email: process.env.RECIPIENT_EMAIL,
    name: process.env.RECIPIENT_NAME,
  },
};
```

#### **Option 2: Separate Config Files**

- `config.js` - Public configuration
- `config.private.js` - Private keys (not committed to git)

### **For GitHub Pages:**

1. Use GitHub Secrets for environment variables
2. Build process injects secrets into config
3. Never expose keys in public repositories

## 🚨 Security Best Practices

### **What's Protected:**

✅ EmailJS credentials are not hardcoded in main files  
✅ Domain-based access control prevents unauthorized use  
✅ Runtime security checks validate configuration  
✅ Console logging tracks security events

### **Additional Recommendations:**

1. **Add to .gitignore:**

```
config.js
config.private.js
.env
*.key
```

2. **Rotate Keys Regularly:**

- Change EmailJS keys every 3-6 months
- Update template IDs if needed
- Monitor EmailJS usage dashboard

3. **Monitor Access:**

- Check EmailJS dashboard for unusual activity
- Monitor console logs for security warnings
- Set up email alerts for failed attempts

## 🔧 Deployment Security

### **Before Going Live:**

1. **Update Allowed Domains:**

```javascript
allowedDomains: [
  "your-actual-domain.com",
  "www.your-domain.com",
  "subdomain.your-domain.com",
];
```

2. **Remove Development Domains:**

- Remove 'localhost' and '127.0.0.1' from production
- Only keep your actual domain names

3. **Test Security:**

- Verify unauthorized domains are blocked
- Check that keys are not visible in browser dev tools
- Confirm emails only send from authorized domains

## 🛠️ Emergency Procedures

### **If Keys Are Compromised:**

1. **Immediately:**

   - Regenerate all EmailJS keys
   - Update `config.js` with new keys
   - Deploy updated configuration

2. **Monitor:**

   - Check EmailJS usage for unauthorized sends
   - Review email logs for suspicious activity
   - Update security settings if needed

3. **Prevent Future Issues:**
   - Review access control settings
   - Audit who has access to the code
   - Consider additional security layers

## 📞 Support

If you need help with security configuration:

1. Check console logs for security messages
2. Verify domain is in allowed list
3. Ensure config.js is loaded before other scripts
4. Test with browser developer tools

Remember: Security is about layers - this system provides multiple protection levels to keep Serene's notifications safe and private! 🔐💜
