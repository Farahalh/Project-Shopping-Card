import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './index.css'
import Root from './routes/Root'
import ErrorPage from './error-page'
import Cart from './routes/Cart'
import Product from './routes/Product'

const router = createBrowserRouter([
{
  path: "/",
  element: <Root />,
  errorElement: <ErrorPage />,
},
{
  path: "cart",
  element: <Cart />,
},
{
  path: "product/:productId",
  element: <Product />,
},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
