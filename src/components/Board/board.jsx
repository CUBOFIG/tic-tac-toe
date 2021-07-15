import React from 'react'
import Square from '../Square/square'

const Board = props => {

  return (
    <div className="board">
      <div>
        <Square value={props.squares[0]} action={() => props.action(0)} />
        <Square value={props.squares[1]} action={() => props.action(1)} />
        <Square value={props.squares[2]} action={() => props.action(2)} />
      </div>
      <div>
        <Square value={props.squares[3]} action={() => props.action(3)} />
        <Square value={props.squares[4]} action={() => props.action(4)} />
        <Square value={props.squares[5]} action={() => props.action(5)} />
      </div>
      <div>
        <Square value={props.squares[6]} action={() => props.action(6)} />
        <Square value={props.squares[7]} action={() => props.action(7)} />
        <Square value={props.squares[8]} action={() => props.action(8)} />
      </div>
    </div>
  )
}

export default Board
