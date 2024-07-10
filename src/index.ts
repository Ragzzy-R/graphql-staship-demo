
import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
import { resolvers} from "./resolver";
import {StarshipAPI} from "./dataSources";
import {typeDefs} from "./schema";

interface ContextValue {
    dataSources: {
        starshipAPI: StarshipAPI;
    };
}
const server = new ApolloServer<ContextValue>({
    typeDefs,
    resolvers,
});


 startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req, res }) => {
        return {
            dataSources: {
                starshipAPI: new StarshipAPI(),
            },
        };
    },
}).then(({ url }) => {
    console.log(`🚀  Server ready at: ${url}`);
 }).catch((error) => {
    console.error(error);
 });
