import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Dock } from "react-dock"
import ProductCart from "../productCart/productCart.jsx"
import "./Cart.css"
import { CartContext } from "../../contexts/CartContext.jsx"

function Cart() {
  const [show, setShow] = useState(false)
  const navigate = useNavigate()
  const { cartItems, cartTotal } = useContext(CartContext)

  useEffect(() => {
    window.addEventListener("openSidebar", () => {
      setShow(true)
    })
  }, [])

  function checkout() {
    navigate("/checkout")
  }

  return (
    <Dock
      position="right"
      isVisible={show}
      fluid={false}
      size={335}
      zIndex={9999}
      onVisibleChange={(visible) => {
        setShow(visible)
      }}
    >
      <div className="text-center">
        <h1>Meu Pedidio</h1>
      </div>

      <div className="list-product">
        {cartItems.map((item) => {
          return (
            <ProductCart
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              qtd={item.qtd}
            />
          )
        })}
      </div>

      <div className="footerCart">
        <div className="footerCartTotal">
          <span>Total</span>
          <strong>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(cartTotal)}
          </strong>
        </div>

        <div>
          <button className="btn btn-checkout" onClick={checkout}>
            Finalizar Pedido
          </button>
        </div>
      </div>
    </Dock>
  )
}

export default Cart
