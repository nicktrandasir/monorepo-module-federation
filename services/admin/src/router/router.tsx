import {App} from "@/components/App";
import * as React from "react";
import {Suspense} from "react";
import {createBrowserRouter} from "react-router-dom";
import Admin from "@/pages/admin/admin";

const routes = [
    {
        path: "/admin",
        element: <App/>,
        children: [
            {
                path: "/admin/about",
                element: <Suspense><Admin/></Suspense>,
            }
        ]
    },
];
export const router = createBrowserRouter(routes);

export default routes;