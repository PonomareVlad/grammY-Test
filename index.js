const {init} = require("./bot.js");
const {webhookCallback} = require("grammy");
const functions = require("firebase-functions");
const {defineSecret} = require("firebase-functions/params");

const token = defineSecret("TELEGRAM_BOT_TOKEN");

exports.webhook = functions
    .runWith({secrets: [token]})
    .https.onRequest((...args) =>
        webhookCallback(init(token.value()))(...args)
    );
