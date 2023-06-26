import {Bot} from "grammy";
import {StatelessQuestion} from "@grammyjs/stateless-question";

export const token = Deno.env.get("TELEGRAM_BOT_TOKEN");

export const bot = new Bot(token);

const test = new StatelessQuestion("test",
    async (ctx, additionalState) => void await ctx.reply([
        "Timestamp from previous message: ",
        additionalState
    ].join("\r\n"))
);

bot.use(test.middleware());

const text = "Send any message to test stateless-question plugin";

bot.on("message:text", ctx =>
    test.replyWithMarkdown(ctx, text, new Date().toISOString())
);
