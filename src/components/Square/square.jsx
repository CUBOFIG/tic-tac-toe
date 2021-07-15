import React from 'react'

const Square = ({ value, action }) => {
  return (
    <button className="btn-new" onClick={action}>
      {value}
    </button>
  )
}

export default Square
