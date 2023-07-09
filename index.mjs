import {bot} from "./bot.mjs";
import express from "express";
import {webhookCallback} from "grammy";

const app = express();

app.use(express.json());

app.post("/api", webhookCallback(bot, "express", {secretToken: "test"}));

export default app.listen(3000);

