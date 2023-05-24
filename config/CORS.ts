import { Context } from "https://deno.land/x/oak/mod.ts";

export default async function Cors(ctx: Context, next: any){
    await next();
    ctx.response.headers.set("Access-Control-Allow-Origin", "*");
}