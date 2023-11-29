import {App} from "@/components/App";
import {Suspense} from "react";
import {ShopPage} from "@/pages/shop";
import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

const routes = [
    {
        path: "/shop",
        element: <App/>,
        children: [
            {
                path: "/shop/about",
                element: <Suspense fallback={'Loading ...'}><ShopPage/></Suspense>,
            }
        ]
    },
];
export const router = createBrowserRouter(routes);

export default routes;