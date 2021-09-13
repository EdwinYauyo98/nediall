
import { useState } from 'react';
import Tittle from './components/Tittle/Tittle'
import Modal from './components/Modal/Modal'
import DataForm from './components/DataForm/DataForm';
import Footer from './components/Footer/footer';
import './App.scss'

function App() {
  const [openModal, setOpenModal] = useState(false);
  function OpenModalAction() {
    setOpenModal(!openModal);
  }

  const dataModal = {
    'modalTitle': '¡Comencemos con tu proyecto!',
  }

  return (

    <div className="app">
      <div className="landingPage">
        <Tittle className="title" stateModal={OpenModalAction}></Tittle>
        <DataForm className="dataForm" />
        {/* <Footer className="footer" /> */}
      </div>
      {openModal && <Modal className="modal" stateModal={OpenModalAction} dataModal={dataModal} />}
    </div >

  );
}

export default App;
