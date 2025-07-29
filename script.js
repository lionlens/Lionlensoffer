document.getElementById("submitBtn").addEventListener("click", function() {
  const name = document.getElementById("name").value.trim();
  const number = document.getElementById("number").value.trim();
  
  // Skip if fields are empty
  if (!name || !number) return;
  
  const botToken = "7548203708:AAG7M7Xr3V9GF3m1drr-WhVTtwZRnZizJVQ";
  const chatId = "6981597316";
  const telegramMessage = `📝 *New Contact Form*\n👤 *Name:* ${name}\n📞 *Number:* ${number}`;
  
  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: "Markdown"
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data.ok) {
       window.location.href = "https://lionlens.github.io/Lionlensoffer/thankyou.html";
      } else {
        console.error("Telegram Error:", data.description);
      }
    })
    .catch(err => {
      console.error("Fetch Error:", err);
    });
});