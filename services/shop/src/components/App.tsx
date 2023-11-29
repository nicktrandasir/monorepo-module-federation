import React, {FC} from 'react';
import classes from './App.module.scss'
import {Link, Outlet} from "react-router-dom";

export const App: FC = () => {
    return (
        <div className={classes.container}>
            Shop page!

            <Link to={'/shop/about'}>
                Go to about Shop page!
            </Link>
            <Outlet/>
        </div>
    );
};
