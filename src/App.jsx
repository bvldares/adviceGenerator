import { useState, useEffect } from 'react'
import mobileDivider from "../src/assets/images/mobile-divider.svg"
import dice from "../src/assets/images/icon-dice.svg"
import './App.css'

function App() {
  
  const [advice, setAdvice] = useState(
    {
      advice:"Welcome on advice generato, press the dice for generates",
      id: ""
    })


  function fetchAdvice(){
      fetch("https://api.adviceslip.com/advice")
      .then(res=> res.json())
      .then(data => 
        setAdvice({
          advice: data.slip.advice,
          id: data.slip.id
        }))
  }


  return (
    <main>
        {advice.id && <p className='advice-id'>ADVICE #{advice.id}</p>}
        <p className="advice">{advice.advice}</p>
        <img src={mobileDivider} className="divider" alt="divider" />
        <button className="dice" onClick={fetchAdvice}><img src={dice}  alt="dice" /></button>
    </main>
  )
}

export default App
