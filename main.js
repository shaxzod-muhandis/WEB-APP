const TelegramBot = require('node-telegram-bot-api');

// Tokeningizni kiriting
const token = '6960637572:AAF-QNTEkQ7_Qwujn-6FcYZ4hAp1y81pD68';
const bot = new TelegramBot(token, { polling: true });

// Web App URL
const webAppUrl = 'https://bookingwebappuz.netlify.app/';

// "/start" komandasi uchun ishlaydi
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // Inline keyboardni yaratish
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Open Web App', // Tugma matni
            web_app: {
              url: webAppUrl // Web App URL manzili
            }
          }
        ]
      ]
    }
  };

  // Xabar yuborish
  bot.sendMessage(chatId, 'Open the web app using the button below:', keyboard);
});

