import plantList from '../data/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'
const ShoppingList = () => {
  const categories = plantList.reduce((categories, currentPlant) => {
    return categories.includes(currentPlant.category)
      ? categories
      : categories.concat(currentPlant.category)
  }, [])
  console.log(plantList[0].monstera)
  return (
    <div>
      <div>
        <div className="lmj-categories">
          {categories.map((category, index) => (
            <span className="lmj-category" key={`${category}`}>
              {category}
            </span>
          ))}
        </div>
      </div>
      <div>
        <ul className="lmj-plant-list">
          {plantList.map((plant, index) => (
            <PlantItem
              key={index}
              cover={plant.cover}
              name={plant.name}
              light={plant.light}
              water={plant.water}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ShoppingList
