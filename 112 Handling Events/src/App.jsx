import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    alert("Hey I am clicked ")
  }

  const handleMouseOver = () => {
    alert("Hey I am mouse over")
  }

  const [name, setName] = useState("Sonam")

  const handleChange = (e) => {
    // setName(e.target.value)
    setForm({ ...form, [e.target.name]: e.target.value })
    console.log(form)
  }

  const [form, setForm] = useState({ email: "", phone: "" })

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>

      <div className="red" onMouseOver={handleMouseOver}>I am a div</div>

      <input type="text" name="email" value={form.email} onChange={handleChange} />
      <input type="text" name="phone" value={form.phone} onChange={handleChange} />
      
    </>
  )
}

export default App