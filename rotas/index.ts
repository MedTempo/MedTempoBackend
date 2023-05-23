import { Router } from "https://deno.land/x/oak/mod.ts";



const roteador = new Router()


roteador.get("/", function(ctx){
    ctx.response.body = "Hello World!" 
})



export default roteador;