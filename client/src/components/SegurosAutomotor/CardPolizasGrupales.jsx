import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
// import styles from './Home.module.css';

export const CardPolizasGrupales = () => {
  return (
    // TARJETA ARRIBA
    <div className='container position-relative pt-5 '>
      <div className="card mb-3 rounded- bg-dark border border-0 ps-3" >
        <div className="row g-0 align-middle py-4 py-md-0 ">
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title fs-2 ">Polizas Colectivas </h5>
              <p className="card-text"></p>
              {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
            </div>
          </div>
          <Link to={'/Contact'} className="col-md-3 border border-0 d-flex justify-content-center align-items-center text-decoration-none">
            <a href="#" className="btn btn-success mt-2 z-1">Contactanos</a>
          </Link>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-2 g-4 pb-5">
        <div className={`col text-decoration-none`}>
          <div className={`card h-100 rounded-0 bg-white border border-0 p-4 `} >
            <i className="bi bi-car-front-fill card-img-top bg-white text-success text-center align-middle px-4 pt-1 border border-1 border-success m-auto rounded-circle" style={{fontSize:'60px', width:'110px', height:'110px'}}></i>
            <div className="card-body  px-4">
              <h5 className="card-title text-center pb-3">Colectivas Vehículos Livianos</h5>
              <p className="card-text">Ofrecemos protección y cobertura global a todos los vehiculos asociados o vinculados con su empresa. Los siguientes, son parametros de la póliza colectiva:</p>
              <ul className="list-group-numbered">
              <li className="list-group-item">Son Grupales</li>
                <li className="list-group-item">El valor se fija durante la negociación</li>
                <li className="list-group-item">Es renovable</li>
                <li className="list-group-item">Se establece vinculo directo con la empresa</li>
              </ul>
            </div>
            {/* <div className="card-footer">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </div> */}
          </div>
        </div>
        <div className={`col text-decoration-none`}>
          <div className={`card h-100 rounded-0 bg-white border border-0 p-4 `} >
            <i className="bi bi-truck-front card-img-top bg-white text-warning text-center align-middle px-4 pt-1 border border-1 border-warning m-auto rounded-circle" style={{fontSize:'60px', width:'110px', height:'110px'}}></i>
            <div className="card-body  px-4">
              <h5 className="card-title text-center pb-3">Colectivas Vehículos Pesados</h5>
              <p className="card-text">Esta póliza  cuenta con los mismos parametros de la póliza colectiva de vehículos livianos, y adiconal a estos, incluye la proteccion inmediata de la carga o los bienes durante su traslado desde su origen y su destino.</p>
              <ul className="list-group-numbered">
                <li className="list-group-item">Robo total o parcial</li>
                <li className="list-group-item">Rapiña o vandalismo</li>
                <li className="list-group-item">Daños ocasionados durante las maniobras de carga y descarga, fallas en el sistema de refrigeración entre otros riesgos</li>
                <li className="list-group-item">Volcadura, etc.</li>
              </ul>
            </div>
            {/* <div className="card-footer">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </div> */}
          </div>
        </div>

      </div>
      {/* <div className='position-absolute bg-warning d-none d-lg-block d-xl-block' style={{ top:'250px', right:'30px', width:'40px', height:'40px', transform: 'skewY(20deg)'}}></div>
      <div className='position-absolute bg-white d-none d-lg-block d-xl-block' style={{ top:'-80px', right:'-20px', width:'200px', height:'290px', transform: 'skewY(30deg)', clipPath: 'polygon(0% 45%, 100% 0%, 100% 100%, 0% 100%)'}}></div>
      <div className='position-absolute bg-secondary d-none d-lg-block d-xl-block' style={{ top:'280px', right:'-60px', width:'40px', height:'70px', transform: 'skewY(20deg)'}}></div>
      <div className='position-absolute bg-warning d-none d-lg-block d-xl-block' style={{width:'40px', height:'40px', top:'360px', right:'-60px', clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 100%)'}}></div>
      <div className='position-absolute bg-primary d-none d-lg-block d-xl-block' style={{width:'40px', height:'40px', top:'400px', right:'-60px', clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 0%)'}}></div> */}


    </div>
  )
}
