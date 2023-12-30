//moudulos
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { ModalServicios } from './Modal';

//componentes


//contenidos
const Card =  ({ textModal, img, titulo, text, duracion, modalidad, precio, rgb, espacio }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

        <div className='card text-center rounded-0 text-white' style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', }}>
           
            <div className='card-body m-3' style={{  backgroundColor: rgb }}>
                <h4 className='card-title'm > {titulo}</h4>
                <p style={{ fontSize: "0.9rem" }}>
                {espacio}{text} 
                    
                </p>
                <h4 style={{ fontSize: "1.0rem" }}> <br />Duración: {duracion}</h4>
                <h4 style={{ fontSize: "1.0rem" }}>Modalidad: {modalidad}</h4>
                <h4 style={{ fontSize: "1.0rem" }}> {precio}</h4>
                <button className='btn bg-primary text-white' onClick={handleShow}> Ideal para ti si...</button>
                <a href="#!">
                  

                </a>

              

            </div>
        </div>
        <ModalServicios text = {textModal} show={show} handleClose = {handleClose}></ModalServicios>
    </>
  )
}
export default Card