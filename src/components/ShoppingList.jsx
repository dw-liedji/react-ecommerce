import plantList from '../data/plantList'
import '../styles/ShoppingList.css'
import '../styles/Categories.css'
import Categories from './Categories'
import PlantItem from './PlantItem'
import {useState} from 'react'
const ShoppingList = ({cart, setCart}) => {
  const [activeCategory, setActiveCategory] = useState('')
  const categories = plantList.reduce((categories, currentPlant) => {
    return categories.includes(currentPlant.category)
      ? categories
      : categories.concat(currentPlant.category)
  }, [])
  console.log(!'' || 'bonjour liedji')
  return (
    <div>
      <Categories
        className="lmj-categories"
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <div>
        <ul className="lmj-plant-list">
          {plantList.map((plant, index) =>
            !activeCategory || activeCategory === plant.category ? (
              <PlantItem
                cart={cart}
                setCart={setCart}
                key={index}
                id={index}
                cover={plant.cover}
                name={plant.name}
                light={plant.light}
                water={plant.water}
                price={plant.price}
              />
            ) : null
          )}
        </ul>
      </div>
    </div>
  )
}

export default ShoppingList
