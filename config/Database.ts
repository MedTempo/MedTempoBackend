import GraphQlLib from "https://deno.land/x/medtempo_graphql_lib/definitions.ts"

export default new GraphQlLib({
    id: Deno.env.get(`DB_ID`) || ``,
    region: Deno.env.get(`DB_REGION`) || ``,
    keyspace: Deno.env.get(`DB_KEYSPACE`) || ``,
    token: Deno.env.get(
      `DB_APPLICATION_TOKEN`,
    ) || ``,
  })
