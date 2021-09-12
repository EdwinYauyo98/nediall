import React from 'react'
import './MenuBar.scss'
import btnBar from '../../../assets/images/Tittle/menuBtn.svg'

export default function MenuBar() {
    return (
        <div className="menuBarContainer">

            <div className="tittleText">NEDIALL</div>
            <img className="btnBar" src={btnBar} alt="btnBar" onClick={()=>menuBarAction()}></img>
        </div>
    )
}

function menuBarAction() {
    console.log("aea");
}
