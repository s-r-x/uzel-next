const fs = require("fs");
const fetch = require("node-fetch");
const path = require("path");
const {
  getIntrospectionQuery,
  printSchema,
  buildClientSchema,
} = require("graphql");
/**
 * runs an introspection query on an endpoint and retrieves its result
 * thanks to this gist:
 * https://gist.github.com/craigbeck/b90915d49fda19d5b2b17ead14dcd6da
 */
const ENDPOINT = "https://uzelkovoye-pismo.ru/graphql";
async function main() {
  const introspectionQuery = getIntrospectionQuery();
  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: introspectionQuery }),
  });
  const { data } = await response.json();
  const schema = buildClientSchema(data);
  const outputFile = path.join(__dirname, "./wpgraphql-schema.gql");
  fs.writeFileSync(outputFile, printSchema(schema));
}

main();
