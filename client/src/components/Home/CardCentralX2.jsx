import 'bootstrap-icons/font/bootstrap-icons.css';

export const CardCentralX2 = () => {
  return (
    <div className="container row position-absolute m-0 px-5 " style={{top:'780px', left:'50%', transform:'translate(-50%, -50%'}}>
      <div className="col-sm-6 mb-3 mb-sm-0 border border-0 bg-white shadow-lg">
        <div className="card-body ps-2 mt-4 py-3">
          <div className='d-lg-flex  col-lg-12 d--lx-flex  col-lx-12 align-items-start'>
            <i className=" col-2 bi bi-bag-heart text-black fs-2 border border-0 d-flex justify-content-center " ></i>
            <div className='col-10'>
              <h5 className="card-title border border-0">Intermediación en Riesgos Laborales</h5>
              <p className="card-text mt-3">Optimiza tu entorno laboral con nuestra intermediación de riesgos laborales. Minimizamos los riesgos en tu empresa, asegurando la salud y bienestar de tus colaboradores.</p>
              <a href="#" className="btn bg-light text-white">Crece con Nosotros</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 mb-3 mb-sm-0 border border-0 bg-secondary shadow-lg">
        <div className="card-body ps-2 mt-4 py-3">
        <div className='d-lg-flex  col-lg-12 d--lx-flex  col-lx-12 align-items-start'>
            <i className=" col-2 bi bi-truck text-white fs-2 border border-0 d-flex justify-content-center " ></i>
            <div className='col-10'>
              <h5 className="card-title text-white">Seguros Generales </h5>
              <p className="card-text text-white mt-3">Con nuestros seguros generales, garantizamos protección integral para todo lo que valoras. Desde tu hogar hasta tus bienes más preciados, cubrimos cada aspecto importante de tu vida. .</p>
              <a href="#" className="btn bg-light text-white ">Contactanos</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
