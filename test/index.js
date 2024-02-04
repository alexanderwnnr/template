const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

// Устанавливаем токен вашего бота
const token = "6726110503:AAGY95WbBWjreubMtGPpUaAauhgTq65Oyu0";

const bot = new TelegramBot(token, {polling: true});

// Создаем экземпляр Express
const app = express();

// Обработчик для корневого маршрута
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Обработчик для маршрута /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'димооон, ракеты!.');
});
bot.onText(/\/data/, (msg) => {
	const data = {
		key1: "value1",
		key2: "value2"
	}
	const chatId = msg.chat.id;
	console.log(msg);
	bot.sendMessage(chatId, JSON.stringify(msg));
	
});

// Запускаем Express на порту 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
//const id = "1722115637"
//bot.sendMessage(id, "салам, бродяга")

