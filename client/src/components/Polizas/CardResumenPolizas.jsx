import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './Polizas.module.css';

export const CardResumenPolizas = () => {
  return (
    // TARJETA ARRIBA
    <div id='productosGenerales' className='container position-relative'>
      <div className="card mb-3 rounded- bg-dark border border-0 ps-3" >
        <div className="row g-0 align-middle ">
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title fs-2">Pólizas </h5>
              <p className="card-text">Descubre y explora nuestro abanico de Pólizas , diseñadas para brindarle tranquilidad y protección a tu Negocio.</p>
              {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
            </div>
          </div>
          <div className="col-md-3 border border-0 d-flex justify-content-center align-items-center">
          <a href="#" className="btn btn-success mt-2 z-1" role="button" data-bs-toggle="button">Contactanos</a>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-2 g-5 pb-5">
        <div className={`col text-decoration-none`}>
          <div className={`card h-100 rounded-0 bg-success border border-0 shadow`} id={styles.efectCardProductsGen}>
            <i className="bi bi-car-front-fill card-img-top fs-1 text-warning px-4 pt-4"></i>
            <div className="card-body text-white px-4">
              <h5 className="card-title">Póliza Todo Riesgo Construcción</h5>
              <p className="card-text">Brindamos protección financiera ante posibles daños, accidentes o robos relacionados con vehículos y motociclets, asegurando la tranquilidad y seguridad del propietario y terceros involucrados.</p>
              <ul className="list-group-numbered">
              <li className="list-group-item">Seguros para Automoviles</li>
                <li className="list-group-item">Seguros para Motos</li>
                <li className="list-group-item">SOAT</li>
              </ul>
            </div>
            {/* <div className="card-footer">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </div> */}
          </div>
        </div>
        <div  className="col text-decoration-none">
        <div className={`card h-100 rounded-0 border border-0 shadow z-1 ${styles.efectCardProductsGen}`}>
            <i className="bi bi-house-heart card-img-top fs-1 text-warning px-4 pt-4"></i>
            <div className="card-body  px-4 ">
              <h5 className="card-title">Póliza de Resposabilidad Civil</h5>
              <p className="card-text">Resguarda tu presente y futuro con nuestras pólizas integrales. Nuestro seguro de vida garantiza la protección financiera de tus seres queridos, mientras que el seguro de vivienda vela por la seguridad y bienestar de tu hogar. ¡Invierte en tranquilidad y protege lo que más valoras en la vida!.</p>
              <ul className="list-group-numbered">
                <li className="list-group-item">Seguros de Vida</li>
                <li className="list-group-item">Seguros de Vivienda</li>
              </ul>
            </div>
            {/* <div className="card-footer">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </div> */}
          </div>
        </div>
        <div className="col text-decoration-none">
        <div className={`card h-100 rounded-0 border border-0 shadow z-1 ${styles.efectCardProductsGen}`}>
            <i className="bi bi-house-heart card-img-top fs-1 text-warning px-4 pt-4"></i>
            <div className="card-body  px-4 ">
              <h5 className="card-title">Póliza Multiriesgo</h5>
              <p className="card-text">Resguarda tu presente y futuro con nuestras pólizas integrales. Nuestro seguro de vida garantiza la protección financiera de tus seres queridos, mientras que el seguro de vivienda vela por la seguridad y bienestar de tu hogar. ¡Invierte en tranquilidad y protege lo que más valoras en la vida!.</p>
              <ul className="list-group-numbered">
                <li className="list-group-item">Seguros de Vida</li>
                <li className="list-group-item">Seguros de Vivienda</li>
              </ul>
            </div>
            {/* <div className="card-footer">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </div> */}
          </div>
        </div>
        <div className={`col text-decoration-none`}>
          <div className={`card h-100 rounded-0 bg-success border border-0 shadow`} id={styles.efectCardProductsGen}>
            <i className="bi bi-car-front-fill card-img-top fs-1 text-warning px-4 pt-4"></i>
            <div className="card-body text-white px-4">
              <h5 className="card-title">Póliza de Cumplimiento</h5>
              <p className="card-text">Brindamos protección financiera ante posibles daños, accidentes o robos relacionados con vehículos y motociclets, asegurando la tranquilidad y seguridad del propietario y terceros involucrados.</p>
              <ul className="list-group-numbered">
              <li className="list-group-item">Seguros para Automoviles</li>
                <li className="list-group-item">Seguros para Motos</li>
                <li className="list-group-item">SOAT</li>
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
