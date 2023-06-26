import {bot} from "./bot.mjs";
import {webhookCallback} from "grammy";

addEventListener("fetch", webhookCallback(bot, "cloudflare"));
