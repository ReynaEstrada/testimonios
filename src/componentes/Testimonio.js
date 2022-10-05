import React  from 'react';
import '../css/Testimonio.css';
function Testimonio(props) {
   return(
    <div className='contenedor-testimonio'>
      <img 
      className='imagen-testimonio'
      src={require(`../img/testimonio-${props.imagen}.png`)}
      alt='Fotografía de Emma' />
      <div className='text-container-testimony'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p clasName='cargo-testimonio'>
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
   ); 
}
export default Testimonio;