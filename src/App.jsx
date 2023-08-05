import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./routes/AppRoute";
import CartContextComponent from "./Context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextComponent>
        <AppRoute />
      </CartContextComponent>
    </BrowserRouter>
  );
}

export default App;
