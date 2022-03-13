import CareScale from './CareScale'
import '../styles/PlantItem.css'
const PlantItem = ({name, cover, light, water}) => {
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
    </div>
  )
}

export default PlantItem
