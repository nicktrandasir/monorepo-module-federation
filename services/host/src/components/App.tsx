import React, {FC} from 'react';
import classes from './App.module.scss'
import {Link, Outlet} from "react-router-dom";

export const App: FC = () => {

    return (
        <div className={classes.container} data-testid={'uniqId'}>
            <Link to={'/'}> Main page!</Link>
            <Link to={'/admin'}> Admin page!</Link>
            <Link to={'/shop'}> Shop page!</Link>
            <Outlet/>
        </div>
    );
};
