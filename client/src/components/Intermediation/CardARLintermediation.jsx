import React from 'react'
import arl from '../../../images/sura.png'
import colpatria from '../../../images/colpatria.png'
import colmena from '../../../images/colmena.png'
import bolivar from '../../../images/bolivar.png'
import positiva from '../../../images/positiva.png'

export const CardARLintermediation = () => {
  return (
    <div className='container position-relative '>
      <div className="card mb-3 rounded-0  border border-0 pt-3" >
        <div className="row g-0 ">
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title fs-2">Nuestros Aliados <br /> <a className="text-warning text-decoration-none" href="">Para la Gestión de Riesgos Laborales</a> </h5>
              <p className="card-text">Para nosotros lo más importante son nuestros clientes, por esta razón estamos comprometidos con el apoyo activo en la ejecución de las actividades de promoción y
              prevención en SGSST.</p>
              {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
            </div>
          </div>
          <div className="col-md-3 border border-0 d-flex justify-content-center align-items-center">
          <a href="#" className="btn btn-success mt-2" role="button" data-bs-toggle="button">Contactanos</a>
          </div>
        </div>
      </div>

{/* AQUI EMPIEZAN LAS TARJETAS  */}

        <nav className="nav nav-pills flex-column flex-sm-row d-flex justify-content-between align-items-center">
          <div className='overflow-hidden border border-1 mb-3' style={{width:'150px', height:'50px'}}>
            <img src={arl} alt="" className='img-fluid flex-sm-fill text-sm-center nav-link'/>
          </div>
          <div className='overflow-hidden border border-1 mb-3' style={{width:'150px', height:'50px'}}>
            <img src={colpatria} alt="" className='img-fluid flex-sm-fill text-sm-center nav-link'/>
          </div>
          <div className='overflow-hidden border border-1 mb-3' style={{width:'150px', height:'50px'}}>
            <img src={colmena} alt="" className='img-fluid flex-sm-fill text-sm-center nav-link'/>
          </div>
          <div className='overflow-hidden border border-1 mb-3' style={{width:'150px', height:'50px'}}>
            <img src={bolivar} alt="" className='img-fluid flex-sm-fill text-sm-center nav-link'/>
          </div>
          <div className='overflow-hidden border border-1 mb-3' style={{width:'150px', height:'50px'}}>
            <img src={positiva} alt="" className='img-fluid flex-sm-fill text-sm-center nav-link'/>
          </div>
        </nav>      

    </div>
  )
}
