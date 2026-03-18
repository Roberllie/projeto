import { createContext, useState } from "react"

export const CartContext = createContext()

export function CartProvider({ children }) {

  const [cart, setCart] = useState([])

  function addToCart(product) {
    const existing = cart.find(item => item.id === product.id)

    if (existing) {
      const updatedCart = cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
      setCart(updatedCart)
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  function removeFromCart(id) {
    setCart(cart.filter(item => item.id !== id))
  }

  function getTotal() {
    return cart.reduce((total, item) =>
      total + item.price * item.quantity, 0
    )
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      getTotal
    }}>
      {children}
    </CartContext.Provider>
  )
}