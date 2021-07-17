import React, { useRef, useContext } from 'react'
import { Container } from 'reactstrap';
import { Button, Modal, ModalBody } from 'reactstrap';
import './App.css';
import Confetti from "react-confetti";
import useWindowSize from 'react-use/lib/useWindowSize'
import projectContext from './contex/context';
import FontAwesomeIcon from './shared/FontAwesomeIcon'
import Gamt from './components/Gamt/Gamt';
import ReactAudioPlayer from 'react-audio-player';
import sound from './Sounds/winner.m4a'

function App() {

  const {
    show,
    changeShow,
    winner,
    confetti,
    jumpTo,
    reset
  } = useContext(projectContext)

  const { width, height } = useWindowSize();

  const confettiRef = useRef(null);

  const toggle = () => {
    if (confetti) {
      changeShow('Winner');
    } else {
      changeShow('Draw');
    }
    jumpTo(0);
    reset(0);
  }

  return (
    <Container >
      <div className="confetti-wrap" ref={confettiRef}>
        <Gamt />
        {confetti ?
          < Confetti
            recycle={show}
            numberOfPieces={500}
            width={width}
            height={height}
          /> : null}
      </div>

      <div className="modal-dialog">
        <Modal isOpen={show} toggle={toggle} className="my-modal">
          <ModalBody className="d-flex align-items-center justify-content-center mt-5">
            <div >
              <h1 className="text-winner">{winner ? winner : null}</h1>
              <div className="d-flex align-items-center justify-content-center mt-5 mb-5 bnt">
                <Button className="name" onClick={toggle} >
                  <FontAwesomeIcon className="mr-2 icon" icon="undo-alt" size="lg" />
                </Button>{' '}
              </div>
            </div>
          </ModalBody>
          {winner === 'Draw'
            ? null
            : <ReactAudioPlayer
              src={sound}
              autoPlay
            />}
        </Modal>
      </div>

    </Container >

  );
}

export default App;
