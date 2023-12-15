import 'bootstrap-icons/font/bootstrap-icons.css';

export const PolizaX3Absolute = () => {
  return (
    <div className='container position-relative  px-0'>
      {/* <div className="card rounded- bg-dark border border-0 ps-3 py-2" >
        <div className="row g-0 align-middle ">
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title fs-2">Polizas Individulaes Todo Riesgo </h5>
              <p className="card-text">Descubre y explora nuestro abanico de seguros generales, diseñados para brindarte tranquilidad y protección en cada faceta de tu vida.</p>
            </div>
          </div>
          <div className="col-md-3 border border-0 d-flex justify-content-center align-items-center">
          <a href="#" className="btn btn-success mt-2 z-1" role="button" data-bs-toggle="button">Contactanos</a>
          </div>
        </div>
      </div> */}

      <div className="container row row-cols-1 row-cols-md-3 pt-5">
        <div className="col pb-5 pb-md-0 ">
          <div className="card bg-warning border border-0 " style={{borderRadius:'35px 0px 35px 35px'}}>
            <i className="bi bi-arrows-fullscreen text-success   text-center fs-1"></i>
            <div className="card-body">
              <h5 className="card-title text-center text-dark" style={{textWrap:'balance'}}>Integrales</h5>
              <p className="card-text container text-dark">Nuestras polizas abarcan una amplia gama de riesgos, desde daños materiales hasta responsabilidades legales, proporcionando una cobertura completa para la construcción.</p>
            </div>
          </div>
        </div>
        <div className="col pb-5 pb-md-0 ">
          <div className="card bg-secondary border border-0 " style={{borderRadius:'30px'}}>
            <i className="bi bi-arrow-clockwise text-dark   text-center fs-1"></i>
            <div className="card-body">
              <h5 className="card-title text-center text-dark">Adaptable</h5>
              <p className="card-text container text-dark">Se adaptan a las necesidades específicas de cada proyecto, permitiendo ajustar las coberturas según el tipo y tamaño de la construcción, brindando flexibilidad.</p>
            </div>
          </div>
        </div>
        <div className="col pb-5 pb-md-0 ">
          <div className="card bg-secondary border border-0 " style={{borderRadius:'35px 35px 35px 0px'}}>
            <i className="bi bi-person-raised-hand text-dark   text-center fs-1"></i>
            <div className="card-body">
              <h5 className="card-title text-center text-dark">Proactivas</h5>
              <p className="card-text container text-dark">Ofrecemos una protección proactiva al anticiparnos a posibles riesgos, contribuyendo a la prevención de problemas durante el proceso constructivo .</p>
            </div>
          </div>
        </div>
        
        
      </div>  
    </div>
  )
}
