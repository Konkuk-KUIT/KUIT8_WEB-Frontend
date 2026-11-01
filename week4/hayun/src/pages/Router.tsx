import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./Cart/Cart";
import Store from "./Store/Store";
import Stores from "./Stores/Stores";
import stores from "../models/stores";

const router = createBrowserRouter([
	{ path: "/store", element: <Stores /> },
	{ path: "/store/:storeId", element: <Store stores={stores} /> },
	{ path: "/cart", element: <Cart /> },
]);

const Router = () => {
  	return <RouterProvider router={router} />;
};

export default Router;
