const CareScale = ({careType, scaleValue}) => {
  const range = [1, 2, 3]

  const scaleType = careType === 'light' ? '☀️' : '💧'
  const handleClick = () => {
    alert(`Cette plante requiert peu/modérement/beaucoup de ${scaleType} `)
  }
  return (
    <div onClick={handleClick}>
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
