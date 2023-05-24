import { Router } from "https://deno.land/x/oak/mod.ts";


const Roteador = new Router();

import index from "../rotas/index.ts"



let rotas: Array<any> = [
    index
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



for (let i = 0; i < rotas.length; i++) {

    for (let j = 0; j < rotas[i].length; j++) {
        console.log(rotas[i][j]);

        if(rotas[i][j].metodo === `GET`){
            Roteador.get(rotas[i][j].caminho, rotas[i][j].ctrl);
        }
        else if(rotas[i][j].metodo === `POST` ){
            Roteador.post(rotas[i][j].caminho, rotas[i][j].ctrl);
        }

    }

    //console.log(rotas[i].[0])    
}


//console.log(rotas[i].);


export default Roteador;
