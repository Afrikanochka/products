import { RouterProvider, createBrowserRouter } from "react-router-dom";

import CartPage from "./pages/CartPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductsPage from "./pages/ProductsPage";
import ProfilePage from "./pages/ProfilePage";

const AppRouter = () => {
    const router = createBrowserRouter(
        [
            {
              path: "/",
              errorElement: <ErrorPage />,
              children: [
                {
                  index: true,
                  element: <HomePage />,
                },
                {
                  path: "products",
                  children: [
                    {
                      index: true,
                      element: <ProductsPage />,
                    },
      
                    {
                      path: ":id",
                      element: <ProductPage />,
                    },
                  ],
                },
                {
                  path: "cart",
                  element: <CartPage />,
                },
                {
                  path: "profile",
                  element: <ProfilePage />,
                },
              ],
            },
          ],
          {
            basename: "/",
          }
    )
    return (
        <RouterProvider router={router} />
    );
}

export default AppRouter;