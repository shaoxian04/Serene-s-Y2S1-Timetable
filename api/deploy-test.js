export default async function handler(request, response) {
  // 1. Debugging: Check if secrets exist (Don't print the actual secrets!)
  console.log("Checking secrets...");

  const token = process.env.BOT_TOKEN;
  const chatId = process.env.CHAT_ID;

  if (!token) {
    console.error("❌ Error: TELEGRAM_BOT_TOKEN is missing.");
    return response.status(500).json({ error: "Missing Bot Token" });
  }

  // 2. Prepare the Telegram URL
  // We trim() the token to remove any accidental spaces you might have pasted
  const url = `https://api.telegram.org/bot${token.trim()}/sendMessage`;

  try {
    // 3. Send the message
    const telegramResponse = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: "<b>🔔 TEST SUCCESS!</b>\nYour Vercel function is working.",
        parse_mode: "HTML",
      }),
    });

    const data = await telegramResponse.json();

    if (!telegramResponse.ok) {
      // If Telegram says "Unauthorized", print the reason
      console.error("❌ Telegram API Error:", data);
      return response.status(401).json({ error: data.description });
    }

    // 4. Success!
    return response.status(200).json({ status: "Message sent!", data });
  } catch (error) {
    console.error("❌ Network Error:", error);
    return response.status(500).json({ error: error.message });
  }
}
