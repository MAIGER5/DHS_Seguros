import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

export const CardCentralX2 = () => {
  return (
    <div className="container row m-auto   px-5 mt-5 mt-md-0">
      <div className="col-md-6 mb-3 mb-sm-0 border border-0 bg-white shadow-lg">
        <div className="card-body ps-2 mt-4 py-3">
          <div className='d-lg-flex  col-lg-12   col-lx-12 align-items-start'>
            <i className=" col-2 bi bi-bag-heart text-black fs-2 border border-0 d-flex justify-content-center " ></i>
            <div className='col-10'>
              <h5 className="card-title border border-0">Intermediación en Riesgos Laborales</h5>
              <p className="card-text mt-3" style={{fontSize:'14px'}}>Optimiza tu entorno laboral con nuestra intermediación de riesgos laborales. Minimizamos los riesgos en tu empresa, asegurando la salud y bienestar de tus colaboradores.</p>
              <Link to={'/Intermediation'} className="btn bg-light text-white">Crece con Nosotros</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-3 mb-sm-0 border border-0 bg-secondary shadow-lg">
        <div className="card-body ps-2 mt-4 py-3">
        <div className='d-lg-flex  col-lg-12 d--lx-flex  col-lx-12 align-items-start'>
            <i className=" col-2 bi bi-truck text-white fs-2 border border-0 d-flex justify-content-center " ></i>
            <div className='col-10'>
              <h5 className="card-title text-white">Seguros Generales </h5>
              <p className="card-text text-white mt-3" style={{fontSize:'14px'}}>Con nuestros seguros generales, garantizamos protección integral para todo lo que valoras. Desde tu hogar hasta tus bienes más preciados, cubrimos cada aspecto importante de tu vida. .</p>
              <a href="#productosGenerales" style={{scrollBehavior: 'smooth'}} className="btn bg-light text-white ">Encuentra el Tuyo</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
