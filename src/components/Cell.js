import styled from 'styled-components'
import { useEffect, useState, forwardRef } from 'react'

const Cell = forwardRef(
  ({ getInfo, numOfMines, cellRefs, i, j, infoRef }, ref) => {
    const [isCovered, setIsCovered] = useState(true)
    const [isMined,] = useState(Math.random() > 0.8)

    useEffect(() => {
      getInfo({ isMined, isCovered })
    }, [isCovered])

    useEffect(() => {
      if (
        numOfMines === 0 &&
        isMined === false &&
        infoRef.current[i - 1] &&
        infoRef.current[i - 1][j - 1] &&
        infoRef.current[i - 1][j - 1].isCovered &&
        infoRef.current[i][j].isCovered === false
      ) {
        cellRefs.current[i - 1][j - 1].click()
      }
    }, [
      isCovered,
      numOfMines,
      isMined,
      infoRef.current[i - 1] &&
        infoRef.current[i - 1][j - 1] &&
        infoRef.current[i - 1][j - 1].isCovered,
      infoRef.current[i][j] && infoRef.current[i][j].isCovered,
    ])

    useEffect(() => {
      if (
        numOfMines === 0 &&
        isMined === false &&
        infoRef.current[i - 1] &&
        infoRef.current[i - 1][j] &&
        infoRef.current[i - 1][j].isCovered &&
        infoRef.current[i][j].isCovered === false
      ) {
        cellRefs.current[i - 1][j].click()
      }
    }, [
      isCovered,
      numOfMines,
      isMined,
      infoRef.current[i - 1] &&
        infoRef.current[i - 1][j] &&
        infoRef.current[i - 1][j].isCovered,
      infoRef.current[i][j] && infoRef.current[i][j].isCovered,
    ])

    useEffect(() => {
      if (
        numOfMines === 0 &&
        isMined === false &&
        infoRef.current[i - 1] &&
        infoRef.current[i - 1][j + 1] &&
        infoRef.current[i - 1][j + 1].isCovered &&
        infoRef.current[i][j].isCovered === false
      ) {
        cellRefs.current[i - 1][j + 1].click()
      }
    }, [
      isCovered,
      numOfMines,
      isMined,
      infoRef.current[i - 1] &&
        infoRef.current[i - 1][j + 1] &&
        infoRef.current[i - 1][j + 1].isCovered,
      infoRef.current[i][j] && infoRef.current[i][j].isCovered,
    ])

    useEffect(() => {
      if (
        numOfMines === 0 &&
        isMined === false &&
        infoRef.current[i] &&
        infoRef.current[i][j - 1] &&
        infoRef.current[i][j - 1].isCovered &&
        infoRef.current[i][j].isCovered === false
      ) {
        cellRefs.current[i][j - 1].click()
      }
    }, [
      isCovered,
      numOfMines,
      isMined,
      infoRef.current[i] &&
        infoRef.current[i][j - 1] &&
        infoRef.current[i][j - 1].isCovered,
      infoRef.current[i][j] && infoRef.current[i][j].isCovered,
    ])

    useEffect(() => {
      if (
        numOfMines === 0 &&
        isMined === false &&
        infoRef.current[i] &&
        infoRef.current[i][j + 1] &&
        infoRef.current[i][j + 1].isCovered &&
        infoRef.current[i][j].isCovered === false
      ) {
        cellRefs.current[i][j + 1].click()
      }
    }, [
      isCovered,
      numOfMines,
      isMined,
      infoRef.current[i] &&
        infoRef.current[i][j + 1] &&
        infoRef.current[i][j + 1].isCovered,
      infoRef.current[i][j] && infoRef.current[i][j].isCovered,
    ])

    useEffect(() => {
      if (
        numOfMines === 0 &&
        isMined === false &&
        infoRef.current[i + 1] &&
        infoRef.current[i + 1][j - 1] &&
        infoRef.current[i + 1][j - 1].isCovered &&
        infoRef.current[i][j].isCovered === false
      ) {
        cellRefs.current[i + 1][j - 1].click()
      }
    }, [
      isCovered,
      numOfMines,
      isMined,
      infoRef.current[i + 1] &&
        infoRef.current[i + 1][j - 1] &&
        infoRef.current[i + 1][j - 1].isCovered,
      infoRef.current[i][j] && infoRef.current[i][j].isCovered,
    ])

    useEffect(() => {
      if (
        numOfMines === 0 &&
        isMined === false &&
        infoRef.current[i + 1] &&
        infoRef.current[i + 1][j] &&
        infoRef.current[i + 1][j].isCovered &&
        infoRef.current[i][j].isCovered === false
      ) {
        cellRefs.current[i + 1][j].click()
      }
    }, [
      isCovered,
      numOfMines,
      isMined,
      infoRef.current[i + 1] &&
        infoRef.current[i + 1][j] &&
        infoRef.current[i + 1][j].isCovered,
      infoRef.current[i][j] && infoRef.current[i][j].isCovered,
    ])

    useEffect(() => {
      if (
        numOfMines === 0 &&
        isMined === false &&
        infoRef.current[i + 1] &&
        infoRef.current[i + 1][j + 1] &&
        infoRef.current[i + 1][j + 1].isCovered &&
        infoRef.current[i][j].isCovered === false
      ) {
        cellRefs.current[i + 1][j + 1].click()
      }
    }, [
      isCovered,
      numOfMines,
      isMined,
      infoRef.current[i + 1] &&
        infoRef.current[i + 1][j + 1] &&
        infoRef.current[i + 1][j + 1].isCovered,
      infoRef.current[i][j] && infoRef.current[i][j].isCovered,
    ])

    const uncover = () => {
      if (isCovered) {
        setIsCovered(false)
      }
    }

    return (
      <Div isCovered={isCovered} onClick={uncover} ref={ref}>
        {isCovered ? '' : isMined ? '😄' : numOfMines === 0 ? '' : numOfMines}
      </Div>
    )
  }
)

export default Cell

const Div = styled.div`
  border-radius: 5px;
  width: 18px;
  height: 18px;
  margin: 2px;
  cursor: pointer;
  ${({ isCovered }) => `
${isCovered ? 'background-color:grey;' : ''}
`}
`
