import type { Context } from "https://deno.land/x/oak/mod.ts";
import type ICaminho from "../interfaces/caminho.ts"; ""


let get = function(ctx: Context){
    ctx.response.body = "Hello World!" 
}


let rotas: Array<ICaminho> = [
    { 
        caminho: `/`,
        metodo: `GET`,
        ctrl: get
    },
    { 
        caminho: `/hello`,
        metodo: `GET`,
        ctrl: get
    }

]

export default rotas