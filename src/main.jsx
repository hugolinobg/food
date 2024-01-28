import React from "react"
import ReactDOM from "react-dom/client"
import Routes from "../src/routes/Routes.jsx"
import { CartProvider } from "./contexts/CartContext.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <Routes />
    </CartProvider>
  </React.StrictMode>
)
