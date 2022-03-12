import React from 'react'
const Enfant = ({ color, setColor }) => {
  return (
    <div>
      <button
        onClick={() => {
          setColor('green color')
        }}>
        green color
      </button>
      <button
        onClick={() => {
          setColor('red color')
        }}>
        red color
      </button>
      <button
        onClick={() => {
          setColor('yellow color')
        }}>
        yellow color
      </button>
      <h2> The current color is: {color}</h2>
    </div>
  )
}

export default Enfant
