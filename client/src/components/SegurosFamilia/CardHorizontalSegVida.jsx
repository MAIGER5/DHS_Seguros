import segVida from '../../../images/segVida.jpg'

export const CardHorizontalSegVida = () => {
  return (
    <div className="container card-group g-5 d-block d-md-flex border border-0">
      <div className="card border border-1 ">
        <div className="card-body border border-0">
          <h5 className="card-title fs-4">SEGURO DE VIDA</h5>
          <h5 className="card-title fs-6 my-4">Te Protegemos de:</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="btn btn-secondary mt-5 w-lg-75 text-dark fw-medium">¡Cotiza Ahora!</p>
        </div>
      </div>
      <div className="card border border-0 px-0 px-md-5">
        <img src={segVida} className="card-img-top" alt="..." />
      </div>
      <div className="card border border-0 ">
        <div className="card-body border border-1">
          <h5 className="card-title fs-4">SEGURO DE VIVIENDA</h5>
          <h5 className="card-title fs-6 my-4">Te Protegemos de:</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="btn btn-warning mt-5  w-lg-75 text-dark fw-medium">¡Cotiza Ahora!</p>
        </div>
      </div>
    </div>  
  )
}
