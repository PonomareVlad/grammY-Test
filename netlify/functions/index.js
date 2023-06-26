const {bot} = require("../../bot.js");
const {webhookCallback} = require("grammy");

exports.handler = webhookCallback(bot, "aws-lambda");
