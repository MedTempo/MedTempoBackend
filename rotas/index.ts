import type { Context } from "https://deno.land/x/oak/mod.ts";
import type ICaminho from "../interfaces/caminho.ts"; ""

import Database from "../config/Database.ts";

let get = async function(ctx: Context){

    Database.Show()

    let query = await Database.Execute(`query{
        mytable{    
            values{
                firstname
                lastname
                favorite_color
            }
        }
    }`)

    ctx.response.body = query
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