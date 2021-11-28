import React from "react";

let HomePage = {
    name: 'HomePage',
    path: '/',
    component: React.lazy(() => import('components/layout/MainHomepage.js')),
    children: [
        {
            path: '/home',
            name: 'beranda',
            component: React.lazy(() => import('views/Home/HomeScreen.js')),
            meta: {
                auth: false,
                name: 'Beranda'
            }
        },
        {
            path: '/product',
            name: 'product',
            component: React.lazy(() => import('views/Product/ProductScreen.js')),
            meta: {
                auth: true,
                name: 'Atur Produk'
            }
        },
        {
            path: '/transaction',
            name: 'transaction',
            component: React.lazy(() => import('views/Transaction/TransactionScreen.js')),
            meta: {
                auth: true,
                name: 'Transaksi'
            }
        }
    ]
}

export default HomePage;