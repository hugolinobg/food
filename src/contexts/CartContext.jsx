import { createContext, useState } from "react"

const CartContext = createContext()

function CartProvider(PropsType) {
  const [cartItems, setCartItems] = useState([])
  const [cartTotal, setCartTotal] = useState(0)

  function AddItemCart(item) {
    let cartItemNew = []
    let findItem = false

    for (let product of cartItems) {
      if (product.id === item.id) {
        item.qtd = product.qtd + 1
        findItem = true
        cartItemNew.push(item)
      } else {
        cartItemNew.push(product)
      }
    }

    if (findItem === false || cartItems.length === 0) {
      cartItemNew.push(item)
    }

    setCartItems(cartItemNew)
    calcTotal(cartItemNew)
  }

  function RemoveItemCart(id) {
    let cartItemNew = []

    for (let product of cartItems) {
      if (product.id === id) {
        product.qtd = product.qtd - 1
      }
      cartItemNew.push(product)
    }

    cartItemNew = cartItemNew.filter((item) => {
      return item.qtd > 0
    })

    setCartItems(cartItemNew)
    calcTotal(cartItemNew)
  }

  function calcTotal(items) {
    let total = 0

    for (let item of items) {
      total = total + item.price * item.qtd
    }

    setCartTotal(total)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        AddItemCart,
        RemoveItemCart,
        cartTotal,
      }}
    >
      {PropsType.children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
