//modulos
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

//imagenes
import logo from "../assets/logo-sin-letras.png"



export const Header = () => {


        
    return (
     <>
     <Navbar expand="lg" fixed="top" style={{ backgroundColor: "rgb(78, 61, 100)" }}>
      <Navbar.Brand href="#" className='px-5'>
        <img src={logo} width="60px" alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#descripcion-id" className='px-3 text-light'>Inicio</Nav.Link>
          <Nav.Link href="#descripcion-id" className='px-3 text-light'>Agendar Hora</Nav.Link>
          <Nav.Link href="#servicios-id" className='px-3 text-light'>Servicios</Nav.Link>
          <Nav.Link href="#testimonios-id" className='px-3 text-light'>Testimonios</Nav.Link>
          <Nav.Link href="#contacto-id" className='px-3 text-light'>Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
    )
}





/*  <Navbar expand="lg" fixed="top" style={{ backgroundColor: "rgb(78, 61, 100)" }}>
      <Navbar.Brand href="#" className='px-5'>
        <img src={logo} width="60px" alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#descripcionEmpresa-id" className='px-3 text-light'>Inicio</Nav.Link>
          <Nav.Link href="#descripcionEmpresa-id" className='px-3 text-light'>Agendar Hora</Nav.Link>
          <Nav.Link href="#servicio1-id" className='px-3 text-light'>Servicios</Nav.Link>
          <Nav.Link href="#testimonio-id" className='px-3 text-light'>Testimonios</Nav.Link>
          <Nav.Link href="#contacto-id" className='px-3 text-light'>Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar> */


/* <Navbar expand="lg" className="text-light" fixed='top'  style={{ backgroundColor: "rgb(78, 61, 100)" }}>
      <Container className="text-white">
        <Navbar.Brand  className="text-light" href="#home" > <img src={logo} width="60px" alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-light" href="#home">Inicio</Nav.Link>
            <Nav.Link className="text-light" href="#home">Agendar Hora</Nav.Link>
            <Nav.Link className="text-light" href="#home">Servicios</Nav.Link>
            <Nav.Link className="text-light" href="#home">Testimonios</Nav.Link>
            <Nav.Link className="text-light" href="#home">Contacto</Nav.Link>
            
  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 */




 