import { Link } from 'react-router-dom'
import segVida from '../../../images/segVida.jpg'
import styles from './SegurosFamilia.module.css'

export const CardHorizontalSegVida = () => {
  return (
    <div className="container card-group g-5 d-block d-md-flex border border-0">
      <div className="card border border-1 ">
        <div className="card-body border border-0">
          <h5 className="card-title fs-4">SEGURO DE VIDA</h5>
          <h5 className="card-title fs-6 my-4">Protegemos tu familia de:</h5>
          <p className="card-text">Cualquier evento desafortunado que puedas tener.</p>
          <Link to={'/Contact'} className="btn btn-secondary mt-5 w-lg-75 text-dark fw-medium">¡Cotiza Ahora!</Link>
        </div>
      </div>
      <div className={`card border border-0 px-0 px-md-5 position-relative`}>
        <img src={segVida} className={`card-img-top`} alt="..." />
      </div>
      <div className="card border border-0 ">
        <div className="card-body border border-1">
          <h5 className="card-title fs-4">SEGURO DE VIVIENDA</h5>
          <h5 className="card-title fs-6 my-4">Te Protegemos de:</h5>
          <p className="card-text">Cualquier afectación e improvisto que pueda dañar tu vivienda.</p>
          <Link to={'/Contact'} className="btn btn-warning mt-5  w-lg-75 text-dark fw-medium">¡Cotiza Ahora!</Link>
        </div>
      </div>
    </div>  
  )
}
