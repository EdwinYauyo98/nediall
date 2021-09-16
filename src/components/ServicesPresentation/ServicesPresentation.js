import react from 'react';
import './ServicesPresentation.scss';
import imagen1 from '../../assets/imagesServicesPresentation/imagen1.png'
import imagen2 from '../../assets/imagesServicesPresentation/imagen2.png'
import imagen3 from '../../assets/imagesServicesPresentation/imagen3.png'
import rayita from '../../assets/imagesServicesPresentation/rayita.png'
import LineShort from '../../assets/images ChallengePresentation/LineShort.png'
import LineLong from '../../assets/images ChallengePresentation/LineLong.png'
import rayitatop from '../../assets/imagesServicesPresentation/rayitatop.png'
import rayitamid from '../../assets/imagesServicesPresentation/rayitamid.png'
import rayitabot from '../../assets/imagesServicesPresentation/rayitabot.png'
export default function Services(props){
    return(
        
        <div className="Contenedor-General">
                        <h1 className="tittle">Te ayudamos</h1>
                        <h1 className="tittle1">en estos desafios</h1>
                    {/* <center> */}
                        <div className="Container-line">
                                <img className="Line" src={LineShort} alt="LineShort"></img>
                                <img className="Line" src={LineLong} alt="LineLong"></img>
                                <img className="Line" src={LineShort} alt="LineShort"></img>
                        </div>
                    {/* </center> */}
            <div className="cuadro-general">
                <div className="cuadro">
                    <div className="cajaimg">
                        <img className="a1" src={imagen3} alt="imagen3"></img>
                    </div>
                    <div className="cajatxt">
                            <h3 className="text">Creacion de marca grafico</h3>
                            <h3 className="text">e identidad corporativa</h3>
                            <p className="comentario">Desde el nombre, estructura hasta las aplicaciones de como se vera tu marca.</p>
                            {/* <p className="comentario2">las aplicaciones de como se vera</p>
                            <p className="comentario3">tu marca.</p> */}
                    </div>
                </div>
                <div className="cuadro">
                    <div className="cajaimg">
                        <div className="cajarayita">
                            <img className="a2" src={rayita} alt="rayita"></img>
                            <img className="a2" src={rayita} alt="rayita"></img>
                        </div>
                            <img className="a1" src={imagen2} alt="imagen2"></img>
                    </div>
                    <div className="cajatxt">
                            <h3 className="text">Creacion de marca grafico</h3>
                            <h3 className="text">e identidad corporativa</h3>
                            <p className="comentario">Ten un diseño digerible, intuitivo, flexible y adaptable.</p>
                            {/* <p className="comentario2">las aplicaciones de como se vera</p>
                            <p className="comentario3">tu marca.</p> */}
                    </div>
                </div>        
                <div className="cuadro">
                    <div className="cajaimg">
                        <div className="cajarayita2">
                            <img className="a2" src={rayitatop} alt="rayitatop"></img>
                            <img className="rayitamid" src={rayitamid} alt="rayitamid"></img>
                            <img className="a2" src={rayitabot} alt="rayitabot"></img>
                        </div>
                            <img className="a1" src={imagen1} alt="imagen1"></img>
                    </div>
                    <div className="cajatxt">
                            <h3 className="text">Creacion de marca grafico</h3>
                            <h3 className="text">e identidad corporativa</h3>
                            <p className="comentario">Ten un diseño digerible, intuitivo, flexible y adaptable.</p>
                            {/* <p className="comentario2">las aplicaciones de como se vera</p>
                            <p className="comentario3">tu marca.</p> */}
                    </div>
                </div>
            </div>  

            {/* <center> */}
            <button onClick={props.stateModal} className="enlace">Otros servicios</button>        
            {/* </center> */}
            <div className="blanco"></div>
        </div>
    
    )
}