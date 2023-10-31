import 'bootstrap-icons/font/bootstrap-icons.css';
import meeting from '../../../images/meeting.jpeg'
// import styles from './intermediation.module.css'


export const CardPoliza2 = () => {
  return (
    <div className="row py-3 py-md-5 px-2">
      <div className="col-12 col-md-6 pe-md-5 d-flex pb-sm-5 pb-md-0" style={{alignItems:'center'}}>
        <div className="card-body">
          <h1 className="card title text-success fw-bold m-0 border border-0">POLIZA</h1>
          <h1 className="card title fs-2 fw-semibold border border-0 ">Todo Riesgo Construcción</h1>
          <div className="card-text py-2">Nos convertimos en sus aliados estratégicos para la intermediación de sus riesgos laborales. Generamos valor para su empresa a través de auditorías regulares y la comunicación abierta y constante entre la Administradora de Riesgos Laborales (ARL) y la empresa con el fin de abordar de manera oportuna los requerimientos, solicitudes y posibles inconvenientes.
          </div>
          <a href="#" className="btn btn-success mt-2" role="button" data-bs-toggle="button">Contactanos</a>
        </div>
      </div>

{/* /*********ESTA ES LA OTRA COLUMNA *** */ }
      <div className="col-12 col-md-6 ps-md-5 mt-5 t-md-0 position-relative border border-0 rounded-3 z-1">
        <div className="mb-3  pb-3" >
          <div className="row g-0 ">
            <div className="col-md-12 px-3 position-relative border border-0 z-2">
              <div className='' style={{overflow:'hidden', height:'400px', borderRadius:'25px', zIndex:2}}>
                <img src={meeting} alt=""  style={{width:'100%', height:'100%', objectFit:'cover'}}/>
              </div>
            </div>
            <div className='border border-0 position-absolute bg-success ' style={{top:'45px', left:'45px', width:'75%', height:'86%', borderRadius:'25px', zIndex:1}}>
            </div>

          </div>
        </div>      
      </div>
      
    </div>
  )
}

