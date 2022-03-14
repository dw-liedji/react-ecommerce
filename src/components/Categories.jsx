const Categories = ({categories, activeCategory, setActiveCategory}) => {
  return (
    <div>
      <select
        value={activeCategory}
        onChange={(e) => setActiveCategory(e.target.value)}
      >
        <option value="">all categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button onClick={() => setActiveCategory('')}>Reset</button>
    </div>
  )
}

export default Categories
