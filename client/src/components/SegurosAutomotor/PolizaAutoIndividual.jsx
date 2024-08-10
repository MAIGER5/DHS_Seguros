import automovil from '../../../images/automovil.jpg'
import taxi from '../../../images/taxi.jpg'
import pesado from '../../../images/pesado1.jpg'
import { Link } from 'react-router-dom'

export const PolizaAutoIndividual = () => {
  return (
    <div className='container position-relative pt-5 px-0'>
      <div className="card rounded- bg-dark border border-0 ps-3 py-2" >
        <div className="row g-0 align-middle ">
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title fs-2">Pólizas Individuales Todo Riesgo </h5>
              <p className="card-text">Descubre y explora nuestro abanico de seguros generales, diseñados para brindarte tranquilidad y protección en cada faceta de tu vida personal y laboral.</p>
              {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
            </div>
          </div>
          <Link to={'/Contact'} className="col-md-3 border border-0 d-flex justify-content-center align-items-center text-decoration-none">
            <a href="#" className="btn btn-success mt-2 z-1" >Contactanos</a>
          </Link>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-lg-3 g-5 pt-5">
        <div className="col pb-5 pb-md-0">
          <div className="card">
            <img src={automovil} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Vehículos & Camperos</h5>
              <p className="card-text">Protege tu inversión y tranquilidad en la carretera con nuestro seguro para vehículos. Con coberturas a medida, estamos aquí para cuidar lo que más valoras.</p>
            </div>
          </div>
        </div>
        <div className="col pb-5 pb-md-0">
          <div className="card">
            <img src={pesado} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Vehículos Pesados</h5>
              <p className="card-text">No dejes que los imprevistos en la carretera arruinen tu día. Nuestro seguros te brinda la confianza y la protección que necesitas.  y conduce con tranquilidad.</p>
            </div>
          </div>
        </div>
        <div className="col pb-5 pb-md-0">
          <div className="card">
            <img src={taxi} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Transporte Público</h5>
              <p className="card-text" style={{}}>Con nuestro seguros, disfrutaras de la libertad de la carretera sabiendo que estás respaldado en caso de accidentes viales. Con nosotros, tu seguridad es primero.</p>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}
