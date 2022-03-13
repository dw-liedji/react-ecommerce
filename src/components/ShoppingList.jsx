import plantList from '../data/plantList'
import '../styles/ShoppingList.css'

const ShoppingList = () => {
  const categories = plantList.reduce((categories, currentPlant) => {
    return categories.includes(currentPlant.category)
      ? categories
      : categories.concat(currentPlant.category)
  }, [])

  return (
    <div>
      <div>
        <div className="lmj-categories">
          {categories.map((category, index) => (
            <span className="lmj-category" key={`${category} - ${index}`}>
              {category}
            </span>
          ))}
        </div>
      </div>
      <div>
        <ul className="lmj-plant-list">
          {plantList.map((plant, index) => (
            <li className="lmj-plant-item" key={`${plant.name} - ${index}`}>
              {plant.name}
              {plant.isBestSale && <span>👍</span>}
              {plant.isSpecialOffer && <div className="lmj-sales">Soldes</div>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ShoppingList
