import { Link } from 'react-router-dom'

export const CardImgPortada = () => {
  return (
    <div className='container d-flex justify-content-center d-felx align-items-center z-3' style={{marginTop:'150px'}}>
      <div className="row justify-content-md-center position-relative"> 
        <div className="col-sm-12  col-lg-10 border border-0 overflow-hidden " >
          <div className="card h-100 rounded-0 border border-0 bg-transparent ">
            <div className="card-body  px-4 ">
              <h1 className="card-title text-dark fw-bold pb-4"><a className='text-decoration-none text-warning' href="">"Protegemos</a> tu Camino, <br /> Cuidamos lo que Amas"<br /></h1>
              {/* <h1 className="card-title text-dark fw-bold">Optimiza Tú <br /> Entonro Laboral<br /><a className='text-decoration-none text-warning' href="">con Nosotros</a></h1> */}
              <p className="card-text text-white d-none d-sm-block " style={{textWrap:'balance'}}>Nuestra misión es garantizar que tu empresa sea un lugar seguro y saludable para tus colaboradores, promoviendo un ambiente de trabajo en el que todos puedan prosperar y alcanzar su máximo potencial.</p>
              <br />
              <div className="col-md-10 border border-0 d-flex  align-items-center">
                <Link to={'/Contact'} className='text-decoration-none'>
                  <a href="#" className="btn btn-dark mt-2 text-success fw-bold px-4 me-5" >Contactanos</a>
                </Link>
                <a href="#" className="btn btn-dark mt-2 text-success fw-bold px-5 d-none d-md-block" role="button" data-bs-toggle="button">+57 3012569874</a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
