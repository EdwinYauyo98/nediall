import React from 'react'
import './Modal.scss'
import Input from '../DataForm/Input/Input'
export default function Modal(props) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="exitBtn"><button onClick={props.stateModal}> X </button></div>
                
                <div className="form">
                    <Input
                        type="text"
                        placeholer="Nombres y Apellidos"
                        name="fullname"
                    />
                    <Input
                        type="text"
                        placeholer="Número de Contacto"
                        name="phonenumber"
                    />
                    <Input
                        type="email"
                        placeholer="Email"
                        name="email"
                    />
                </div>
                <div className="footer">
                    <button>¡Llámenme ahora!</button>
                </div>
            </div>

        </div>
    )
}
