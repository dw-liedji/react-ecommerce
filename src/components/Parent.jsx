import React from "react"
import { useState } from "react"
import Enfant from "./Enfant"
const Parent = () => {
  const [color, setColor] = useState("white")
  return (
    <div>
      <h1>{color}</h1>
      <Enfant color={color} setColor={setColor} />
    </div>
  )
}

export default Parent
