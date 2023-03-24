import { useState } from "react"

function App() {
  const [inputValue, setInputValue] = useState({
    test1:"",
    test2:""
  });

  const handleChangeInput = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value
    });
    console.log(inputValue);

  }

  return (
    <div style={{textAlign: "center"}}>
      <h1>Input Test</h1>
      <hr />
      <label for="test1" >test1</label>
      <input
        id="test1" 
        onChange={(e) => handleChangeInput(e)}
        type="text1" 
        name="test1"
        value={inputValue.test1} 
        />
      <label for="test2" >test2
      <input
        className="mt-2" 
        onChange={(e) => handleChangeInput(e)}
        type="text2" 
        name="test2"
        value={inputValue.test2} 
        />
        </label>
    </div>
  )
}

export default App