import './Home.scss';

import Form from '../../components/form/Form';
import { useEffect, useState } from 'react';


export default function Home(props){
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

    return (
        <div className="formContainer">
            <div className="form">
                <Form
                    type="text"
                    placeholer="Nombres y Apellidos"
                    name="fullname"
                    onChange={setForm}
                />
                <Form
                    type="text"
                    placeholer="Número de Contacto"
                    name="phonenumber"
                    onChange={setForm}
                />
                <Form
                    type="email"
                    placeholer="Email"
                    name="email"
                    onChange={setForm}
                />
            </div>
        </div>
    );
}