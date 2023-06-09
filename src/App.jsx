import { Routes, Route } from "react-router-dom";

import AppBarComponent from "@components/AppBarComponent/AppBarComponent";
import CartView from "@views/CartView";
import PizzaView from "@views/PizzaView";
import NotFoundView from "@views/NotFoundView";

function App() {
  return (
    <>
      <header>
        <AppBarComponent />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<PizzaView />} />
          <Route path="cart" element={<CartView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
