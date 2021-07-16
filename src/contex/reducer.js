import { INIT_SHOW, WINNER_SELECT, INIT_DRAWN, MOVE, JUMP } from './types'

const ProyectoReducer = (state, action) => {
  switch (action.type) {

    case INIT_SHOW:
      return {
        ...state,
        show: !state.show,
        confetti: !state.confetti
      }

    case INIT_DRAWN:
      return {
        ...state,
        show: !state.show,
      }

    case WINNER_SELECT:
      return {
        ...state,
        winner: action.payload
      }

    case MOVE:
      return {
        ...state,
        history: state.history.concat({
          squares: action.payload.squares,
        }),
        xIsNext: !state.xIsNext,
      }

    case JUMP:
      return {
        ...state,
        xIsNext: action.payload.step % 2 === 0,
        history: state.history.slice(0, action.payload.step + 1),
      }

    default:
      return state;
  }
}

export default ProyectoReducer;
