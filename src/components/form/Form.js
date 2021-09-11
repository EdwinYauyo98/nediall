import "./Form.scss";
import  Input from '../Input/Input';
import {useState} from 'react'

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
                    placeholer="Nombres y Apellidos"
                    name="fullname"
                    onChange={setForm}
                />
                <Input
                    type="text"
                    placeholer="Número de Contacto"
                    name="phonenumber"
                    onChange={setForm}
                />
                <Input
                    type="email"
                    placeholer="Email"
                    name="email"
                    onChange={setForm}
                />
            </div>
        </div>
    );
}

export default Form;