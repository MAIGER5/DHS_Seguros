import React from 'react'
import imgHome from '../../../images/prueba6.jpg';
import { Form } from './Form'

export const Contact = () => {
  return (
    <div className='bg-dark w-100 h-100'>
      <div className='w-100 overflow-hidden' style={{height:'100px'}} >
        {/* <img  src={imgHome} alt="" className='w-100 h-100 object-fit-cover' style={{objectPosition:'center'}} /> */}
      </div>

      <div className="row m-auto border border-0" style={{width:'80%'}}>
        <div className='col-12 col-md-10 col-lg-5 m-auto  border border-0'>
          <Form/>
        </div>
        <div className='col-12 col-md-10 col-lg-5 m-auto pb-5 bg-success-gradiant border border-0'>
          <div className="card h-100 rounded-0 border border-0 bg-success shadow">
            <i className="bi bi-shield-check card-img-top fs-1 text-dark px-4 pt-4"></i>
              <div className="card-body  px-4">
                <h5 className="card-title text-dark">Información de Contacto</h5>
                <div className="card-body  ">
                  <div className="col-12 border border-0 d-flex justify-content-start align-items-center">
                    <i className="bi bi-telephone col-2 border border-0 fs-2 text-dark "></i>
                    <a className="col-8 border border-0 text-dark" style={{fontSize:'14px'}}>+57 3016589785</a>
                  </div>
                  <div className="col-12 border border-0 d-flex justify-content-start align-items-center">
                    <i className="bi bi-envelope-fill col-2 border border-0 fs-2 text-dark "></i>
                    <a className="col-8 border border-0 text-dark" style={{fontSize:'14px'}}>comercialdhs@grupospo.com.co</a>
                  </div>
                  <div className="col-12 border border-0 d-flex justify-content-start align-items-center">
                    <i className="bi bi-geo-alt col-2 border border-0 fs-2 text-dark "></i>
                    <a className="col-8 border border-0 text-dark" style={{fontSize:'14px'}}>@dhssegurospso</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
