import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import theme from "./theme/theme";
import CartView from "./views/CartView";
import PizzaView from "./views/PizzaView";
import NotFoundView from "./views/NotFoundView";
import AppBarComponent from "./components/AppBarComponent/AppBarComponent";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppBarComponent />
        <Routes>
          {/* <Route path="/" element={<AppBarComponent />} /> */}
          {/* <Route index element={<PizzaView />} /> */}
          
          <Route path="/" element={<PizzaView />} />
          <Route path="cart" element={<CartView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
        <Outlet />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
