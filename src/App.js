import React, { useState, useRef, useContext } from 'react'
import { Container } from 'reactstrap';
import './App.css';
import Confetti from "react-confetti";
import useWindowSize from 'react-use/lib/useWindowSize'
import Game from './components/Game/game';
import projectContext from './contex/context';

function App() {


  const { show, } = useContext(projectContext)

  const { width, height } = useWindowSize();
  const confettiRef = useRef(null);

  return (
    <Container >
      <div className="confetti-wrap" ref={confettiRef}>
        <Game />
        {show ?
          < Confetti
            recycle={show}
            numberOfPieces={500}
            width={width}
            height={height}
          /> : null}
      </div>

    </Container >

  );
}

export default App;
