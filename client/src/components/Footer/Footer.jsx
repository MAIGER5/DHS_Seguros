import logoDHS from '../../../images/DHS.png'
import GRUPOPSO from '../../../images/GRUPOPSO.png'
import creceNosotros from '../../../images/prueba3.jpg'

export const Footer = () => {
  return (
    <div className="py-5 position-relative" style={{backgroundColor:'#3a4750'}}>
      <div className='m-auto' style={{width:'80%'}}>
        {/* <div className="card mb-3 rounded-0 bg-dark border border-0 pt-5 position-relative overflow-hidden" style={{height:'150px'}}>
          <img src={creceNosotros} alt="" className='w-100 h-100 position-absolute top-0 left-0 object-fit-cover object-position-start' />
          <div className="row g-0 z-1">
            <div className="col-md-8">
              <div className="card-body ">
                <h5 className="card-title fs-2 text-dark">Crece con Nosotros </h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
            <div className="col-md-4 border border-0 d-flex justify-content-center align-items-center">
              <a href="#" className="btn bg-light text-white fw-semibold fs-5 ">Contactanos</a>
            </div>
          </div>
        </div>     */}

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
