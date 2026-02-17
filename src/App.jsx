import { useState } from 'react'
import TicTacToe from './components/TicTacToe'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <TicTacToe />
    </div>
  )
}

export default App
