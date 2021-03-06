
import { useState } from 'react';
import Tittle from './components/Tittle/Tittle'
import Modal from './components/Modal/Modal'
import DataForm from './components/DataForm/DataForm';
import Challenge from './components/Challenge/Challenge';
import ServicesPresentation from './components/ServicesPresentation/ServicesPresentation';
import Banner from './components/MiddleBanner/Banner';
import './App.scss'

function App() {
  const [openModal, setOpenModal] = useState(false);
  function OpenModalAction() {
    setOpenModal(!openModal);
  }

  const dataModal = {
    'modalTitle': '┬íComencemos con tu proyecto!',
  }

  return (

    <div className="app">
      <div className="landingPage">
        <Tittle className="title" stateModal={OpenModalAction}></Tittle>
        <ServicesPresentation stateModal={OpenModalAction}/>
        <Banner/>
        <Challenge stateModal={OpenModalAction}/>
        <DataForm className="dataForm" />
      </div>
      {openModal && <Modal className="modal" stateModal={OpenModalAction} dataModal={dataModal} />}
    </div >

  );
}

export default App;
