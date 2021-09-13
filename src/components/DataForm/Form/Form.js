import "./Form.scss";
import  Input from '../Input/Input';
import {useState} from 'react';
import womenImg from '../../../assets/imgs/woman.png';

function Form(props){
    const [data, setData] = useState({
        fullname: "", 
        phonenumber: "", 
        email: ""
    });

    const setForm = (e) =>{
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value});
    }

    const sendData = (e) => {
        let axios = require("axios");
        let data2 = JSON.stringify({
            fullname: data.fullname,
            phonenumber: data.phonenumber,
            email: data.email
        });
    }
    return(
        <div className="formContainer">
            <div className="form">
                <Input
                    type="text"
                    placeholder="Nombres y Apellidos"
                    name="fullname"
                    onChange={setForm}
                />
                <Input
                    type="text"
                    placeholder="Número de Contacto"
                    name="phonenumber"
                    onChange={setForm}
                />
                <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={setForm}
                />
                <div className="buttonContainer">
                    <div className="buttonCall">
                        ¡Llámenme ahora!
                    </div>
                </div>
            </div>
            <div className="Img">
                <img className="womanImg" src={womenImg} alt="ga"/>
            </div>
            
        </div>
    );
}

export default Form;