import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Cart from "./Cart/Cart";
import Store from "./Store/Store";
import Stores from "./Stores/Stores";

const Router = () => {
  	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/store" element={<Stores />} />
				<Route path="/store/:storeId" element={<Store />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
