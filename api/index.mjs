import {bot} from "../bot.mjs";
import {webhookCallback} from "grammy";

export const config = {runtime: "edge"};

export default webhookCallback(bot, "std/http");
