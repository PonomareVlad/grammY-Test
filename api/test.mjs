export const test = await Promise.resolve(new Date().toISOString());

export const config = {runtime: "edge"};

export default () => new Response(test);
