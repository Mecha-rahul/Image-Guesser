import { useState } from 'react'
import Header from './components/Header'
import GameLayout from './components/GameLayout'
import LocationShowcase from './components/LocationShowcase';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [roundTrigger, setRoundTrigger] = useState(0)

  const handleNewGame = () => {
    setRoundTrigger((prev) => prev + 1)
  }

  return (
    <div className="flex flex-col h-screen">
      <Header onNewGame={handleNewGame} />
      <GameLayout roundTrigger={roundTrigger} />
    </div>
  )
}

export default App