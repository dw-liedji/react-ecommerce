const CareScale = ({careType, scaleValue}) => {
  const range = [1, 2, 3]

  const scaleType = careType === 'light' ? '☀️' : '💧'

  return (
    <div>
      {range.map((rangeElement, index) =>
        rangeElement <= scaleValue ? (
          <span key={index}>{rangeElement.toString()}</span>
        ) : null
      )}
      <span>{scaleType}</span>
    </div>
  )
}

export default CareScale
