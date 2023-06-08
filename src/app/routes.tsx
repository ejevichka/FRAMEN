import React from "react";
import { RouteObject } from "react-router-dom";
import { ErrorPage } from "pages/ErrorPage";
import Home from "pages/Home";
import DefaultPage from "pages/DefaultPage";

export const routesConfig: RouteObject[] = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/campaigns",
        element: <DefaultPage text="Campaigns" />,
    },
    {
        path: "/reports",
        element: <DefaultPage text="Reports" />,
    },
    {
        path: "/account",
        element: <DefaultPage text="Account" />,
    },
    {
        path: "/profile",
        element: <DefaultPage text="Profile" />,
    },
    {
        path: "/settings",
        element: <DefaultPage text="Settings" />,
    },
    {
        path: "/billing",
        element: <DefaultPage text="Billing" />,
    },
    {
        path: "/invoices",
        element: <DefaultPage text="Invoices" />,
    },
    {
        path: "/transactions",
        element: <DefaultPage text="Transactions" />,
    },
    {
        path: "/organizations",
        element: <DefaultPage text="Organizations" />,
    },
    {
        path: "*",
        element: <ErrorPage type="404" />,
    },
];
