import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateLayout = ({component: Component, ...rest}) => {

    return (
        <Route {...rest} render={matchProps => {
            console.log(localStorage.getItem('check'));
            if (JSON.parse(localStorage.getItem('check')) === true) {
                return (
                    <Component {...matchProps} />
                );
            }
            else {
                return <Redirect to="./login" />
            }
        }} />
    )
};

export default PrivateLayout;