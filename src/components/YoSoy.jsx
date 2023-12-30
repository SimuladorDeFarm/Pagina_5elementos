import React from 'react';
import Fabiola from '../assets/Fabiola.jpg'
import Fondo from '../assets/YoSoyFondo.jpg'
import './YoSoy.css'


function YoSoy() {
    
     
    return (  
       
           
           <>
            <div className='container  h-100'>
                <div className='row'>
                   

                        <div className='col-12 col-md-12 col-lg-6 mb-3  d-flex flex-fill' >
                            <div className='card text-center rounded-0 text-black' style={{backgroundImage: `url(${Fondo})`, backgroundSize: 'cover'}}>
                                <div className='card-body m-3' style={{ backgroundColor: "rgba(0,0,0, 0.2)"}}>
                                    <div className='row'>
                                        <div className='col-12 col-md-4 col-lg-4'>
                                            <img src={Fabiola} width="600px" alt="Logo" className="img-fluid"/>
                                        </div>
                                        <div className='col'>
                                            <p>¿Quién soy?
                                                Sobre mí:
                                                Mi nombre es Fabiola:
                                                Comencé́ a recorrer este camino desde el año 2009, paralelamente a mis estudio universitarios como profesional del área de la salud, inicialmente en la búsqueda de una ayuda "alternativa" para la enfermedad de mi madre. Con el correr de los años, me di cuenta que esa ayuda también yo la necesitaba... y mucho.
                                                Desde ahí, he comenzado un viaje interior de sanación y aprendizajes con distintas técnicas energéticas y transpersonales. Viaje, que no ha parado hasta hoy. En donde me he enfrentado a mis heridas, traumas y a mis sombras. Y si bien no ha sido un camino fácil, sin duda alguna, lo volvería a recorrer. Porque gracias a ello, he podido acompañar en estos 14 años, a muchos seres en su búsqueda interior; Ya sea para una rica sesión de energía y masaje, hasta procesos en donde están preparándose para dar el paso a lo que llamamos “muerte”. Es por eso que hoy puedo acompañarte desde 5 Elementos. Este hermoso espacio de sanación que he creado con todo mi amor, poniendo en práctica toda mi experiencia en este camino del despertar de tu consciencia. Para que puedas sentirte capaz de liberarte de todas esas heridas, miedos y programaciones que impiden que des el paso y veas tu verdadero potencial, tu verdadera esencia y así puedas alcanzar la vida que siempre soñaste para ti, como yo lo he hecho con la mía.
                                                Y Tú, ¿Te animas a descubrir tu verdadero ser?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                  
                </div>
            </div>
                
        
        </>
        
       

    );
}

export default  YoSoy;

/*<div className='card text-center rounded-0 text-black' style={{}}>
                    
                            <div className='card-body m-3' style={{ backgroundColor: "rgba(0,0,0, 0.2)" }}>
                                    
                                    <img src={Fabiola} alt="fabiola" style={{ width: '10em', height: '10em' }} />
                                    <p style={{ fontSize: "0.9rem" }}>
                                    <br></br>5 Elementos: Medicina Holística y Transpersonal" es un espacio de sanación creado por Fabiola Zavalla Guerrero, profesional del área de la salud, Terapeuta Energética y Transpersonal, ubicado en el corazón de Santiago de Chile, con una clara misión: fomentar la salud integral, el bienestar, el crecimiento personal y la expansión de la consciencia.</p>   
                                    
                                   
                                    
                                    
                                    
                                    
                            </div>
                        </div> */

                       