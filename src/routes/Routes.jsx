import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../page/home/Home.jsx"
import Checkout from "../page/checkout/Checkout.jsx"
import Historic from "../page/historic/Historic.jsx"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/historic" element={<Historic />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
