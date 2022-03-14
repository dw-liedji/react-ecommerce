import CareScale from './CareScale'
import '../styles/PlantItem.css'
const PlantItem = ({name, id, cover, light, water, cart, setCart, price}) => {
  const handleAddToCart = (cart, setCart, plant) => {
    if (cart.some((item) => item.name === plant.name)) {
      setCart(
        cart.map((item) =>
          item.name === plant.name ? {...item, amount: item.amount + 1} : item
        )
      )
    } else {
      setCart([...cart, plant])
    }
  }

  return (
    <div className="lmj-plant-item">
      <img
        className="lmj-plant-item-cover"
        src={cover}
        alt="plant item cover"
      />
      {name}
      {console.log(cover)}
      <CareScale
        // key={`${plant.name} * ${index}`}
        careType="water"
        scaleValue={water}
      />
      <CareScale
        // key={`${name} *- ${index}`}
        careType="light"
        scaleValue={light}
      />
      <button
        onClick={() =>
          handleAddToCart(cart, setCart, {name: name, price: price, amount: 1})
        }
      >
        Ajouter
      </button>
    </div>
  )
}

export default PlantItem
