import "./index.css";
import "./storybook.css";
import React from "react";
import App from "app";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { createRoot } from "react-dom/client";
import * as serviceWorker from "./serviceWorker";

async function bootstrap() {
    const client = new ApolloClient({
        uri: "https://api.github.com/graphql",
        headers: {
            Authorization: "Bearer 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",
        },
        cache: new InMemoryCache(),
    });

    // get the initial language from the store
    // const i18n = await createI18n(client);

    const AppBundle = (
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    );

    const container = document.getElementById("root");
    const root = createRoot(container!);
    root.render(AppBundle);

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();
}

bootstrap();
