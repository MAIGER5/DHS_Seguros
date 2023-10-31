import 'bootstrap-icons/font/bootstrap-icons.css';

export const ProductsIntermediation = () => {
  return (
    <div className='container position-relative'>
      <div className="container card mb-3 rounded-0 bg-dark border border-0 pt-5" >
        <div className="row g-0 ">
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title fs-2">Nuestras <a className="text-warning text-decoration-none" href="">Actividades de Acompañamiento</a> </h5>
              <p className="card-text">Para nosotros lo más importante son nuestros clientes, por esta razón estamos comprometidos con el apoyo activo en la ejecución de las actividades de promoción y
              prevención en SGSST.</p>
              {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
            </div>
          </div>
          <div className="col-md-3 border border-0 d-flex justify-content-center align-items-center">
          <a href="#" className="btn btn-success mt-2" role="button" data-bs-toggle="button">Contactanos</a>
          </div>
        </div>
      </div>

{/* AQUI EMPIEZAN LAS TARJETAS  */}

      <div className="container row row-cols-1 row-cols-md-4 g-4 pb-5">
        <div className="col p-1 p-md-3 p-lg-4">
          <div className="card h-100 rounded-4 bg-dark shadow">
            <i className="bi bi-person-circle card-img-top fs-1 text-warning px-4 pt-4  d-flex justify-content-center"></i>
            <div className="card-body text-black px-4  ">
              <h5 className="card-title d-flex justify-content-center text-center">Batería de Riesgo Psicosocial</h5>
              <p className="card-text text-center">Brindamos protección financiera ante posibles daños.</p>
            </div>
          </div>
        </div>
        <div className="col p-1 p-md-3 p-lg-4">
          <div className="card h-100 rounded-4 bg-dark shadow">
            <i className="bi bi-fire card-img-top fs-1 text-warning px-4 pt-4  d-flex justify-content-center"></i>
            <div className="card-body text-black px-4  ">
              <h5 className="card-title d-flex justify-content-center">Seguridad Industrial</h5>
              <p className="card-text text-center">Brindamos protección financiera ante posibles daños.</p>
            </div>
          </div>
        </div>
        <div className="col p-1 p-md-3 p-lg-4">
          <div className="card h-100 rounded-4 bg-dark shadow">
            <i className="bi bi-code-slash card-img-top fs-1 text-warning px-4 pt-4  d-flex justify-content-center"></i>
            <div className="card-body text-black px-4  ">
              <h5 className="card-title d-flex justify-content-center">Software de Gestión</h5>
              <p className="card-text text-center">Brindamos protección financiera ante posibles daños.</p>
            </div>
          </div>
        </div>
        <div className="col p-1 p-md-3 p-lg-4">
          <div className="card h-100 rounded-4 bg-dark shadow">
            <i className="bi bi-sign-turn-right-fill card-img-top fs-1 text-warning px-4 pt-4  d-flex justify-content-center"></i>
            <div className="card-body text-black px-4  ">
              <h5 className="card-title d-flex justify-content-center">Señalización</h5>
              <p className="card-text text-center">Brindamos protección financiera ante posibles daños.</p>
            </div>
          </div>
        </div>
        <div className="col p-1 p-md-3 p-lg-4">
          <div className="card h-100 rounded-4 bg-dark shadow">
            <i className="bi bi-bookshelf card-img-top fs-1 text-warning px-4 pt-4  d-flex justify-content-center"></i>
            <div className="card-body text-black px-4  ">
              <h6 className="card-title d-flex justify-content-center">Equipos de Emergencia</h6>
              <p className="card-text text-center">Brindamos protección financiera ante posibles daños.</p>
            </div>
          </div>
        </div>
        <div className="col p-1 p-md-3 p-lg-4">
          <div className="card h-100 rounded-4 bg-dark shadow">
            <i className="bi bi-person-video3 card-img-top fs-1 text-warning px-4 pt-4  d-flex justify-content-center"></i>
            <div className="card-body text-black px-4  ">
              <h5 className="card-title d-flex justify-content-center">Capacitaciones</h5>
              <p className="card-text text-center">Brindamos protección financiera ante posibles daños.</p>
            </div>
          </div>
        </div>
        <div className="col p-1 p-md-3 p-lg-4">
          <div className="card h-100 rounded-4 bg-dark shadow">
            <i className="bi bi-person-lines-fill card-img-top fs-1 text-warning px-4 pt-4  d-flex justify-content-center"></i>
            <div className="card-body text-black px-4  ">
              <h5 className="card-title d-flex justify-content-center">Asesoria</h5>
              <p className="card-text text-center">Brindamos protección financiera ante posibles daños.</p>
            </div>
          </div>
        </div>
        <div className="col p-1 p-md-3 p-lg-4">
          <div className="card h-100 rounded-4 bg-dark shadow">
            <i className="bi bi-lungs-fill card-img-top fs-1 text-warning px-4 pt-4  d-flex justify-content-center"></i>
            <div className="card-body text-black px-4  ">
              <h5 className="card-title d-flex justify-content-center">Semana de la Salud</h5>
              <p className="card-text text-center">Brindamos protección financiera ante posibles daños.</p>
            </div>
          </div>
        </div>

      </div>
      {/* <div className='position-absolute bg-warning d-none d-lg-block d-xl-block' style={{ top:'250px', right:'30px', width:'40px', height:'40px', transform: 'skewY(20deg)'}}></div>
      <div className='position-absolute bg-white d-none d-lg-block d-xl-block' style={{ top:'-80px', right:'-20px', width:'200px', height:'290px', transform: 'skewY(30deg)', clipPath: 'polygon(0% 45%, 100% 0%, 100% 100%, 0% 100%)'}}></div>
      <div className='position-absolute bg-secondary d-none d-lg-block d-xl-block' style={{ top:'280px', right:'-60px', width:'40px', height:'70px', transform: 'skewY(20deg)'}}></div>
      <div className='position-absolute bg-warning d-none d-lg-block d-xl-block' style={{width:'40px', height:'40px', top:'360px', right:'-60px', clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 100%)'}}></div>
      <div className='position-absolute bg-primary d-none d-lg-block d-xl-block' style={{width:'40px', height:'40px', top:'400px', right:'-60px', clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 0%)'}}></div> */}


    </div>
  )
}
