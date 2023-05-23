import { Context } from "https://deno.land/x/oak/mod.ts";

export default interface ICaminho{
    caminho: string,
    metodo: `GET` | `POST`,
    ctrl: (arg0: Context) => void,
}