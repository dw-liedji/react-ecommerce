import {useState} from 'react'
const QuestionForm = () => {
  const [inputValue, setInputValue] = useState('Posez une question ici...')
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  return (
    <div>
      <div>
        {inputValue.includes('n') ? (
          <p color="#5a1f6d">Must not contains n</p>
        ) : (
          <p color="#5c8f2c">This is input:{inputValue}</p>
        )}
      </div>

      <textarea
        value={inputValue}
        onChange={handleChange}
        name=""
        id=""
        cols="20"
        rows="5"
      />
    </div>
  )
}

export default QuestionForm
