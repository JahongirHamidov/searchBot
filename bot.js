require('dotenv').config();
const Telegraf = require('telegraf');

const bot = new Telegraf(process.env.TOKEN);

const startCommand = require('./src/commands/start');
startCommand(bot);

const startHandler = require('./src/inlinehandlers/start');
startHandler(bot);

const imageHandler = require('./src/inlinehandlers/image');
imageHandler(bot);

const wikiHandler = require('./src/inlinehandlers/wiki');
wikiHandler(bot);

bot.launch();