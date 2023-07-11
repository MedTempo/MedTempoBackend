import type { Context } from "https://deno.land/x/oak/mod.ts";
import type ICaminho from "../interfaces/caminho.ts";

import type { usuario_pessoal } from "../interfaces/usuarios.ts";

import Database from "../config/Database.ts";
import usuario_pessoal_validacao from "./validadores/usuarios_validacao.ts";


const get = async function (ctx: Context) {
  Database.Show();

  /*
  let insert = await Database.Execute(
    await Deno.readTextFile(`config/db_opertaion/InsertUserPessoal.gql`),
    {
      "id": "5f661e71-d18c-4de8-9dfe-b532a17a7db",
      "data_criacao": "2020-10-21",
      "data_nascimento": "2020-10-21",
      "descricao": "Lorem Ipsum Dolor Sit Amed",
      "email": "habdig7@gmail.com",
      "senha":
        "d754cc6d5d58a72ff44a8123dc108794b5fe0ca4950e7a81c08239dc499e87d9937a837a7b9dc5cea3db0dc19283153c0b7b8117f72743f2b47eedaba4a8e3b7",
      "idade": 16,
      "nome": "Teste With variables",
      "sexo": false,
      "sobrenome": "Silveira Vieira",
    },
  );
*/

  let query = await Database.Execute(
    await Deno.readTextFile(`config/db_opertaion/SelectAllUserPessoal.gql`),
  );

  ctx.response.body = query;
};

const post = async function (ctx: Context, next) {
  await usuario_pessoal_validacao(ctx, next);

  const body: usuario_pessoal = await ctx.request.body().value;

  let insert = await Database.Execute(await Deno.readTextFile(`config/db_opertaion/InsertUserPessoal.gql`),
    {
      id: crypto.randomUUID(),
      data_criacao: new Date().toISOString().slice(0, 10),
      data_nascimento: body.data_nascimento,
      descricao: body.descricao,
      email: body.email,
      senha: `hash senha`,
      idade: body.idade,
      nome: body.nome,
      sexo: body.sexo,
      sobrenome: body.sobrenome,
    },
  );

  ctx.response.body = true;
};


const patch = async function (ctx: Context, next) {

  const body = await ctx.request.body().value;

  console.log(body)

  if (typeof body.id == `string`) {
    await Database.Execute(
      await Deno.readTextFile(`config/db_opertaion/UpdateUserPessoal.gql`),
      {
        id: body.id,
        data_criacao: new Date().toISOString().slice(0, 10),
        data_nascimento: body.data_nascimento,
        descricao: body.descricao,
        email: body.email,
        senha: `hash senha`,
        idade: body.idade,
        nome: body.nome,
        sexo: body.sexo,
        sobrenome: body.sobrenome,
      },
    );
  
  }

  ctx.response.body = true
};


const delete_route = async function (ctx: Context, next) {

  const body = await ctx.request.body().value;

  console.log(body)

  if (typeof body.id == `string`) {
    await Database.Execute(
      `mutation DeleteUsuarioPessoal ($id: Uuid) {
      delete: deleteusuario_pessoal(value: { id: $id, }, ifExists: true ) {
        value {
          id,
          nome,
          sobrenome
        }
      }
    }`,
      {
        id: body.id
      },
    );
  
  }

  ctx.response.body = true
};

let rotas: Array<ICaminho> = [
  {
    caminho: `/`,
    metodo: `GET`,
    ctrl: get,
  },
  {
    caminho: `/`,
    metodo: `POST`,
    ctrl: post,
  },
  {
    caminho: `/usuarios`,
    metodo: `POST`,
    ctrl: post,
  },
  {
    caminho: `/usuarios`,
    metodo: `DELETE`,
    ctrl: delete_route,
  },
  {
    caminho: `/usuarios`,
    metodo: `PATCH`,
    ctrl: patch,
  },
  
];

export default rotas;
