//modulos
import React from "react";
import './../App.css';

//componentes
import CardTestimonios from './CardTestimonios.jsx'

//contenido
import contentTestimonio1 from "./contentTestimonios/contentTestimonio1.jsx"
import contentTestimonio2 from "./contentTestimonios/contentTestimonio2.jsx"
import contentTestimonio3 from "./contentTestimonios/contentTestimonio3.jsx"
import contentTestimonio4 from "./contentTestimonios/contentTestimonio4.jsx"

function Testimonios() {

    const {texto1, nombre1} = contentTestimonio1;
    const {texto2, nombre2} = contentTestimonio2;
    const {texto3, nombre3} = contentTestimonio3;
    const {texto4, nombre4} = contentTestimonio4;

    return (
      <>
         <div className='container h-100 ' id = 'testimonios-id' >     
            <div className='row '>
              
              
              <div className='card mb-3 mb-sm-0 col-12 col-md-12 col-lg-6  d-flex flex-fill'>
                <CardTestimonios textTestimonio={texto1} nombreTestimonio={nombre1}></CardTestimonios>  
              </div>
              
              <div className='card mb-3 mb-sm-0 col-12 col-md-12 col-lg-6  d-flex flex-fill'>
                <CardTestimonios textTestimonio={texto2} nombreTestimonio={nombre2}></CardTestimonios>
              </div>
             
              <div className='card mb-3 mb-sm-0 col-12 col-md-12 col-lg-6  d-flex flex-fill'>
                <CardTestimonios textTestimonio={texto3} nombreTestimonio={nombre3}></CardTestimonios>
              </div>

              <div className='card mb-3 mb-sm-0 col-12 col-md-12 col-lg-6  d-flex flex-fill'>
                <CardTestimonios textTestimonio={texto4} nombreTestimonio={nombre4}></CardTestimonios>
              </div>
              
            </div>
          </div>

      </>
    )
}

export default Testimonios;

