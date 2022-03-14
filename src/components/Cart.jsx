import '../styles/Cart.css'
import {useState, useEffect, useRef} from 'react'

function Cart({cart, setCart}) {
  const [isOpen, setIsOpen] = useState(false)
  const total = cart.reduce(
    (currentTotal, currentPlant) =>
      currentTotal + currentPlant.price * currentPlant.amount,
    0
  )

  useEffect(() => {
    alert('Welcome back liedji')
  }, [])

  const firstUpdate = useRef(true)
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
    } else {
      // do things after first render
      alert(`I'll have ${total} 💸`)
    }
  }, [total])
  if (!isOpen)
    return <button onClick={() => setIsOpen(true)}>Open the Cart</button>
  return (
    <div className="lmj-cart">
      <button className="lmj-cart-closed" onClick={() => setIsOpen(false)}>
        Close the Cart
      </button>
      <h2>Panier</h2>
      <ul>
        {cart.map((plant, index) => (
          <li
            key={index}
          >{`${plant.name} ${plant.price} € * ${plant.amount}`}</li>
        ))}
      </ul>
      {/* Total : {monsteraPrice + ivyPrice + flowerPrice}€ */}
      Total : {total}€
      <div>
        <button onClick={() => setCart([])}>vider le panier</button>
      </div>
    </div>
  )
}

export default Cart
