import {bot} from "../bot.mjs";
import {webhookCallback} from "grammy";

export default webhookCallback(bot, "http");
