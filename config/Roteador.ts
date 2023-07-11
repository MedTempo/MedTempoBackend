import { Context, Router } from "https://deno.land/x/oak/mod.ts";


const Roteador = new Router();

import index from "../rotas/index.ts"
import teste from  "../rotas/teste.ts"


let rotas: Array<any> = [
    index,
    teste
]
/*
for await (const caminho of Deno.readDir("./rotas")) {
    rotas.push(await import(`../rotas/${caminho.name}`))
    //Roteador.get("/", );
}*/

/*
for await (const caminho of Deno.readDir("./rotas")) {
    rotas.push(await import(`../rotas/${caminho.name}`))
    //Roteador.get(`/${i}`, rotas[i].default );
}
*/

let not_found  = async function (ctx: Context) {
    ctx.response.status = 404

    ctx.response.body = `Not Found`
}

for (let i = 0; i < rotas.length; i++) {

    for (let j = 0; j < rotas[i].length; j++) {
        console.log(rotas[i][j]);

        if(rotas[i][j].metodo === `GET`){
            Roteador.get(rotas[i][j].caminho, rotas[i][j].ctrl);
           // Roteador.get(`/*`, not_found)
        }
        else if(rotas[i][j].metodo === `POST` ){
            Roteador.post(rotas[i][j].caminho, rotas[i][j].ctrl);
            //Roteador.post(`/*`, not_found)
        }
        else if(rotas[i][j].metodo === `DELETE` ){
            Roteador.delete(rotas[i][j].caminho, rotas[i][j].ctrl);
           // Roteador.delete(`/*`, not_found)
        }
        else if(rotas[i][j].metodo === `PATCH` ){
            Roteador.patch(rotas[i][j].caminho, rotas[i][j].ctrl);
           // Roteador.delete(`/*`, not_found)
        }

    }

    //console.log(rotas[i].[0])    
}




//console.log(rotas[i].);


export default Roteador;
