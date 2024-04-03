import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./routes/error-page";
import Cart from "./routes/Cart";
import App from "./routes/App";
// import Header from "./routes/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SingleProduct from "./routes/SingleProduct";

const queryClient = new QueryClient();

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
    element: <SingleProduct />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <Header /> */}
      <div className="container mx-auto sm:max-w-xl lg:max-w-2xl">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  </React.StrictMode>
);