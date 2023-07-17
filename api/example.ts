const {
    DEVELOPER_ID
} = process.env;

import {bot} from "../bot";

const id = parseInt(DEVELOPER_ID);

export const config = {runtime: "edge"};

export default async function handler(req: Request) {

    if (req.method !== "POST") {

        return new Response(
            JSON.stringify({message: "Method not allowed"}),
            {
                headers: {"Content-Type": "application/json"},
                status: 405,
            }
        );

    }

    return new Response(
        JSON.stringify(
            await bot.api.sendMessage(id, "Hello World")
        ),
        {
            headers: {"Content-Type": "application/json"}
        }
    );

}
