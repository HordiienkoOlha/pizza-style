import { ThemeProvider } from "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import theme from "./theme/theme";
import CartView from "./views/CartView";
import PizzaView from "./views/PizzaView";
import NotFoundView from "./views/NotFoundView";
import AppBarComponent from "./components/AppBarComponent/AppBarComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppBar />,
    children: [
      {
        index: true,
        element: <Pizza />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </ThemeProvider>
  );
};

function AppBar() {
  return <AppBarComponent />;
}

function Pizza() {
  return <PizzaView />;
}

function Cart() {
  return <CartView />;
}

function NotFound() {
  return <NotFoundView />;
}

export default App;
