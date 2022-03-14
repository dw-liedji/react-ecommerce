import '../styles/Cart.css'
import {useState} from 'react'

function Cart({cart, setCart}) {
  const [isOpen, setIsOpen] = useState(false)
  const total = cart.reduce(
    (currentTotal, currentPlant) =>
      currentTotal + currentPlant.price * currentPlant.amount,
    0
  )
  // const monsteraPrice = 8
  // const ivyPrice = 10
  // const flowerPrice = 15
  if (!isOpen)
    return <button onClick={() => setIsOpen(true)}>Open the Cart</button>
  return (
    <div className="lmj-cart">
      <button onClick={() => setIsOpen(false)}>Close the Cart</button>
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
