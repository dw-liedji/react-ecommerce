import './App.css'
import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Logo from './Logo'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Banner>
        <Logo />
      </Banner>
      <Cart />
      <ShoppingList />
      <Footer />
    </div>
  )
}

export default App
