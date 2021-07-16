import React, { useContext, useEffect, useReducer } from 'react'
import Board from '../Board/board'
import reducer from './components/reducer';
import calculateWinner from './components/calculateWinner';
import { Col, Row } from 'reactstrap';
import projectContext from '../../contex/context';

const Game = () => {

  const { show, changeShow, winnerSelect,
    // xIsNext,
    // history,
    // jumpTo,
    // handle
  } = useContext(projectContext)

  const [state, dispatch] = useReducer(
    reducer, {
    xIsNext: true,
    history: [{ squares: Array(9).fill(null) }]
  })

  const { xIsNext, history } = state;

  const jumpTo = step => {
    dispatch({ type: 'JUMP', payload: { step } })
  }

  const handleClick = (e) => {
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const winner = calculateWinner(squares);

    if (winner || squares[e]) return;

    squares[e] = xIsNext ? 'X' : 'O';
    dispatch({ type: 'MOVE', payload: { squares } })
  }

  const current = history[history.length - 1];
  const winner = calculateWinner(current.squares);

  const status = winner
    ? winner === 'D'
      ? 'Draw'
      : `Winner is ${winner}`
    : 'Next Player is ' + (xIsNext ? 'X' : 'O');


  useEffect(() => {
    if (status === 'Winner is X' || status === 'Winner is O') {
      changeShow("winner")
      winnerSelect(status)
    }
    if (status === 'Draw') {
      changeShow("Draw")
      winnerSelect(status)
    }

    //eslint-disable-next-line
  }, [status])

  const moves = (
    history.map((step, move) => {
      const desc = move ? `Go to #${move}` : 'Start the Game'
      return (
        <li key={move} className="mt-1">
          <button onClick={() => jumpTo(move)}>
            {desc}
          </button>
        </li>
      )
    })
  )

  return (
    <div className="game">
      <Row>
        <Col md="8" className="m-0 p-0">
          <div className="game-board align-items-center justify-content-center d-flex">
            <Board action={(e) => handleClick(e)} squares={current.squares}>
            </Board>
          </div>
        </Col>
        <Col md="4">
          <div className="game-info mt-2">
            <ul>
              {moves}
            </ul>
          </div>
        </Col>
      </Row>
      {show ? <h1>s</h1> : null}
    </div>
  )
}

export default Game
