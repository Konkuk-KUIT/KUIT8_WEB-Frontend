import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./Cart/Cart";
import Home from "./Home/Home";
import Store from "./Store/Store";
import Stores from "./Stores/Stores";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/store", element: <Stores /> },
  { path: "/store/:storeId", element: <Store /> },
  { path: "/cart", element: <Cart /> },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
