import {bot} from "../bot";
import {webhookCallback} from "grammy";

export const config = {runtime: "edge"};

export default webhookCallback(bot, "std/http");
