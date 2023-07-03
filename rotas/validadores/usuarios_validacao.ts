import type { Context } from "https://deno.land/x/oak/mod.ts";
import type { usuario_pessoal } from "../../interfaces/usuarios.ts";

export default async function(ctx: Context, next){


    const body: usuario_pessoal = await ctx.request.body().value

    console.log(body)

    if (body.idade > 127) {
        return ctx.throw(400, `Idade não permitida`)
    }

    
    await next()
}