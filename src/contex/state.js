import React, { useReducer } from 'react';
import ProjectsContext from './context'
import ProjectsReducer from './reducer'
import {
  INIT_SHOW, WINNER_SELECT, INIT_DRAWN, JUMP, MOVE
} from './types'
const ProjectState = props => {

  const initialState = {
    show: false,
    winner: null,
    confetti: false,
    xIsNext: true,
    history: [{ squares: Array(9).fill(null) }]
  }

  const [state, dispatch] = useReducer(ProjectsReducer, initialState)

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

  const handle = (change) => {
    dispatch({ type: MOVE, payload: { change } })
  }

  const jumpTo = step => {
    dispatch({ type: JUMP, payload: { step } })
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
    handle
  }

  return (
    <ProjectsContext.Provider value={value}>
      {props.children}
    </ProjectsContext.Provider>
  )
}

export default ProjectState
