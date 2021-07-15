import React, { useReducer } from 'react';
import ProjectsContext from './context'
import ProjectsReducer from './reducer'
import { INIT_SHOW } from './types'
const ProjectState = props => {

  const initialState = {
    show: false
  }

  const [state, dispatch] = useReducer(ProjectsReducer, initialState)

  const changeShow = (data) => {
    console.log(data)
    dispatch({
      type: INIT_SHOW,
      payload: data
    })
  }


  const value = {
    show: state.show,
    changeShow
  }

  return (
    <ProjectsContext.Provider value={value}>
      {props.children}
    </ProjectsContext.Provider>
  )
}

export default ProjectState
