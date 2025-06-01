import ProductPage from "../pages/ProductPage";
import App from "../App";

const routes = [
    {
        path: "/",
        element: <App />,
        // errorElement: <ErrorPage />,
    },
    {
        path: "product-page",
        element: <ProductPage />,
    }
];

export default routes;