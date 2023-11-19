import logoDHS from '../../../images/DHS.png'
import GRUPOPSO from '../../../images/GRUPOPSO.png'

export const FooterBody = () => {
  return (
    <div className="py-5 position-relative" style={{backgroundColor:'#3a4750'}}>
      <div className='m-auto' style={{width:'80%'}}>

        <div className="row row-cols-1 row-cols-lg-3 g-4 pb-5">

          <div className="col mt-5">
            <div className="card h-100 rounded-0 border border-0 bg-transparent shadow">
              <div className='overflow-hidden ms-4' style={{width:'40%', height:'auto'}}>
                <img  src={logoDHS} className='w-100 object-fit-cover'  alt="" />
              </div>
              <div className="card-body  px-4">
                <h5 className="text-dark fs-6 fw-normal py-2 ">Disfruta nuestras redes Sociales</h5>
                <div className="col-12 border border-0 d-flex justify-content-start align-items-end">
                  <i className="bi bi-facebook col-2 border border-0 fs-2 text-dark "></i>
                  <p className="col-8 border border-0 fs-6 text-dark ">@dhssegurospso</p>
                </div>
                <div className="col-12 border border-0 d-flex justify-content-start align-items-end">
                  <i className="bi bi-instagram col-2 border border-0 fs-2 text-dark "></i>
                  <p className="col-8 border border-0 fs-6 text-dark ">@dhssegurospso</p>
                </div>
                <div className="col-12 border border-0 d-flex justify-content-start align-items-end">
                  <i className="bi bi-linkedin col-2 border border-0 fs-2 text-dark "></i>
                  <p className="col-8 border border-0 fs-6 text-dark ">@dhssegurospso</p>
                </div>
                <div className="col-12 border border-0 d-flex justify-content-start align-items-end">
                  <i className="bi bi-youtube col-2 border border-0 fs-2 text-dark "></i>
                  <p className="col-8 border border-0 fs-6 text-dark ">@dhssegurospso</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col mt-5">
            <div className="card h-100 rounded-0 border border-0 bg-transparent shadow">
              <div className='overflow-hidden ms-4 ' style={{width:'25%', height:'auto'}}>
                <img  src={GRUPOPSO} className='w-100 object-fit-cover'  alt="" />
              </div>
              <div className="card-body  px-4">
              <h5 className="text-dark fs-6 fw-normal py-2 " style={{fontStyle:'italic'}}>Miembro del grupo PSO</h5>
                <p className="card-text text-dark">"Formamos parte de un sólido grupo empresarial dedicado a la seguridad laboral. Nuestra experiencia y respaldo nos permiten ofrecerte soluciones efectivas para garantizar un entorno de trabajo seguro y protegido. Confía en nuestra trayectoria para salvaguardar tu bienestar y el de tus colaboradores."</p>
              </div>
            </div>
          </div>

          <div className="col mt-5">
            <div className="card h-100 rounded-0 border border-0 bg-transparent shadow">
              <i className="bi bi-shield-check card-img-top fs-1 text-dark px-4 pt-4"></i>
              <div className="card-body  px-4">
                <h5 className="card-title text-dark">Información de Contacto</h5>
                <div className="card-body  ">
                  <div className="col-12 border border-0 d-flex justify-content-start align-items-center">
                    <i className="bi bi-telephone col-2 border border-0 fs-2 text-dark "></i>
                    <a className="col-8 border border-0 text-dark" style={{fontSize:'14px'}}>+57 3016589785</a>
                  </div>
                  <div className="col-12 border border-0 d-flex justify-content-start align-items-center">
                    <i className="bi bi-envelope-fill col-2 border border-0 fs-2 text-dark "></i>
                    <a className="col-8 border border-0 text-dark" style={{fontSize:'14px'}}>comercialdhs@grupospo.com.co</a>
                  </div>
                  <div className="col-12 border border-0 d-flex justify-content-start align-items-center">
                    <i className="bi bi-geo-alt col-2 border border-0 fs-2 text-dark "></i>
                    <a className="col-8 border border-0 text-dark" style={{fontSize:'14px'}}>@dhssegurospso</a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>  
      </div>
    </div>
  )
}
