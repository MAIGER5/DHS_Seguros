import { Link } from 'react-router-dom'

export const CardImgPortada = () => {
  return (
    <div className='container d-flex justify-content-center d-felx align-items-center z-3 border border-0' style={{marginTop:'150px'}}>
      <div className="row justify-content-md-center position-relative"> 
        <div className="col border border-0 overflow-hidden " >
          <div className="card h-100 rounded-0 border border-0 bg-transparent ">
            <div className="card-body  px-4 ">
              <h1 className="card-title text-dark fw-bold pb-4 text-center"><a className='text-decoration-none text-warning' href="">"Construya</a>  con confianza, aseguramos su éxito"<br /></h1>
              {/* <h1 className="card-title text-dark fw-bold">Optimiza Tú <br /> Entonro Laboral<br /><a className='text-decoration-none text-warning' href="">con Nosotros</a></h1> */}
              <p className="card-text text-white d-none d-sm-block text-center " style={{textWrap:'balance'}}>Nuestras pólizas de construcción son el cimiento sólido que asegura su proyecto, protegiendo cada paso con coberturas diseñadas para anticipar los desafíos y garantizar su éxito.</p>
              <br />
              <div className="col border border-0 d-flex  align-items-center justify-content-center">
                <Link to={'/Contact'} className='text-decoration-none'>
                  <a href="#" className="btn btn-dark mt-2 text-success fw-bold px-4 me-5" >Contactanos</a>
                </Link>
                <a href="#" className="btn btn-outline-warning border border-3 mt-2 text-dark fw-bold px-5 d-none d-md-block" role="button" data-bs-toggle="button">+57 3016589785</a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
