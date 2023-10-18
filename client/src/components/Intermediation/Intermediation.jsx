import React from 'react'
import { ImgPortada } from './ImgPortada'
import { CardBody1Intermediation } from './CardBody1Intermediation'

export const Intermediation = () => {
  return (
    <div className='posicion-relative w-100 h-100'>
        <div>
            <ImgPortada/>
        </div>
        <div className='container'>
            <CardBody1Intermediation/>
        </div>
    </div>
  )
}
