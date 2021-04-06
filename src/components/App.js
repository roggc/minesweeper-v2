import { useEffect, useRef, useState } from 'react'
import Minesweeper from './Minesweeper'

const App = () => {
  const initialDim = 2

  const [dim, setDim] = useState(initialDim)
  const [Dim, SetDim] = useState(initialDim)

  const [foo, setFoo] = useState(0)

  const [minesweeper, setMinesweeper] = useState(
    <Minesweeper key={Math.random()} dim={Dim} />
  )

  const reset = () => {
    setMinesweeper(<Minesweeper key={Math.random()} dim={Dim} />)
  }

  const inputRef = useRef(null)

  const setDimension = () => {
    SetDim(inputRef.current.value)
    setFoo((foo) => foo + 1)
  }

  useEffect(() => {
    reset()
  }, [foo])

  return (
    <div>
      {minesweeper}
      <button onClick={reset}>reset</button>
      <input
        type="text"
        value={dim}
        ref={inputRef}
        onChange={(event) => {
          setDim(event.target.value)
        }}
      />
      <button onClick={setDimension}>set dim</button>
    </div>
  )
}

export default App
