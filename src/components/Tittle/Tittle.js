import React from 'react'
import './Tittle.scss'
import background from '../../assets/images/Tittle/background.svg'
import background2 from '../../assets/images/Tittle/background2.png'
import man from '../../assets/images/Tittle/man.png'

export default function Tittle() {
    return (
        <div className="tittleContainer">
            <img className="background" src={background} alt="background"></img>
            <img className="background2" src={background2} alt="background2"></img>
        </div>


    )
}
