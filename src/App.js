import React, { useRef, useContext } from 'react'
import { Container } from 'reactstrap';
import { Button, Modal, ModalBody } from 'reactstrap';
import './App.css';
import Confetti from "react-confetti";
import useWindowSize from 'react-use/lib/useWindowSize'
import Game from './components/Game/game';
import projectContext from './contex/context';
import FontAwesomeIcon from './shared/FontAwesomeIcon'

function App() {

  const { show, changeShow, winner, confetti } = useContext(projectContext)

  const { width, height } = useWindowSize();

  const confettiRef = useRef(null);

  const toggle = () => {
    if (confetti) {
      changeShow('Winner');
    } else {
      changeShow('Draw');
    }
  }

  return (
    <Container >
      <div className="confetti-wrap" ref={confettiRef}>
        <Game />
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
        </Modal>
      </div>

    </Container >

  );
}

export default App;
