import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './SegurosFamilia.module.css';
import { Link } from 'react-router-dom';

export const CardCaracteristic = () => {
  return (
    <div id='productosGenerales' className='container position-relative'>
      <div className={`card mb-3 rounded-0 border border-0 ps-3 ${styles.gradiantTitle}`} >
        <div className="row g-0 align-middle ">
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title fs-3">Qué Protección brindan nuestros seguros? </h5>
              <p className="card-text d-none d-md-block">Descubre y conoce nuestros servicos de protección Familiar.</p>
              {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
            </div>
          </div>
          <Link to={'/Contact'} className="col-md-3 border border-0 d-flex justify-content-center align-items-center text-decoration-none">
            <a href="#" className="btn btn-success mt-2 z-1 d-none d-md-block" >Contactanos</a>
          </Link>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-2 g-5 pb-3 border-sm-2 px-4">

        <div className={`card h-100 rounded-0 border border-0 shadow z-1  ${styles.efectCardProductsGen}`}>
          <i className="bi bi-lungs-fill card-img-top fs-1 text-success px-4 pt-4"></i>
          <div className="card-body  ">
            <h5 className="card-title">Segruo de Vida</h5>
            {/* <p className="card-text">Resguarda tu presente y futuro con nuestras pólizas integrales. Nuestro seguro de vida garantiza la protecciónfinanciera de tus seres queridos, mientras que el seguro de vivienda vela por la seguridad y bienestar de tu hogar. ¡Invierte en tranquilidad yprotege lo que más valoras en la vida!.</p> */}
            <ul className="list-group">
              <li className="list-group-item border-0">Fallecimiento</li>
              <li className="list-group-item border-0">Gastos funerarios</li>
              <li className="list-group-item border-0">Enfermedad terminal</li>
              <li className="list-group-item border-0">Invalidez total</li>
              <li className="list-group-item border-0">Indemnización escolar</li>
            </ul>
          </div>
        </div>
        <div className={`card h-100 rounded-0 border border-0 shadow z-1  ${styles.efectCardProductsGen}`}>
            <i className="bi bi-house-heart card-img-top fs-1 text-warning px-4 pt-4"></i>
            <div className="card-body  ">
              <h5 className="card-title">Seguros Hogar</h5>
              {/* <p className="card-text">Resguarda tu presente y futuro con nuestras pólizas integrales. Nuestro seguro de vida garantiza la protección financiera de tus seres queridos, mientras que el seguro de vivienda vela por la seguridad y bienestar de tu hogar. ¡Invierte en tranquilidad y protege lo que más valoras en la vida!.</p> */}
              <ul className="list-group">
                <li className="list-group-item border-0">Desastres naturales</li>
                <li className="list-group-item border-0">Robo de objetos regulares y de alto valor</li>
                <li className="list-group-item border-0">Daños accidentales</li>
                <li className="list-group-item border-0">Habitantes</li>
                <li className="list-group-item border-0">Mascotas</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}
