
import img2 from '../../../images/git4.jpg'

export const InformacionContacto = () => {
  return (
    <div className='col-12 col-md-10 col-lg-4 m-auto py-5 border border-0 '>
      <div className="card h-100 rounded-0 border border-0   bg-dark">
        <div className='w-100 h-25 rounded-2'>
          <img src={img2} alt="" className='w-100 rounded-1' style={{opacity:'85%'}} />
        </div>
        {/* <i className="bi bi-shield-check card-img-top fs-1 text-success px-2 pt-4"></i> */}
        <div className="card-body  ">
          <h5 className="card-title text-success fs-2">Información de <br />Contacto</h5>
          <div className="card-body m-0 p-0 py-4 ">
            <div className="col-12 border border-0 d-flex justify-content-start align-items-center">
              <i className="bi bi-telephone col-2 border border-0 fs-4 text-success "></i>
              <a className="col-8 border border-0 text-black text-decoration-none" style={{fontSize:'14px'}}>+57 3016589785</a>
            </div>
            <div className="col-12 border border-0 d-flex justify-content-start align-items-center">
              <i className="bi bi-envelope-fill col-2 border border-0 fs-4 text-success "></i>
              <a className="col-8 border border-0 text-black text-decoration-none" style={{fontSize:'14px'}}>comercialdhs@grupospo.com.co</a>
            </div>
            <div className="col-12 border border-0 d-flex justify-content-start align-items-center">
              <i className="bi bi-geo-alt col-2 border border-0 fs-4 text-success "></i>
              <a className="col-8 border border-0 text-black text-decoration-none" style={{fontSize:'14px'}}>@dhssegurospso</a>
            </div>
          </div>
          <h5 className="card-title text-success pb-3">Siguenos en Redes Sociales</h5>
          <div className="row">
            <i className="bi bi-facebook col-2 border border-0 fs-5 text-success "></i>
            <i className="bi bi-instagram col-2 border border-0 fs-5 text-success "></i>
            <i className="bi bi-linkedin col-2 border border-0 fs-5 text-success "></i>
            <i className="bi bi-youtube col-2 border border-0 fs-5 text-success "></i>

          </div>
        </div>
      </div>
    </div>
  )
}
