import functions from "@google-cloud/functions-framework";
import {webhookCallback} from "grammy";
import {bot} from "./bot.js";

functions.http("webhook", webhookCallback(bot, "express"));
