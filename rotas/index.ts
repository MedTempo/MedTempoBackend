import type { Context } from "https://deno.land/x/oak/mod.ts";
import type ICaminho from "../interfaces/caminho.ts";
import client from "../config/db/Database.ts"

let get = async function(ctx: Context){
    let req = await client.execute("UPDATE medtempo.users SET nome=? WHERE id='1';", ["'Mateus Felipe Vieira'"] , {prepare: true}).then(callback => { return callback.rows })
    let res = await client.execute("SELECT * FROM medtempo.users WHERE id = '1';", {prepare: true}).then(callback => { return callback.rows })
    ctx.response.body = Array.from(res)
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