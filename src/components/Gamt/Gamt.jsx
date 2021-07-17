import React, { useContext, useEffect } from 'react'
import Board from '../Board/board'
import calculateWinner from '../Game/components/calculateWinner';
import { Col, Row } from 'reactstrap';
import projectContext from '../../contex/context';
import { Button } from 'reactstrap';

const Gamt = () => {

  const { changeShow, winnerSelect,
    xIsNext,
    history,
    // jumpTo,
    handle,
    whatIf
  } = useContext(projectContext)


  const handleClick = (e) => {
    handle(e)
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


  return (
    <div className="game">
      <Row>
        <Col md="12" className="m-0 p-0 d-f">
          <div className="game-board align-items-center justify-content-center d-flex">
            <Board action={(e) => handleClick(e)} squares={current.squares}>
            </Board>
          </div>

          <Row className="
            game-info 
            mt-4
            d-flex 
            flex-wrap 
            align-items-center 
            justify-content-center"
          >
            <Col md="6">
              <Button
                className="btn btn-block w-100 mt-2 btn-return"
                onClick={() => { whatIf() }}
              >
                RETURN
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Gamt
