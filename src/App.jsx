//modulos
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import React, {Suspense, lazy} from 'react'

const Description = lazy(() =>import('./components/Description.jsx'))
const YoSoy = lazy(() =>import('./components/YoSoy.jsx'))
const Cards = lazy(() =>import('./components/cards.jsx'))
const Testimonios = lazy(() =>import('./components/Testimonios.jsx'))
const Contactos  = lazy(() =>import('./components/Contacto.jsx'))

//componentes
import {Header}  from './components/Header'
//import Description from './components/Description.jsx'
//import Cards from './components/cards.jsx'
//import Testimonios from './components/Testimonios.jsx'
//import Contactos from './components/Contacto.jsx'
//import YoSoy from './components/YoSoy.jsx';

function App() {
  
  return (
    <>
     
    <div className='App'>

        
        <Header></Header>

        <Suspense fallback = {<h1>Cargando...</h1>}>

          <Description></Description>
        
        </Suspense>
        
        <Suspense fallback = {<h1>Cargando...</h1>}>

          <YoSoy></YoSoy>
        
        </Suspense>
        
        <Suspense fallback = {<h1>Cargando...</h1>}>
          
          <Cards ></Cards>
        
        </Suspense>

        <Suspense fallback = {<h1>Cargando...</h1>}>

          <Testimonios></Testimonios>
        
        </Suspense>
        
        <Suspense fallback = {<h1>Cargando...</h1>}>

          <Contactos></Contactos>
        
        </Suspense>
    </div>
    </>
  )
}

export default App
