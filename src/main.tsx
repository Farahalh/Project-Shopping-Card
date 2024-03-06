import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './index.css'
import ErrorPage from './error-page'
import Cart from './routes/Cart'
import Product from './routes/Product'
import App from './App'
import Header from './routes/Header'

const router = createBrowserRouter([
{
  path: "/",
  element: <App />,
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
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);
