// import React from "react";

// const home = React.lazy(() => import('./Home'));
// const productList = React.lazy(() => import('./Product/List'));
// const productSingle = React.lazy(() => import('./Product/Single'));
// const productCreate = React.lazy(() => import('./Product/Create'));
// const productUpdate = React.lazy(() => import('./Product/Update'));

// const routes = [
//     {path: '/product/single/:productId', component: productSingle},
//     {path: '/product/create', component: productCreate},
//     {path: '/product/update/:productId', component: productUpdate},
//     {path: '/product', component: productList},
//     {path: '/', component: home},
// ];

// export default routes;

import React from 'react'
const Home = React.lazy(() => import('./Home'))
const ProductList = React.lazy(() => import('./Product/List'))
const ProductSingle = React.lazy(() =>
import('./Product/Single'))
const ProductCreate = React.lazy(() =>
import('./Product/Create'))
const ProductUpdate = React.lazy(() =>
import('./Product/Update'))


const routes = [
 { path: '/product/single/:productId', Component: ProductSingle },
 { path: '/product/create', Component: ProductCreate },
 { path: '/product/update/:productId', Component: ProductUpdate },
 { path: '/product', Component: ProductList },
 { path: '/', Component: Home }
]
export default routes;