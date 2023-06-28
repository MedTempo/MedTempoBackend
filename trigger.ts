/* deno run --allow-net --allow-ffi --unstable trigger.ts */


import { Application } from "https://deno.land/x/oak/mod.ts";

import Roteador from "./config/Roteador.ts";
import Cors from "./config/Cors.ts";

const app = new Application()

const porta = 7777


app.use(Cors)

app.use(Roteador.routes())
app.use(Roteador.allowedMethods())

app.addEventListener("listen", function({port, secure, hostname}){
    console.log(`O backend do MedTempo Está no Ar em ${secure?"http":"https"}://${hostname??"localhost"}:${port}`)
})

app.listen({
    port: porta
})