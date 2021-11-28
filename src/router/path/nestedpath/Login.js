import React from "react";

let Login = {
    path: '/login',
    name: 'login',
    component: React.lazy(() => import('views/Login/LoginScreen.js')),
    meta: {
        auth: false,
        name: 'Login'
    }
};

export default Login