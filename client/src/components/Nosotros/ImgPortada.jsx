import styles from './Nosotros.module.css';
import { Link } from 'react-router-dom'
import imgPortada from '../../../images/nosotros.jpeg'
import GRUPOPSO from '../../../images/GRUPOPSO.png'

export const ImgPortada = () => {
  return (
    <div className="card border border-0" >
      <div className="row g-0 ">
        <div className="col-12 col-md-6 overflow-hidden">
          <img src={imgPortada} alt="" style={{objectFit:'cover', objectPosition:'center', width:'100%', height:'100%'}}/>
        </div>
        <div className="col-12 col-md-6 bg-dark mt-xl-5 pt-5">
          <div className="card-body border border-0 text-center w-75 m-auto mt-md-4">
            <h1 className="card-title fs-2 fw-bold text-success ">Somos una Compañia </h1>
            <h1 className="card-title  fs-2 fw-bold text-success">Miembro del <a className='text-warning text-decoration-none' >GRUPO PSO </a></h1>
            <div className='col-2 over-flow-hidden m-auto mt-3'>
              <img src={GRUPOPSO} alt="" className='img-fluid'/>
            </div>
            <div className="card-text py-5">Generamos la mejor asesoría y respaldo a nuestros clientes, es así que por esta razón representamos a las mejores aseguradoras del país</div>
            <Link to={'/Contact'} className="row  border border-0 text-decoration-none ">
              <p className='col-8 col-lg-4 btn btn-success my-4 px-2 m-auto  '>Contactanos</p>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  )
}
