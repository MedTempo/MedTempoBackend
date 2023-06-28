import GraphQlLib from "https://deno.land/x/medtempo_graphql_lib@v0.0.31-alpha/definitions.ts";

let Database = new GraphQlLib({
  id: Deno.env.get(`DB_ID`) || ``,
  region: Deno.env.get(`DB_REGION`) || ``,
  keyspace: Deno.env.get(`DB_KEYSPACE`) || ``,
  token: Deno.env.get(
    `DB_APPLICATION_TOKEN`,
  ) || ``,
});



await Database.Schema(await Deno.readTextFile(`config/db_opertaion/CreateTableUserPessoal.gql`))


let teste = await Database.Schema(await Deno.readTextFile(`config/db_opertaion/SelectAllTables.gql`), {
  keyspace: `medtempo`
})


export default Database;
