import React from 'react'

const Square = ({ value, action }) => {
  return (
    <div className="d-flex">
      <div className="align-items-center justify-content-center">
        <button className="btn-new" onClick={action}>
          {value}
        </button>
      </div>

    </div>
  )
}

export default Square
