import { createBrowserRouter } from "react-router-dom";
import BaseLayout from '../layout/BaseLayout.jsx';
import Home from '../pages/Home/index.jsx';
import Store from '../pages/Store/index.jsx';
import SingleProduct from '../pages/SingleProduct/index.jsx';
import Cart from '../pages/Cart/index.jsx';
import Checkout from '../pages/Checkout/index.jsx';
import Error404 from "../pages/404/index.jsx";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <BaseLayout />,
        children: [
        { index: true, element: <Home /> },
        { path: 'store', element: <Store /> },
        { path: 'detail/:id', element: <SingleProduct /> },
        { path: 'cart', element: <Cart /> },
        { path: 'checkout', element: <Checkout /> },
        { path: '*', element: <Error404 /> }
        ]
    }
]);

export default routes;


