import './App.css'
import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Logo from './Logo'

function App() {
  return (
    <div className="App">
      <Banner>
        <Logo />
      </Banner>
      <Cart />
      <ShoppingList />
    </div>
  )
}

export default App
