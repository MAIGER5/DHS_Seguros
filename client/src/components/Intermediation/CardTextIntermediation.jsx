import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './intermediation.module.css'


export const CardTextIntermediation = () => {
  return (
    <div className="container row py-5">
      <div className="col-12 col-md-6 pe-md-5">
        <div className="card-body">
          <h1 className="card title fw-semibold m-0 border border-0">Servicio de</h1>
          <h1 className="card title fw-semibold border border-0 text-success">Intermediación ARL</h1>
          <div className="card-text py-2">Nos convertimos en sus aliados estratégicos para la intermediación de sus riesgos laborales. Generamos valor para su empresa a través de auditorías regulares y la comunicación abierta y constante entre la Administradora de Riesgos Laborales (ARL) y la empresa con el fin de abordar de manera oportuna los requerimientos, solicitudes y posibles inconvenientes.
          </div>
          <a href="#" className="btn btn-success mt-2" role="button" data-bs-toggle="button">Contactanos</a>
        </div>
      </div>

{/* /*********ESTA ES LA OTRA COLUMNA *** */ }
      <div className="col-12 col-md-6 ps-md-5 position-relative pt-5 pt-md-0">
        <div className={`h-75 border border-1 border-warning position-absolute ${styles.CardbolitasHorizontales}`} ></div>
        <div className="mb-3 border border-0 pb-3" >
          <div className="row g-0 ">
            <div className="col-md-2 border border-3 d-flex justify-content-center d-flex align-items-center border   border-0 ">
              <div className='bg-success rounded-circle d-flex justify-content-center d-flex align-items-center'style= {{width:'50px', height:'50px'}}>
                <i className=" col-2 bi bi-piggy-bank text-dark fs-4 border border-0 d-flex justify-content-center" ></i>
              </div>
            </div>
            <div className="col-md-10 px-3">
              <div className="card-body">
                <h5 className="card-title">Coste Cero</h5>
                <p className="card-text" style={{fontSize:'14px'}}>Nuestra gestión de intermediación  NO GENERA ningún  costo para nuestros clientes.</p>
              </div>
            </div>
          </div>
        </div>      
        <div className="mb-3 border border-0 pb-3" >
          <div className="row g-0 ">
            <div className="col-md-2 border border-3 d-flex justify-content-center d-flex align-items-center border   border-0 ">
              <div className='bg-success rounded-circle d-flex justify-content-center d-flex align-items-center'style= {{width:'50px', height:'50px'}}>
                <i className=" col-2 bi bi-people text-dark fs-4 border border-0 d-flex justify-content-center" ></i>
              </div>
            </div>
            <div className="col-md-10 px-3">
              <div className="card-body">
                <h5 className="card-title">Asesoramiento Permanente</h5>
                <p className="card-text" style={{fontSize:'14px'}}>Nos enorgullece ofrecer un asesoramiento personalizado y continuo a nuestros clientes, respaldándolos en cada paso de su camino.</p>
              </div>
            </div>
          </div>
        </div>      
        <div className="mb-3 border border-0 pb-3" >
          <div className="row g-0 ">
            <div className="col-md-2 border border-3 d-flex justify-content-center d-flex align-items-center border   border-0 ">
              <div className='bg-success rounded-circle d-flex justify-content-center d-flex align-items-center'style= {{width:'50px', height:'50px'}}>
                <i className=" col-2 bi bi-clipboard2-pulse text-dark fs-4 border border-0 d-flex justify-content-center" ></i>
              </div>
            </div>
            <div className="col-md-10 px-3">
              <div className="card-body">
                <h5 className="card-title">Gestión Integral</h5>
                <p className="card-text" style={{fontSize:'14px'}}>Implementamos una gestión integral destinada a reducir al máximo sus riesgos.</p>
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