import React from 'react'
import sound from '../../Sounds/Button.m4a'

const Square = ({ value, action }) => {

  let audio = new Audio(sound);
  audio.load();
  audio.muted = true;

  const click = () => {
    audio.muted = false;
    audio.play();
    action()
  }

  return (
    <div className="d-flex">
      <div className="align-items-center justify-content-center">
        <button className="btn-new" onClick={click}>
          {value}
        </button>
      </div>

    </div>
  )
}

export default Square
