import { GraphQLClient } from "graphql-request";

const uri = "https://uzelkovoye-pismo.ru/graphql";

export const gqlClient = new GraphQLClient(uri);
