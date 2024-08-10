import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

export const CardBody2Products = () => {

  const signo = ">";


  return (
    // TARJETA ARRIBA
    <div id='productosGenerales' className={`container position-relative mb-5 ${styles.containCardBody2Products}`}>
      <div className="card mb-5 rounded-0  border border-0 " >
        <div className="row g-0 ">
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title fs-2">Descubre Nuestros <a className="text-warning text-decoration-none" href="">Productos Generales</a> </h5>
              <p className="card-text">Explora nuestro abanico de seguros generales, diseñados para brindarte tranquilidad y protección en cada faceta de tu vida.</p>
              {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
            </div>
          </div>
          {/* <Link to={'/Contact'} className="col-md-3 border border-0 d-flex justify-content-center align-items-center text-decoration-none z-2">
            <p  className="btn btn-success" role="button" >Contactanos</p>
          </Link> */}
        </div>
      </div>

      <div className="row row-cols-1 row-cols-lg-3 g-4 p-3  rounded-2 bg-secondary pt-0 pb-4">
        <Link to={'/SegAutomotor'} className={`col text-decoration-none rounded-2 `}>
          <div className={`card h-100 rounded-0 border border-0 shadow rounded-3 ${styles.efectCardProductsGen}`} >
            <i className="bi bi-car-front-fill card-img-top fs-1 text-warning px-4 pt-4"></i>
            <div className="card-body  px-4">
              <h5 className="card-title">Seguros Autos</h5>
              <p className="card-text">Brindamos protección financiera ante posibles daños, accidentes o robos relacionados con vehículos y motociclets, asegurando la tranquilidad y seguridad del propietario y terceros involucrados en los siniestros viales.</p>
              <ul className={styles.listCard}>
              <li className="">Automoviles</li>
              <li className="">Maquinaria Amarilla</li>
              <li className="">Vehículos Pesados</li>
                <li className="">Motos</li>
                <li className="">Responsabilidad 
                  Civil</li>
                <li className="">Bicicleta y Patineta</li>
                <br />
              </ul>
            <p className='btn text-warning fw-semibold'>Más información {signo} </p>
            </div>
          </div>
        </Link>
        <Link to={'/Polizas'} className="col text-decoration-none">
        <div className={`card h-100 rounded-0 border border-0 shadow rounded-3 ${styles.efectCardProductsGen}`}>
            <i className="bi bi-shield-check card-img-top fs-1 text-warning px-4 pt-4"></i>
            <div className="card-body  px-4">
              <h5 className="card-title">Pólizas</h5>
              <p className="card-text">¡Asegura tu tranquilidad y protege lo que más valoras con nuestra póliza de seguros! Ofrecemos cobertura completa ante imprevistos, brindándote paz mental y seguridad financiera. ¡No dejes al azar tu futuro, invierte en tu tranquilidad hoy mismo.</p>
              <ul className={styles.listCard}>
                <li className="">Multiriesgo</li>
                <li className="">Responsabilidad Cívil</li>
                <li className="">Cumplimiento</li>
                <li className="">Pymes</li>
                <li className="">Arriendo</li>
                <li className="">Zonas Comunes o Coopropiedades</li>
              </ul>
              <p className='btn text-warning fw-semibold'>Más información {signo} </p>
            </div>
            {/* <div className="card-footer">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </div> */}
          </div>
        </Link>
        <Link to={'/SegFamilia'} className="col text-decoration-none">
        <div className={`card h-100 rounded-0 border border-0 shadow z-1 rounded-3 ${styles.efectCardProductsGen}`}>
            <i className="bi bi-house-heart card-img-top fs-1 text-warning px-4 pt-4"></i>
            <div className="card-body  px-4 ">
              <h5 className="card-title">Seguros Hogar</h5>
              <p className="card-text">Resguarda tu presente y futuro con nuestras pólizas integrales. Nuestro seguro de vida garantiza la protección financiera de tus seres queridos, mientras que el seguro de vivienda vela por la seguridad y bienestar de tu hogar. ¡Invierte en tranquilidad y protege lo que más valoras en la vida!.</p>
              <ul className={styles.listCard}>
                <li className="">Seguros de Vida</li>
                <li className="">Accidentes personales</li>
                <li className="">Exequias</li>
                <li className="">Seguros para Mascotas</li>
                <li className="">Seguros de Vivienda</li>
              </ul>
              <p className='btn text-warning fw-semibold'>Más información {signo} </p>
            </div>
          </div>
        </Link>
      </div>
      {/* <div className='position-absolute bg-warning d-none d-lg-block d-xl-block' style={{ top:'250px', right:'30px', width:'40px', height:'40px', transform: 'skewY(20deg)'}}></div>
      <div className='position-absolute bg-white d-none d-lg-block d-xl-block' style={{ top:'-80px', right:'-20px', width:'200px', height:'290px', transform: 'skewY(30deg)', clipPath: 'polygon(0% 45%, 100% 0%, 100% 100%, 0% 100%)'}}></div>
      <div className='position-absolute bg-secondary d-none d-lg-block d-xl-block' style={{ top:'280px', right:'-60px', width:'40px', height:'70px', transform: 'skewY(20deg)'}}></div>
      <div className='position-absolute bg-warning d-none d-lg-block d-xl-block' style={{width:'40px', height:'40px', top:'360px', right:'-60px', clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 100%)'}}></div>
      <div className='position-absolute bg-primary d-none d-lg-block d-xl-block' style={{width:'40px', height:'40px', top:'400px', right:'-60px', clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 0%)'}}></div> */}


    </div>
  )
}
