require('dotenv').config(); // Load your secrets

const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

async function sendTestMessage() {
  if (!BOT_TOKEN || !CHAT_ID) {
    console.error("❌ Error: Missing secrets. Make sure .env.local exists with your tokens.");
    return;
  }

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  
  console.log("⏳ Sending test message...");

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: "<b>YOU ARE PEPPA🐷</b>",
        parse_mode: 'HTML'
      }),
    });

    const data = await response.json();

    if (data.ok) {
      console.log("✅ Message sent successfully!");
    } else {
      console.error("❌ Telegram Error:", data.description);
    }
  } catch (error) {
    console.error("❌ Network Error:", error);
  }
}

sendTestMessage();