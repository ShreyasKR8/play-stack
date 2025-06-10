import ProductPage from "../pages/ProductPage";
import App from "../App";
import Layout from "../Components/Layout";
import ErrorPage from "../pages/ErrorPage";

const layoutElement = <Layout />; // Navbar is here

const routes = [
  {
    path: "/",
    element: layoutElement, // Navbar is here
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <App /> },
      { path: "product-page", element: <ProductPage /> },
    //   { path: "cart-page", element: <CartPage /> }, // Uncomment when CartPage is implemented
    ],
  },
];

export default routes;