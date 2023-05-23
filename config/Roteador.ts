import { Router } from "https://deno.land/x/oak/mod.ts";


const Roteador = new Router();

let rotas: Array<any> = []
/*
for await (const caminho of Deno.readDir("./rotas")) {
    rotas.push(await import(`../rotas/${caminho.name}`))
    //Roteador.get("/", );
}*/


for await (const caminho of Deno.readDir("./rotas")) {
    rotas.push(await import(`../rotas/${caminho.name}`))
    //Roteador.get(`/${i}`, rotas[i].default );
}

for (let i = 0; i < rotas.length; i++) {

    for (let j = 0; j < rotas[i].default.length; j++) {
        console.log(rotas[i].default[j]);

        if(rotas[i].default[j].metodo === `GET`){
            Roteador.get(rotas[i].default[j].caminho, rotas[i].default[j].ctrl);
        }
        else if(rotas[i].default[j].metodo === `POST` ){
            Roteador.post(rotas[i].default[j].caminho, rotas[i].default[j].ctrl);
        }

    }

    //console.log(rotas[i].default[0])    
}


//console.log(rotas[i].default);


export default Roteador;
