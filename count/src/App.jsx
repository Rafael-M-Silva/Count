import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Contador</h1>
      <p>{count}</p>
      <button onClick={()=> setCount(count + 1)}>+</button>
      <button onClick={()=> setCount(0)} disabled = {count === 0}>reset</button>
      <button onClick={()=> setCount(count - 1)} disabled = {count === 0}>-</button>
    </div>
  )
}

export default App
