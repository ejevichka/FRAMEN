import { InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import ApolloClient from "apollo-boost";
import initCache from "./Cache";

const cache: InMemoryCache = await initCache();

export const getApolloClient = async () => {
    const client: NormalizedCacheObject | unknown = new ApolloClient({
        uri: "https://api.github.com/graphql",
        headers: {
            Authorization: "Bearer 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",
        },
        cache: cache as any, // bug with ApolloCache<any> | undefined
    });

    return client;
};
