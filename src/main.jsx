import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/Routes.jsx";
import { CartProvider } from './context/CartContext.jsx';

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
//   <StrictMode>
    <CartProvider>
        <RouterProvider router={router} />
    </CartProvider>
//   </StrictMode>
);
