import {bot} from "./bot.mjs";
import {webhookCallback} from "grammy";
import {serve} from "https://deno.land/std@0.192.0/http/server.ts";

const handleUpdate = webhookCallback(bot, "std/http");

await serve(async (req) => {
    if (req.method === "POST") {
        const url = new URL(req.url);
        if (url.pathname.slice(1) === bot.token) {
            try {
                return await handleUpdate(req);
            } catch (err) {
                console.error(err);
            }
        }
    }
    return new Response();
});
