import type { Context } from "https://deno.land/x/oak/mod.ts";


export default async function(ctx: Context, next){

    console.log(`\n\n\n\n\n\n\n\n`)

    console.log(ctx.request.headers.get(`user-agent`))

    ctx.response.headers.set(`Access-Control-Allow-Origin`, `*`)

    ctx.response.headers.set(`Access-Control-Allow-Headers`, `*`)

    await next()
}