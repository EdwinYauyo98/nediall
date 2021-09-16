import React from 'react'
import bannerImg from '../../assets/images/Banner/bannerimg.png'
import './Banner.scss'

export default function Banner() {
    return (
        <div className="bannerContainer">
            <div className="backgroundLeft">
                <div className="text">El acceso a redes sociales y</div>
                <div className="text">emprendimientos online</div>
                <div className="text">desde el año pasado.</div>
            </div>
            <img className="bannerImg" src={bannerImg} alt="bannerImg"></img>
        </div>
    )
}
