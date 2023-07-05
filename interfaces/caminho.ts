import { Context } from "https://deno.land/x/oak/mod.ts";

export default interface ICaminho{
    caminho: string,
    metodo: `GET` | `POST` | `PATCH` | `DELETE`,
    ctrl: (arg0: Context, next?: any) => void,
}