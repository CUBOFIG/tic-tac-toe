import React, { useReducer } from 'react';
import ProjectsContext from './context'
import ProjectsReducer from './reducer'
import {
  INIT_SHOW, WINNER_SELECT, INIT_DRAWN, JUMP, MOVE, JUMP_ARROW, JUMP_RESET
} from './types'
import calculateWinner from '../components/Game/components/calculateWinner';


const ProjectState = props => {

  const initialState = {
    show: false,
    winner: null,
    confetti: false,
    xIsNext: true,
    count: 0,
    history: [{ squares: Array(9).fill(null) }]
  }

  const [state, dispatch] = useReducer(ProjectsReducer, initialState)

  const { xIsNext, history, count } = state;

  const changeShow = state => {
    if (state === "Draw") {
      dispatch({
        type: INIT_DRAWN
      })
    } else {
      dispatch({
        type: INIT_SHOW
      })
    }
  }

  const winnerSelect = winner => {
    dispatch({
      type: WINNER_SELECT,
      payload: winner
    })
  }

  const handle = (e) => {
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const winner = calculateWinner(squares);
    const plus = count + 1;

    if (winner || squares[e]) return;

    squares[e] = xIsNext ? 'X' : 'O';
    dispatch({ type: MOVE, payload: { squares, plus } })
  }

  const jumpTo = step => {
    dispatch({ type: JUMP, payload: { step } })
  }

  const whatIf = () => {
    const step = count - 1;
    if (step >= 0) {
      dispatch({ type: JUMP_ARROW, payload: { step } })
    }
  }

  const reset = data => {
    dispatch({ type: JUMP_RESET, payload: { data } })
  }

  const value = {
    show: state.show,
    winner: state.winner,
    confetti: state.confetti,
    xIsNext: state.xIsNext,
    history: state.history,
    changeShow,
    winnerSelect,
    jumpTo,
    handle,
    whatIf,
    reset
  }

  return (
    <ProjectsContext.Provider value={value}>
      {props.children}
    </ProjectsContext.Provider>
  )
}

export default ProjectState
