import { useReducer } from "react"

import Header from "./components/Header"
import Guitar from "./components/Guitar"
import Footer from "./components/Footer"

import { useCart } from "./hooks/useCart"
import { cartReducer, initialState } from "./reducers/cart-reducer"

function App() {

    const { removeFromCart, increaseQuantity, decrementQuantity, clearCart } = useCart()

    const [state, dispatch] = useReducer(cartReducer, initialState)
   
  return (
    <>
    <Header
        cart={state.cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decrementQuantity={decrementQuantity}
        clearCart={clearCart}
    />
    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
            {state.data.map((guitar) => (
                <Guitar
                    key={guitar.id}
                    guitar={guitar}
                    dispatch={dispatch}
                />
             ))}           

        </div>
    </main>
  
    <Footer />
    </>
  )
}

export default App
