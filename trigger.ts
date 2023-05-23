import { Application } from "https://deno.land/x/oak/mod.ts";

import Roteador from "./rotas/index.ts";

const app = new Application()

const porta = 7777

app.use(Roteador.routes())
app.use(Roteador.allowedMethods())

app.addEventListener("listen", function({port, secure, hostname}){
    console.log(`O backend do MedTempo Está no Ar em ${secure?"http":"https"}://${hostname??"localhost"}:${port}`)
})

app.listen({
    port: porta
})