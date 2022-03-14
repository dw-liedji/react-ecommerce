import './App.css'
import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Logo from './Logo'
import Footer from './Footer'
import {useState} from 'react'
function App() {
  const [cart, setCart] = useState([])

  return (
    <div className="App">
      <Banner>
        <Logo />
      </Banner>
      <div className="lmj-main">
        <Cart cart={cart} setCart={setCart} />
        <ShoppingList cart={cart} setCart={setCart} />
      </div>
      <Footer />
    </div>
  )
}

export default App
