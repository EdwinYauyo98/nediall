    import React from 'react'
    import './Challenge.scss'
    import Rectangle from '../../assets/images ChallengePresentation/Rectangle.png'
    import Rectangle1 from '../../assets/images ChallengePresentation/Rectangle1.png'
    import LineShort from '../../assets/images ChallengePresentation/LineShort.png'
    import LineLong from '../../assets/images ChallengePresentation/LineLong.png'
    import imagen3 from '../../assets/imagesServicesPresentation/imagen3.png'

    export default function Challenge(props) {
        return (
            <center>
            <div className="Container">
                <h1 className="tittle">Algunos de nuestros</h1>
                <h1 className="tittle1">desafíos</h1>
                </div>    
                <div className="Container-line">
                <img className="Line" src={LineShort} alt="LineShort"></img>
                <img className="Line" src={LineLong} alt="LineLong"></img>
                <img className="Line" src={LineShort} alt="LineShort"></img>
                </div>
                <div className="Container">
                <button onClick={props.stateModal} className="btn">Misceláneo</button>
                <button onClick={props.stateModal} className="btn">Branding</button>
                <button onClick={props.stateModal} className="btn">Páginas web</button>
                </div>
            
                    <div className="Container-img">
                        <div className="espaciobig">
                            <div className="espacio">
                                <div className="img"><img src={imagen3} alt="imagen3"></img></div>
                                <div className="img"><img src={imagen3} alt="imagen3"></img></div>
                                <div className="img"><img src={imagen3} alt="imagen3"></img></div>
                            </div>
                            <div className="espacio">    
                                <div className="img"><img src={imagen3} alt="imagen3"></img></div>
                                <div className="img"><img src={imagen3} alt="imagen3"></img></div>
                                <div className="img"><img src={imagen3} alt="imagen3"></img></div>
                            </div>
                        </div>
                        
                        <button onClick={props.stateModal} className="enlace">más proyectos</button>
                    </div>
            </center>
        )
    }
