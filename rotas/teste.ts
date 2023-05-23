import type { Context } from "https://deno.land/x/oak/mod.ts";
import type ICaminho from "../interfaces/caminho.ts"; ""


let get = function(ctx: Context){
    ctx.response.body = "Teste" 
}


let rotas: Array<ICaminho> = [
    { 
        caminho: `/teste`,
        metodo: `GET`,
        ctrl: get
     }
]

export default rotas