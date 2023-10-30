

export const CardImgPortada = () => {
  return (
    <div className='container d-flex justify-content-center d-felx align-items-center z-3 border border-0 mt-5 pt-5 pt-md-0' >
      <div className="row justify-content-md-center position-relative"> 
        <div className="col border border-0 overflow-hidden " >
          <div className="card h-100 rounded-0 border border-0 bg-transparent ">
            <div className="card-body  px-4 ">
              <p className="card-text text-white text-center mt-0 mt-md-5 py-2" style={{textWrap:'balance', fontSize:'11px', letterSpacing:'2px'}}>RESGUARDA TU PRESENTE Y FUTURO, CON NUESTRAS POLIZAS INTEGRALES.</p>
              <h1 className="card-title text-dark fw-bold pb-4 text-center" style={{letterSpacing:'15px', transform:'scale(1, 1.2)'}}>SEGUROS FAMILIA</h1>
              <h1 className="card-title d-none d-md-block fs-6 text-dark fw-semibold pb-4 text-center opacity-50" style={{letterSpacing:'7px', transform:'scale(1, 1.3)'}}>CONOCE NUESTRAS SOLUCIONES</h1>
              {/* <h1 className="card-title text-dark fw-bold">Optimiza Tú <br /> Entonro Laboral<br /><a className='text-decoration-none text-warning' href="">con Nosotros</a></h1> */}
              <br />
              <div className="col border border-0 d-flex  align-items-center justify-content-center">
                <a href="#" className="btn btn-warning mt-2 text-dark fw-semibold px-4 " role="button" data-bs-toggle="button">Contactanos</a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
