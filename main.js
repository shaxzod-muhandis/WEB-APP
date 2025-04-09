const TelegramBot = require('node-telegram-bot-api');

const token = '6960637572:AAF-QNTEkQ7_Qwujn-6FcYZ4hAp1y81pD68';
const bot = new TelegramBot(token);
const webAppUrl = 'https://bookingwebappuz.netlify.app/';

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body); 
    const chatId = body.message.chat.id;

    if (body.message.text === '/start') {
      const keyboard = {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: 'Open Web App',
                web_app: { url: webAppUrl }
              }
            ]
          ]
        }
      };

      await bot.sendMessage(chatId, 'Open the web app using the button below:', keyboard);
    }

    return {
      statusCode: 200,
      body: 'OK'
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: 'Error'
    };
  }
};