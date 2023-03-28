import { useState } from "react"

function App() {
  const [inputValue, setInputValue] = useState({
    test1:"",
    test2:"",
    password:"",
    validEmail:"",
    validColor:"",
    validDate:"",
    validDateTime:"",
    validDateFile:"",
    validDateHidden:"",
    validDateImage:"",
    validMonth:"",
    validNumber:"",
    validRadio:"",
    validRange:"",
    validSearch:"",
    validTel:"",
    validTime:"",
    validUrl:"",
    validWeek:"",
    validCheckbox:"",

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
      <label for="test1" >Test1</label>
      <input
        id="test1" 
        onChange={(e) => handleChangeInput(e)}
        type="text1" 
        name="test1"
        value={inputValue.test1} 
        />
        <br />
      <label for="test2" >Test2
      <input
        className="mt-2" 
        onChange={(e) => handleChangeInput(e)}
        type="text2" 
        name="test2"
        value={inputValue.test2} 
        />
        </label>
        <br />
        <label htmlFor="password" >Password</label>
        <input
        className="mt-2"
        id="password" 
        onChange={(e) => handleChangeInput(e)}
        type="password" 
        name="password"
        value={inputValue.password} 
        />
        <br />
        <label htmlFor="emailInput" >Email</label>
        <input
        className="mt-2"
        id="emailInput" 
        onChange={(e) => handleChangeInput(e)}
        type="email" 
        name="validEmail"
        value={inputValue.validEmail} 
        />
        <br />
        <label htmlFor="colorInput" >Color</label>
        <input
        className="mt-2"
        id="colorInput" 
        onChange={(e) => handleChangeInput(e)}
        type="color" 
        name="validColor"
        value={inputValue.validColor} 
        />
        <br />
        <label htmlFor="dateInput" >Date</label>
        <input
        className="mt-2"
        id="dateInput" 
        onChange={(e) => handleChangeInput(e)}
        type="date" 
        name="validDate"
        value={inputValue.validDate} 
        />
        <br />
        <label htmlFor="datetime-localInput" >DateTime</label>
        <input
        className="mt-2"
        id="datetime-localInput" 
        onChange={(e) => handleChangeInput(e)}
        type="datetime-local" 
        name="validDateTime"
        value={inputValue.validDateTime} 
        />
        <br />
        <label htmlFor="fileInput" >File</label>
        <input
        className="mt-2"
        id="fileInput" 
        onChange={(e) => handleChangeInput(e)}
        type="file" 
        name="validDateFile"
        value={inputValue.validDateFile} 
        />
        <br />
        <label htmlFor="hiddenInput" >Hidden</label>
        <input
        className="mt-2"
        id="hiddenInput" 
        onChange={(e) => handleChangeInput(e)}
        type="hidden" 
        name="validDateHidden"
        value={inputValue.validDateHidden} 
        />
        <br />
        <label htmlFor="imageInput" >Image</label>
        <input
        className="mt-2"
        id="imageInput" 
        onChange={(e) => handleChangeInput(e)}
        type="image" 
        name="validDateImage"
        value={inputValue.validDateImage} 
        />
        <br />
        <label htmlFor="monthInput" >Month</label>
        <input
        className="mt-2"
        id="monthInput" 
        onChange={(e) => handleChangeInput(e)}
        type="month" 
        name="validMonth"
        value={inputValue.validMonth} 
        />
        <br />
        <label htmlFor="numberInput" >Number</label>
        <input
        className="mt-2"
        id="numberInput" 
        onChange={(e) => handleChangeInput(e)}
        type="number" 
        name="validNumber"
        value={inputValue.validNumber} 
        />
        <br />
        <label htmlFor="radioInput" >Radio</label>
        <input
        className="mt-2"
        id="radioInput" 
        onChange={(e) => handleChangeInput(e)}
        type="Radio" 
        name="validRadio"
        value={inputValue.validRadio} 
        />
        <br />
        <label htmlFor="rangeInput" >Rango</label>
        <input
        className="mt-2"
        id="rangeInput" 
        onChange={(e) => handleChangeInput(e)}
        type="Range" 
        name="validRange"
        value={inputValue.validRange} 
        />
        <br />
        <label htmlFor="resetInput" >Reset</label>
        <input
        className="mt-2"
        id="resetInput" 
        onChange={(e) => handleChangeInput(e)}
        type="Reset" 
        name="validReset"
        value={inputValue.validReset} 
        />
        <br />
        <label htmlFor="searchInput" >search</label>
        <input
        className="mt-2"
        id="searchInput" 
        onChange={(e) => handleChangeInput(e)}
        type="search" 
        name="validSearch"
        value={inputValue.validSearch} 
        />
        <br />
        <label htmlFor="telInput" >Tel</label>
        <input
        className="mt-2"
        id="telInput" 
        onChange={(e) => handleChangeInput(e)}
        type="tel" 
        name="validTel"
        value={inputValue.validTel} 
        />
        <br />
        <label htmlFor="timeInput" >time</label>
        <input
        className="mt-2"
        id="timeInput" 
        onChange={(e) => handleChangeInput(e)}
        type="time" 
        name="validTime"
        value={inputValue.validTime} 
        />
        <br />
        <label htmlFor="urlInput" >url</label>
        <input
        className="mt-2"
        id="urlInput" 
        onChange={(e) => handleChangeInput(e)}
        type="url" 
        name="validUrl"
        value={inputValue.validUrl} 
        />
        <br />
        <label htmlFor="weekInput" >week</label>
        <input
        className="mt-2"
        id="weekInput" 
        onChange={(e) => handleChangeInput(e)}
        type="week" 
        name="validWeek"
        value={inputValue.validWeek} 
        />
        <br />
        <label htmlFor="checkboxInput" >checkbox</label>
        <input
        className="mt-2"
        id="checkboxInput" 
        onChange={(e) => handleChangeInput(e)}
        type="checkbox" 
        name="validCheckbox"
        value={inputValue.validCheckbox} 
        />
    </div>
  )
}

export default App