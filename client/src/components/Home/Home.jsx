import React from 'react';
import { ImgPortada } from './imgPortada';
import { CardCentralX2 } from './CardCentralX2';
import { CardBody1 } from './CardBody1';
import { CardBody2Companys } from './CardBody2Companys';
import { CardBody2Products } from './CardBody2Products';

export const Home = () => {
  return (
    <div className='posicion-relative w-100 h-100'>
      <div>
        <ImgPortada/>
        <CardCentralX2/>
      </div>
      <div className='container' style={{marginTop:'200px'}}>
        <CardBody1/>  {/*Card Intermediacion de Riesgos*/}
      </div>
      <div className=' bg-dark mb-5' style={{marginTop:'50px'}}>
        <CardBody2Products/>
      </div>
    </div>
  )
}
