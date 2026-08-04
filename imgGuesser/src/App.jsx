import { useState } from 'react'
import Header from './components/Header'
import GameLayout from './components/GameLayout'
import LocationShowcase from './components/LocationShowcase';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LocationShowcase />
    </>
  )
}

export default App
