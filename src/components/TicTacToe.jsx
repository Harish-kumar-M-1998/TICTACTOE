import { useState, useEffect } from 'react'

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(true)
  const [winner, setWinner] = useState(null)
  const [winningLine, setWinningLine] = useState([])
  const [gameHistory, setGameHistory] = useState([])

  // Check for winner
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line: lines[i] }
      }
    }

    // Check for draw
    if (squares.every(square => square !== null)) {
      return { winner: 'draw', line: [] }
    }

    return null
  }

  // Handle square click
  const handleClick = (index) => {
    if (board[index] || winner) {
      return
    }

    const newBoard = [...board]
    newBoard[index] = isXNext ? 'X' : 'O'
    
    setBoard(newBoard)
    setIsXNext(!isXNext)
    setGameHistory([...gameHistory, newBoard])
  }

  // Reset game
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setIsXNext(true)
    setWinner(null)
    setWinningLine([])
    setGameHistory([])
  }

  // Check for winner on board change
  useEffect(() => {
    const result = calculateWinner(board)
    if (result) {
      setWinner(result.winner)
      setWinningLine(result.line)
    }
  }, [board])

  // Get status message
  const getStatus = () => {
    if (winner === 'draw') {
      return "It's a Draw!"
    }
    if (winner) {
      return `Winner: ${winner}`
    }
    return `Next Player: ${isXNext ? 'X' : 'O'}`
  }

  // Render square
  const renderSquare = (index) => {
    const isWinning = winningLine.includes(index)
    const value = board[index]
    
    return (
      <button
        key={index}
        onClick={() => handleClick(index)}
        disabled={!!value || !!winner}
        className={`
          w-20 h-20 sm:w-24 sm:h-24
          text-3xl sm:text-4xl font-bold
          border-2 border-gray-300
          transition-all duration-200
          hover:bg-gray-100
          active:scale-95
          disabled:cursor-not-allowed
          disabled:hover:bg-transparent
          ${isWinning ? 'bg-green-200 border-green-500' : ''}
          ${value === 'X' ? 'text-blue-600' : value === 'O' ? 'text-red-600' : 'text-gray-400'}
          ${!value && !winner ? 'hover:border-gray-400' : ''}
        `}
      >
        {value}
      </button>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-md w-full">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-800">
        Tic Tac Toe
      </h1>
      
      <div className="mb-6">
        <div className="text-xl font-semibold text-center mb-2 text-gray-700">
          {getStatus()}
        </div>
        {winner && winner !== 'draw' && (
          <div className="text-center text-sm text-green-600 font-medium">
            🎉 Congratulations!
          </div>
        )}
        {winner === 'draw' && (
          <div className="text-center text-sm text-orange-600 font-medium">
            🤝 Good game!
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-2 mb-6 bg-gray-50 p-4 rounded-lg">
        {Array(9).fill(null).map((_, index) => renderSquare(index))}
      </div>

      <div className="flex justify-center">
        <button
          onClick={resetGame}
          className="
            px-6 py-3
            bg-indigo-600 text-white
            font-semibold rounded-lg
            hover:bg-indigo-700
            active:scale-95
            transition-all duration-200
            shadow-md hover:shadow-lg
          "
        >
          Reset Game
        </button>
      </div>
    </div>
  )
}

export default TicTacToe
