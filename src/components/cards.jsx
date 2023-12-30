//modulos 
import React from 'react';

//componentes
import Card from './card.jsx'


//contenidos
import ContentTerapiaRegresiva from './contentServicios/contentTerapiaRegresiva.jsx'
import ContentConstelcionesFamiliares from './contentServicios/contentConstelacionesFamiliares.jsx'
import ContentBiomagnetismo from './contentServicios/contentBiomagnetismo.jsx'
import ContenSanacionPatrones from './contentServicios/contentSanacionPatrones.jsx'
import ContenTerapiaFloral from './contentServicios/contentTerapiaFloral.jsx'
import ContenSanacionCuantica from './contentServicios/contentSanacionCuantica.jsx'
import ContenEnergizacion from './contentServicios/contentEnergizacion.jsx'
import ContentEnergizacionIntegral from './contentServicios/contentEnergizacionIntegral.jsx'
import ContentTerapiaCuantica from './contentServicios/contentTerapiaCuantica.jsx'

import ModalTerapiaRegresia from './contentModal/modalTerapiaRegresiva.jsx'
import ModalConstelacionesFamiliares from './contentModal/modalConstelacionesFamiliares.jsx'
import ModalBiomagnetismo from './contentModal/modalBiomagnetismo.jsx'
import ModalSanacionPatrones from './contentModal/modalSanacionPatrones.jsx' 
import ModalTerapiaFloral from './contentModal/modalTerapiaFloral.jsx' 
import ModalSanacionCuantica from './contentModal/modalSanacionCuantica.jsx'
import ModalTerapiaEnergizacion from './contentModal/modalTerapiaEnergizacion.jsx'
import ModalEnergizacionIntegral from './contentModal/modalEnergizacionIntegral.jsx'
import ModalTerapiaCuantica from './contentModal/modalTerapiaCuantica.jsx'



//imagenes
import imgTerapiaRegresiva from '../assets/terapiaregresiva1.png'
import imgConstelacionesfamiliares from '../assets/constelacionesfamiliares1.png'
import imgBiomagnetismo from '../assets/magnet.png'
import imgSanacionPatrones from '../assets/sanacionPatrones.png'
import imgTerapiaFloral from '../assets/floral.png'
import imgSanacionCuantica from '../assets/sanacion.png' 
import imgEnergizacion from '../assets/energizacion1.png' 
import imgEnergizacionIntegral from '../assets/energizacion.png'
import imgTerapiaCuantica from '../assets/cuantica.png'




function Cards() {
    // contenidos
    const { tituloTerpiaRegresiva, textTerapiaRegresiva, duracionTerapiaRegresiva, modalidadTerapiaRegresiva, precioTerapiaRegresiva, rgbTerapiaRegresiva} = ContentTerapiaRegresiva;
    const { tituloConstelacionesFamiliares, textConstelacionesFamiliares, duracionConstelacionesFamiliares, modalidadConstelacionesFamiliares, precioConstelacionesFamiliares, rgbConstelacionesFamiliares} = ContentConstelcionesFamiliares;
    const { tituloBiomagnetismo, textBiomagnetismo, duracionBiomagnetismo, modalidadBiomagnetismo, precioBiomagnetismo, rgbBiomagnetismo} = ContentBiomagnetismo;
    const { tituloSanacionPatrones, textSanacionPatrones, duracionSanacionPatrones, modalidadSanacionPatrones, precioSanacionPatrones, rgbSanacionPatrones} = ContenSanacionPatrones;
    const { tituloTerapiaFloral, textTerapiaFloral, duracionTerapiaFloral, modalidadTerapiaFloral, precioTerapiaFloral, rgbTerapiaFloral} = ContenTerapiaFloral;
    const { tituloSanacionCuantica, textSanacionCuantica, duracionSanacionCuantica, modalidadSanacionCuantica, precioSanacionCuantica, rgbSanacionCuantica} = ContenSanacionCuantica;
    const { tituloEnergizacion, textEnergizacion, duracionEnergizacion, modalidadEnergizacion, precioEnergizacion, rgbEnergizacion} = ContenEnergizacion;
    const { tituloEnergizacionIntegral, textEnergizacionIntegral, duracionEnergizacionIntegral, modalidadEnergizacionIntegral, precioEnergizacionIntegral, rgbEnergizacionIntegral} = ContentEnergizacionIntegral;
    const { tituloTerapiaCuantica, textTerapiaCuantica, duracionTerapiaCuantica, modalidadTerapiaCuantica, precioTerapiaCuantica, rgbTerapiaCuantica} = ContentTerapiaCuantica;

    const texto = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt corporis placeat autem facilis. Possimus aperiam accusantium natus dicta vero provident, numquam maiores ipsa placeat laboriosam repudiandae eum fuga quo aliquam!';
    return (  
        <>
            <div className='container  h-100' id = 'servicios-id' >
                {/*d-flex justify-content-center*/} 
                <div className='row'>

                    <div  id = 'terapia-regresiva-id' className='col-12 col-md-12 col-lg-6 mb-3  d-flex flex-fill'>
                        <Card  textModal = {ModalTerapiaRegresia} img = {imgTerapiaRegresiva} titulo = {tituloTerpiaRegresiva} text = {textTerapiaRegresiva} 
                        duracion = {duracionTerapiaRegresiva} modalidad = {modalidadTerapiaRegresiva} precio = {precioTerapiaRegresiva} rgb = {rgbTerapiaRegresiva}
                        ></Card>
                    </div>
                    <div id='constelaciones-familiares-id' className='col-12 col-md-12 col-lg-6 mb-3 d-flex flex-fill'>
                        <Card textModal={ModalConstelacionesFamiliares} img = {imgConstelacionesfamiliares} titulo = {tituloConstelacionesFamiliares} text = {textConstelacionesFamiliares} 
                        duracion = {duracionConstelacionesFamiliares} modalidad={modalidadConstelacionesFamiliares} precio={precioConstelacionesFamiliares}
                        rgb={rgbConstelacionesFamiliares}></Card>
                    </div>
                    <div id='biomagnetismo-id' className='col-12 col-md-12 col-lg-6 mb-3 d-flex flex-fill'>
                        <Card  textModal={ModalBiomagnetismo} img={imgBiomagnetismo} titulo={tituloBiomagnetismo} text={textBiomagnetismo} duracion={duracionBiomagnetismo} 
                        modalidad={modalidadBiomagnetismo} precio={precioBiomagnetismo} rgb={rgbBiomagnetismo}>
                        </Card>
                    </div>
                    <div id='sanacion-patrones-id' className='col-12 col-md-12 col-lg-6 mb-3 d-flex flex-fill'>
                        <Card  textModal={ModalSanacionPatrones} img = {imgSanacionPatrones} titulo = {tituloSanacionPatrones} text = {textSanacionPatrones} 
                        duracion = {duracionSanacionPatrones} modalidad = {modalidadSanacionPatrones} precio = {precioSanacionPatrones} rgb = {rgbSanacionPatrones}
                        ></Card>
                    </div>
                    <div id='terapia-floaral-id' className='col-12 col-md-12 col-lg-6 mb-3 d-flex flex-fill'>
                        <Card  textModal={ModalTerapiaFloral} img = {imgTerapiaFloral} titulo = {tituloTerapiaFloral} text = {textTerapiaFloral} 
                        duracion = {duracionTerapiaFloral} modalidad = {modalidadTerapiaFloral} precio = {precioTerapiaFloral} rgb = {rgbTerapiaFloral}
                        ></Card>
                    </div>
                    <div id='sanacion-cuantica-id' className='col-12 col-md-12 col-lg-6 mb-3 d-flex flex-fill'>
                        <Card textModal={ModalSanacionCuantica}  img = {imgSanacionCuantica} titulo = {tituloSanacionCuantica} text = {textSanacionCuantica} 
                        duracion = {duracionSanacionCuantica} modalidad = {modalidadSanacionCuantica} precio = {precioSanacionCuantica} rgb = {rgbSanacionCuantica}
                        ></Card>  
                    </div>
                    <div id='energizacion-id' className='col-12 col-md-12 col-lg-6 mb-3 d-flex flex-fill'>
                    <Card  textModal={ModalTerapiaEnergizacion} img = {imgEnergizacion} titulo = {tituloEnergizacion} text = {textEnergizacion} 
                    duracion = {duracionEnergizacion} modalidad = {modalidadEnergizacion} precio = {precioEnergizacion} rgb = {rgbEnergizacion}
                    ></Card>
                    </div>
                    <div id='energizacion-integral-id' className='col-12 col-md-12 col-lg-6 mb-3 d-flex flex-fill'>
                        <Card  textModal={ ModalEnergizacionIntegral} img = {imgEnergizacionIntegral} titulo = {tituloEnergizacionIntegral} text = {textEnergizacionIntegral} 
                        duracion = {duracionEnergizacionIntegral} modalidad = {modalidadEnergizacionIntegral} precio = {precioEnergizacionIntegral} rgb = {rgbEnergizacionIntegral}
                        ></Card>
                    </div>
                    <div id='terapia-cuantica-id' className='col-12 col-md-12 col-lg-6 mb-3 d-flex flex-fill'>
                        <Card   textModal = {ModalTerapiaCuantica} img={imgTerapiaCuantica} titulo = {tituloTerapiaCuantica} text = {textTerapiaCuantica} 
                        duracion = {duracionTerapiaCuantica} modalidad = {modalidadTerapiaCuantica} precio = {precioTerapiaCuantica} rgb = {rgbTerapiaCuantica}
                        ></Card>
                    </div>
                   
            
                </div>
          
            </div>
                
        
        </>

    );
}

export default Cards;