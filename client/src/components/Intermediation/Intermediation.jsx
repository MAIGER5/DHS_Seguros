import React from 'react'
import { ImgPortada } from './ImgPortada'
import { CardBody1Intermediation } from './CardBody1Intermediation'
import { CardTextIntermediation } from './CardTextIntermediation'
import { ProductsIntermediation } from './ProductsIntermediation'
import { CardARLintermediation } from './CardARLintermediation'

export const Intermediation = () => {
  return (
    <div id='Intermediation' className='position-relative w-100 h-100'>
        <div>
            <ImgPortada/>
        </div>
        <div className='container'>
          <CardTextIntermediation/>
        </div>
        <div className='bg-dark'>
          <ProductsIntermediation/>
        </div>
        <div className='container py-5'>
          <CardARLintermediation/>
        </div>
        {/* <div className='container'>
            <CardBody1Intermediation/>
        </div> */}
    </div>
  )
}
