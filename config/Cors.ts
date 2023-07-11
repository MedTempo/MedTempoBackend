import type { Context } from "https://deno.land/x/oak/mod.ts";


export default async function(ctx: Context, next){

    console.log(`\n\n\n\n\n\n\n\n`)

    console.log(ctx.request.headers.get(`user-agent`))

    ctx.response.headers.set(`Access-Control-Allow-Origin`, `*`)

    ctx.response.headers.set(`Access-Control-Allow-Headers`, `*`)

    ctx.response.headers.set(`Access-Control-Allow-Methods`, ` POST, GET, PATCH, DELETE`)

    ctx.response.headers.set(`Access-Control-Max-Age`, `7777`)

    await next()
}