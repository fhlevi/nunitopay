import React from "react";
import Login from 'router/path/nestedpath/Login';
import HomePage from 'router/path/HomePage';

let BasePath = {
    name: 'BasePath',
    path: '/',
    component: React.lazy(() => import('components/layout/MainHome.js')),
    children: [
        Login,
        HomePage,
    ]
}

export default BasePath;