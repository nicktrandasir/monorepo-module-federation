import React, {FC} from 'react';
import classes from './App.module.scss'
import {Link, Outlet} from "react-router-dom";

export const App: FC = () => {
    return (
        <div className={classes.container}>
            Admin page!
            <Link to={'/admin/about'}>
                Go to about Admin page!
            </Link>
            <Outlet/>
        </div>
    );
};
