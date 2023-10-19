import 'bootstrap-icons/font/bootstrap-icons.css';
import moto from '../../../images/moto.png'
import auto from '../../../images/auto.png'
// import styles from './intermediation.module.css'


export const CardSOAT = () => {
  return (
    <div className="row py-5 px-2">
      <div className="col-12 col-md-6 pe-md-5 d-flex pb-sm-5 pb-md-0" style={{alignItems:'center'}}>
        <div className="card-body">
          <h1 className="card title text-success fw-bold m-0 border border-0">SOAT</h1>
          <h1 className="card title fs-2 fw-semibold border border-0 ">Seguro Obligatorio <br />de Accidentes de Tránsito</h1>
          <div className="card-text py-2">Nos convertimos en sus aliados estratégicos para la intermediación de sus riesgos laborales. Generamos valor para su empresa a través de auditorías regulares y la comunicación abierta y constante entre la Administradora de Riesgos Laborales (ARL) y la empresa con el fin de abordar de manera oportuna los requerimientos, solicitudes y posibles inconvenientes.
          </div>
          <a href="#" className="btn btn-success mt-2" role="button" data-bs-toggle="button">Contactanos</a>
        </div>
      </div>

{/* /*********ESTA ES LA OTRA COLUMNA *** */ }
      <div className="col-12 col-md-6 ps-md-5 position-relative border border-1 rounded-3">
     
        <div className="mb-3  pb-3" >
          <div className="row g-0 ">
            <div className="col-md-2 d-flex justify-content-center d-flex align-items-center">
              <div className='bg-success rounded-circle d-flex justify-content-center d-flex align-items-center'style= {{width:'50px', height:'50px'}}>
                <a className='text-center align-middle text-dark fs-4 fw-bold text-decoration-none'>1</a>
              </div>
            </div>
            <div className="col-md-10 px-3 ">
              <div className="card w-100 border border-0">
                <img src={moto} alt="" className='card-img w-75 m-auto' />
              </div>
              <div className="card-body ">
                <h5 className="card-title text-center">SOAT Moto</h5>
                <p className="card-text text-center" style={{fontSize:'14px'}}>Nos enorgullece ofrecer un asesoramiento personalizado y continuo a nuestros clientes, respaldándolos en cada paso de su camino.</p>
              </div>
            </div>
          </div>
        </div>      
        <div className="mb-3  pb-3" >
          <div className="row g-0 ">
            <div className="col-md-2 d-flex justify-content-center d-flex align-items-center">
              <div className='bg-success rounded-circle d-flex justify-content-center d-flex align-items-center'style= {{width:'50px', height:'50px'}}>
              <a className='text-center align-middle text-dark fs-4 fw-bold text-decoration-none'>2</a>
              </div>
            </div>
            <div className="col-md-10 px-3 ">
              <div className="card w-100 border border-0">
                <img src={auto} alt="" className='card-img w-75 m-auto' />
              </div>
              <div className="card-body ">
                <h5 className="card-title text-center">SOAT Vehículo</h5>
                <p className="card-text text-center" style={{fontSize:'14px'}}>Nos enorgullece ofrecer un asesoramiento personalizado y continuo a nuestros clientes, respaldándolos en cada paso de su camino.</p>
              </div>
            </div>
          </div>
        </div>      
      </div>
      
    </div>
  )
}


{/* <div className="col-12 col-md-6 ps-5">
<div className="mb-3 border border-0" >
  <div className="row g-0 ">
    <div className="col-md-2 border border-3 d-flex justify-content-center d-flex align-items-center border   border-0 ">
      <div className='bg-success rounded-circle d-flex justify-content-center d-flex align-items-center'style= {{width:'70px', height:'70px'}}>
        <i className=" col-2 bi bi-truck text-dark fs-2 border border-0 d-flex justify-content-center" ></i>
      </div>
    </div>
    <div className="col-md-10">
      <div className="card-body">
        <h5 className="card-title">Coste Cero</h5>
        <p className="card-text" style={{fontSize:'14px'}}>Nuestra gestión de intermediación  NO GENERA ningún  costo para nuestros clientes.</p>
      </div>
    </div>
  </div>
</div>      
</div> */}