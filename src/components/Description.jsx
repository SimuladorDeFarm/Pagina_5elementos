//modulos
import React from 'react';
import img from '../assets/portada.png'
import logo from "../assets/Logo-5-Elementos-letra.png"
import logoWsp from "../assets/icono-whatsap.png"

//contenido
const phoneNumber = '56987636208';
const message = 'Hola, escribo para pedir una hora de ';

const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
  
    // Construye el enlace de WhatsApp
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
    // Redirige a WhatsApp
    window.open(whatsappLink, '_blank');
  };

function Cards() {
    
     
    return (  
        <>
            <div className='container  h-100 mt-5' id='descripcion-id'>
                           
                <div className='row'>

                    <div className='col-12 col-md-12 col-lg-6 mb-3  d-flex flex-fill'>
                        <div className='card text-center rounded-0 text-black' style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', }}>
                    
                            <div className='card-body m-3' style={{ backgroundColor: "rgba(0,0,0, 0.2)" }}>
                                <img src={logo} width="600px" alt="Logo" className="img-fluid"></img>
                                    <p style={{ fontSize: "0.9rem" }}>
                                    <br></br>5 Elementos: Medicina Holística y Transpersonal" es un espacio de sanación creado por Fabiola Zavalla Guerrero, profesional del área de la salud, Terapeuta Energética y Transpersonal, ubicado en el corazón de Santiago de Chile, con una clara misión: fomentar la salud integral, el bienestar, el crecimiento personal y la expansión de la consciencia.</p>   
                                    
                                    <div className='text-black d-flex    justify-content-center'>
                                    <ol >
                  <a className= "link" href="#terapia-regresiva-id" style={{
                    color: 'inherit',          // Utiliza el color heredado del elemento padre
                    textDecoration: 'none',    // Quita el subrayado predeterminado
                    }}
                    >Terapia Regresiva</a>
                  <a className= "link" href="#constelaciones-familiares-id" style={{
                    color: 'inherit',          // Utiliza el color heredado del elemento padre
                    textDecoration: 'none',    // Quita el subrayado predeterminado
                    }}>
                      <br />Constelaciones Familiares</a>
                    <a className= "link" href="#biomagnetismo-id" style={{
                    color: 'inherit',          // Utiliza el color heredado del elemento padre
                    textDecoration: 'none',    // Quita el subrayado predeterminado
                    }}>
                      <br />Biomagnetismo</a>
                  <a className= "link" href="#sanacion-patrones-id" style={{
                    color: 'inherit',          // Utiliza el color heredado del elemento padre
                    textDecoration: 'none',    // Quita el subrayado predeterminado
                    }}>
                    <br />Sanación de Patrones</a>
                  <a className= "link" href="#terapia-floaral-id" style={{
                    color: 'inherit',          // Utiliza el color heredado del elemento padre
                    textDecoration: 'none',    // Quita el subrayado predeterminado
                    }}>
                      <br />Terapia Floral</a>
                    <a className= "link" href="#sanacion-cuantica-id" style={{
                      color: 'inherit',          // Utiliza el color heredado del elemento padre
                      textDecoration: 'none',    // Quita el subrayado predeterminado
                    }}>
                      <br />Sanación Cuántica</a>
                    <a className= "link" href="#energizacion-id" style={{
                    color: 'inherit',          // Utiliza el color heredado del elemento padre
                    textDecoration: 'none',    // Quita el subrayado predeterminado
                    }}>
                    <br />Terapia Energización</a>
                    <a className= "link" href="#energizacion-integral-id" style={{
                    color: 'inherit',          // Utiliza el color heredado del elemento padre
                    textDecoration: 'none',    // Quita el subrayado predeterminado
                    }}>
                    <br />Terapia Energética Integral</a>
                    <a className= "link" href="#terapia-cuantica-id" style={{
                    color: 'inherit',          // Utiliza el color heredado del elemento padre
                    textDecoration: 'none',    // Quita el subrayado predeterminado
                    }}>
                    <br />Terapia Cuántica</a>
                </ol>
        </div>
                                    
                                    
                                    <a className="btn btn-outline-dark btn-sm " id = 'agendar-id' onClick={handleClick} role="button" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                                        <div style={{ marginRight: "10px" }}>
                                            <img src={logoWsp} alt='WhatsApp Image 1' style={{ width: "20px", height: "20px" }} />
                                        </div>
                                        <div>
                                            <h4 >Agendar hora</h4>
                                        </div>
                                    </a>
                                    
                            </div>
                        </div>
                    </div>
                            
                        
                </div>
          
            </div>
                
        
        </>

    );
}

export default Cards;