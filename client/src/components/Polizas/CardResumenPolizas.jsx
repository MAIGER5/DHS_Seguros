import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './Polizas.module.css';

export const CardResumenPolizas = () => {
  return (
    // TARJETA ARRIBA
    <div id='productosGenerales' className='container position-relative'>
      <div className="card mb-3 rounded- bg-dark border border-0 ps-3" >
        <div className="row g-0 align-middle ">
          <div className="col-md-9">
            <div className="card-body py-4">
              <h5 className="card-title fs-2">Pólizas </h5>
              <p className="card-text">Descubre y explora nuestro abanico de Pólizas , diseñadas para brindarle tranquilidad y protección a tu Proyecto.</p>
              {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
            </div>
          </div>
          <div className="col-md-3 border border-0 d-flex justify-content-center align-items-center mb-4 mb-md-0">
          <a href="#" className="btn btn-success mt-2 z-1" role="button" data-bs-toggle="button">Contactanos</a>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-2 g-5 pb-5">
        <div className={`col text-decoration-none`}>
          <div className={`card h-100 rounded-0 bg-success border border-0 shadow`} id={styles.efectCardProductsGen}>
            <i className="bi bi-activity card-img-top fs-1 text-warning px-4 pt-4"></i>
            <div className="card-body text-white px-4">
              <h5 className="card-title"> Seguro de Responsabilidad Civil en construcción</h5>
              <p className="card-text">Brindamos protección a terceros en caso de daño involuntario.</p>
              <ul className="list-group-numbered">
              <li className="list-group-item">Ingenieros</li>
                <li className="list-group-item">Promotores</li>
                <li className="list-group-item">Contructores</li>
                <li className="list-group-item">otros</li>
              </ul>
            </div>
            {/* <div className="card-footer">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </div> */}
          </div>
        </div>
        <div  className="col text-decoration-none">
        <div className={`card h-100 rounded-0 border border-0 shadow z-1 ${styles.efectCardProductsGen}`}>
            <i className="bi bi-hospital card-img-top fs-1 text-warning px-4 pt-4"></i>
            <div className="card-body  px-4 ">
              <h5 className="card-title">Seguro Todo Riesgo Construcción TRC</h5>
              <p className="card-text">Nuestro seguro esta enfocado a cubrir daños materiales en todo tipo de obras y proyectos de construcción y montajes industriales, por los cuales el asegurado sea responsable o tenga la obligación de asegurar. <br /> <br />Cubre costes propios de la obra, fallos fallos propios o impredecibles, como incendios, robos, viendo, pedrisco, heladas, etc</p>

            </div>
            {/* <div className="card-footer">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </div> */}
          </div>
        </div>
        <div className="col text-decoration-none">
        <div className={`card h-100 rounded-0 border border-0 shadow z-1 ${styles.efectCardProductsGen}`}>
            <i className="bi bi-house-gear-fill card-img-top fs-1 text-warning px-4 pt-4"></i>
            <div className="card-body  px-4 ">
              <h5 className="card-title"> Seguro decenal</h5>
              <p className="card-text">¡Proteja su inversión y brinde tranquilidad a sus clientes con nuestro excepcional seguro decenal para constructores y promotores de viviendas! En el dinámico mundo de la construcción, donde la excelencia y la seguridad son fundamentales, nuestra póliza ofrece una cobertura completa durante diez años, respaldando tanto a las personas jurídicas como a las físicas que dan vida a proyectos inmobiliarios.</p>

            </div>
            {/* <div className="card-footer">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </div> */}
          </div>
        </div>
        <div className={`col text-decoration-none`}>
          <div className={`card h-100 rounded-0 bg-success border border-0 shadow`} id={styles.efectCardProductsGen}>
            <i className="bi bi-buildings-fill card-img-top fs-1 text-warning px-4 pt-4"></i>
            <div className="card-body text-white px-4">
              <h5 className="card-title">Seguro de edificación y obra civil</h5>
              <p className="card-text">¡Asegure la solidez de sus proyectos de obra civil con nuestro incomparable seguro de edificación y construcción! En el apasionante mundo de la construcción civil, donde cada proyecto es único y las variables son innumerables, nuestra póliza especializada ofrece una protección integral contra los daños imprevisibles que podrían surgir durante el proceso constructivo.</p>

            </div>
            {/* <div className="card-footer">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </div> */}
          </div>
        </div>
        <div className={`col text-decoration-none`}>
          <div className={`card h-100 rounded-0 bg-success border border-0 shadow`} id={styles.efectCardProductsGen}>
            <i className="bi bi-building-slash card-img-top fs-1 text-warning px-4 pt-4"></i>
            <div className="card-body text-white px-4">
              <h5 className="card-title">Seguro de accidentes de convenio para construcción</h5>
              <p className="card-text">¡Priorice la seguridad de sus trabajadores con nuestro sólido seguro de accidentes, en pleno cumplimiento de los convenios sectoriales de la construcción! En el dinámico ámbito de la construcción, donde la protección de los colaboradores es esencial, nuestra póliza especializada garantiza el respaldo necesario para cumplir con las exigencias de los convenios sectoriales.</p>

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
