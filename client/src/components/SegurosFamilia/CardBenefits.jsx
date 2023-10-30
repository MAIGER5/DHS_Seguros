import styles from './SegurosFamilia.module.css';

export const CardBenefits = () => {
  return (
    <div className='container'>

      <div className={`card mb-3 rounded-0 border border-0 ps-3 ${styles.gradiantTitle}`} >
        <div className="row g-0 align-middle ">
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title fs-3">Qué Beneficios brindan nuestros seguros? </h5>
              <p className="card-text d-none d-md-block">Descubre y conoce nuestros servicos de protección Familiar.</p>
              {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
            </div>
          </div>
          <div className="col-md-3 border border-0 d-flex justify-content-center align-items-center">
          <a href="#" className="btn btn-success mt-2 z-1 d-none d-md-block" role="button" data-bs-toggle="button">Contactanos</a>
          </div>
        </div>
      </div>

      <div className="row ">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card border rounded-0 mb-3" >
            <div className="card-header">Beneficios</div>
            <div className="card-body">
              <h5 className="card-title">Seguro Vida</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>    
        </div>
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card border rounded-0 mb-3" >
            <div className="card-header">Beneficios</div>
            <div className="card-body">
              <h5 className="card-title">Seguro Vivienda</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>    
        </div>
      </div>
    </div>
  )
}
