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
      <Modal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
}

export default App;
