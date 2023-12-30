//modulos
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';





const CardTestimonios =  ({ textTestimonio, nombreTestimonio}) => {
 

  return (
    <>
        <div className=' text-center rounded-0 text-dark ' >   
            <div className='card-body'>
                <h4  style={{ fontSize: "1.2rem" }}> {textTestimonio}</h4>
                <h4 style={{ fontSize: "1.0rem", textAlign: "left" }}> <br /> {nombreTestimonio} </h4>
            </div>
        </div>  
        
    </>
  )
}
export default CardTestimonios