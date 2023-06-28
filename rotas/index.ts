import type { Context } from "https://deno.land/x/oak/mod.ts";
import type ICaminho from "../interfaces/caminho.ts"; ""

import Database from "../config/Database.ts";

let get = async function(ctx: Context){

    Database.Show()

    let insert = await Database.Execute(await Deno.readTextFile(`config/db_opertaion/InsertUserPessoal.gql`), {
        "id": "5f661e71-d18c-4de8-9dfe-b532a17a7db",
        "data_criacao": "2020-10-21",
        "data_nascimento": "2020-10-21",
        "descricao": "Lorem Ipsum Dolor Sit Amed",
        "email": "habdig7@gmail.com",
        "senha": "d754cc6d5d58a72ff44a8123dc108794b5fe0ca4950e7a81c08239dc499e87d9937a837a7b9dc5cea3db0dc19283153c0b7b8117f72743f2b47eedaba4a8e3b7",
        "idade": 16,
        "nome": "Teste With variables",
        "sexo": false,
        "sobrenome": "Silveira Vieira"
    })

    let query = await Database.Execute(await Deno.readTextFile(`config/db_opertaion/SelectAllUserPessoal.gql`))

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