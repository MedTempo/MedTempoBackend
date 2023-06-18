import cassandra, { Client } from "npm:cassandra-driver"
import credential from "./credentials.ts"

let client: Client;

try{
    client = new cassandra.Client({

        contactPoints: ["172.18.0.3:9042",],
        localDataCenter: "datacenter1",
        keyspace: "medtempo",
    
        /*
        credentials: {
            username: "habdig7@gmail.com",
            password: "SaNtInHo1!1",
        },
        */
    });
}
catch(err){

    console.log(`:(`)

    throw err;
}

await client.connect()

let iniciardb = await Deno.readTextFile(`./config/db/SetTables.cql`);

let parsed = iniciardb.match(/[^\;]+\;?|\;/g);

console.log(parsed)

if(parsed != undefined){
    for (let i = 0; i < parsed.length; i++) {
        await client.execute(await parsed[i]).then(res => console.log(res.rows))
    }
    console.log(`\n\n\ntodas as querys finalizadas \n\n\n`)
}


export default client

/*docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' cassandra*/


/*

docker run --rm -d --name cassandra --hostname cassandra --network cassandra cassandra                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            docker run --rm --network cassandra -e CQLSH_HOST=cassandra -e CQLSH_PORT=9042 -e CQLVERSION=3.4.5 nuvo/docker-cqlsh

docker run --rm --network cassandra -e CQLSH_HOST=cassandra -e CQLSH_PORT=9042 -e CQLVERSION=3.4.5 nuvo/docker-cqlsh

docker run --rm --network cassandra -e CQLSH_HOST=cassandra -e CQLSH_PORT=9042 -e CQLVERSION=3.4.6 nuvo/docker-cqlsh

*/