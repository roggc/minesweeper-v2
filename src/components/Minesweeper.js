import styled from 'styled-components'
import Cell from './Cell'
import { useEffect, useRef, useState } from 'react'

const Minesweeper = ({ dim }) => {
  const arrayRefs = new Array(dim)

  for (let i = 0; i < dim; i++) {
    arrayRefs[i] = new Array(dim)
  }

  const _minesAround = new Array(dim)
  for (let i = 0; i < dim; i++) {
    _minesAround[i] = new Array(dim)
  }

  const [minesAround, setMinesAround] = useState(_minesAround)

  const computeMinesAround = () => {
    for (let i = 0; i < dim; i++) {
      for (let j = 0; j < dim; j++) {
        let numOfMines = 0
        infoRef.current[i - 1] &&
          infoRef.current[i - 1][j - 1] &&
          infoRef.current[i - 1][j - 1].isMined &&
          numOfMines++
        infoRef.current[i - 1] &&
          infoRef.current[i - 1][j] &&
          infoRef.current[i - 1][j].isMined &&
          numOfMines++
        infoRef.current[i - 1] &&
          infoRef.current[i - 1][j + 1] &&
          infoRef.current[i - 1][j + 1].isMined &&
          numOfMines++
        infoRef.current[i] &&
          infoRef.current[i][j - 1] &&
          infoRef.current[i][j - 1].isMined &&
          numOfMines++
        infoRef.current[i] &&
          infoRef.current[i][j + 1] &&
          infoRef.current[i][j + 1].isMined &&
          numOfMines++
        infoRef.current[i + 1] &&
          infoRef.current[i + 1][j - 1] &&
          infoRef.current[i + 1][j - 1].isMined &&
          numOfMines++
        infoRef.current[i + 1] &&
          infoRef.current[i + 1][j] &&
          infoRef.current[i + 1][j].isMined &&
          numOfMines++
        infoRef.current[i + 1] &&
          infoRef.current[i + 1][j + 1] &&
          infoRef.current[i + 1][j + 1].isMined &&
          numOfMines++
        const newMinesAround = [...minesAround]
        newMinesAround[i][j] = numOfMines
        setMinesAround(newMinesAround)
      }
    }
  }

  useEffect(() => {
    computeMinesAround()
  }, [])

  const infoRef = useRef(arrayRefs)

  const _cellRefs = new Array(dim)
  for (let i = 0; i < dim; i++) {
    _cellRefs[i] = new Array(dim)
  }

  const cellRefs = useRef(_cellRefs)

  // we prepare the board
  const board = new Array(dim)

  for (let i = 0; i < dim; i++) {
    board[i] = new Array(dim)
  }

  for (let i = 0; i < dim; i++) {
    for (let j = 0; j < dim; j++) {
      board[i][j] = (
        <Cell
          key={`${i}_${j}`}
          numOfMines={minesAround[i][j]}
          ref={(item) => (cellRefs.current[i][j] = item)}
          cellRefs={cellRefs}
          i={i}
          j={j}
          infoRef={infoRef}
        />
      )
    }
  }

  return (
    <Div>
      {board.map((row, i) => (
        <Row key={i}>{row}</Row>
      ))}
    </Div>
  )
}

export default Minesweeper

const Div = styled.div`
  font-family: sans-serif;
`

const Row = styled.div`
  display: flex;
`
