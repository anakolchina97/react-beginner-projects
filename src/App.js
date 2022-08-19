import React, { useState } from 'react';
import Modal from './components/Modal';
import './index.scss';

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <button className="open-modal-btn" onClick={() => setOpenModal(true)}>
        ✨ Открыть окно
      </button>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" alt="gif" />
      </Modal>
    </div>
  );
}

export default App;
