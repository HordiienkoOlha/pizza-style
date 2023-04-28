
import {Routes, Route } from "react-router-dom";

import CartView from "./views/CartView";
import PizzaView from "./views/PizzaView";
import NotFoundView from "./views/NotFoundView";
import AppBarComponent from "./components/AppBarComponent/AppBarComponent";

function App() {
  return (
    <>
      <AppBarComponent />
      <Routes>
        <Route path="/" element={<PizzaView />} />
        <Route path="cart" element={<CartView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </>
  );
}

export default App;
