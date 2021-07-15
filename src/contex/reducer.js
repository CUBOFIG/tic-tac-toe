import { INIT_SHOW } from './types'

const ProyectoReducer = (state, action) => {
  switch (action.type) {
    case INIT_SHOW:
      return {
        ...state,
        show: action.payload
      }
    default:
      return state;
  }
}

export default ProyectoReducer;
