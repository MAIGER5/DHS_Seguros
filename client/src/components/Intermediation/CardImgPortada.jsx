import firstImg2 from '../../../images/firstImg2.jpg'

export const CardImgPortada = () => {
  return (
    <div className='container d-flex justify-content-center d-felx align-items-center'>
      <div className="row justify-content-md-center position-relative"> 
        <div className="col-md-7 border border-0 overflow-hidden " >
          <div className="card h-100 rounded-0 border border-0 bg-transparent ">
            <div className="card-body  px-4 ">
              <h1 className="card-title text-dark fw-bold">"Su Mjeor Aliado <br /> En la Gestión de Riesgos<br /><a className='text-decoration-none text-warning' href="">Laborales</a>"</h1>
              {/* <h1 className="card-title text-dark fw-bold">Optimiza Tú <br /> Entonro Laboral<br /><a className='text-decoration-none text-warning' href="">con Nosotros</a></h1> */}
              <p className="card-text text-dark ">Nuestra misión es garantizar que tu empresa sea un lugar seguro y saludable para tus colaboradores, promoviendo un ambiente de trabajo en el que todos puedan prosperar y alcanzar su máximo potencial.</p>
              <br />
              <div className="col-md-3 border border-0 d-flex justify-content-start align-items-center">
              <a href="#" className="btn btn-dark mt-2 text-success fw-bold" role="button" data-bs-toggle="button">Contactanos</a>
              </div>

            </div>
          </div>
        </div>
        {/* <div className='col-md-1'></div> */}
        <div className="col-md-3  overflow-hidden d-none d-md-block p-3 shadow-sm rounded-3" >
          <img src={firstImg2} alt="" className='w-100 h-100 object-fit-cover border border-5 border-bottom-0 border-start-0 border-warning rounded-2' style={{opacity:'90%'}}/>
        </div>
      </div>
      <div className='position-absolute bg-success d-none d-md-block d-lg-block d-xl-block shadow' style={{ top:'180px', left:'80px',width:'40px', height:'70px', transform: 'skewY(40deg)'}}>
      </div>
      <div className='position-absolute bg-dark d-none d-md-block d-lg-block d-xl-block shadow' style={{width:'40px', height:'40px',top:'250px', left:'80px', clipPath: 'polygon(0% 0%, 0% 0%, 100% 100%, 0% 100%)'}}>
      </div>
      <div className='position-absolute bg-dark d-none d-md-block d-lg-block d-xl-block shadow' style={{width:'40px', height:'40px',top:'370px', left:'60px', clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 0%)'}}>
      </div>
      <div className='position-absolute bg-warning d-none d-md-block d-lg-block d-xl-block shadow' style={{width:'40px', height:'40px',top:'390px', left:'60px', clipPath: 'polygon(0% 0%, 0% 0%, 100% 100%, 0% 100%)'}}>
      </div>
      <div className='position-absolute bg-warning d-none d-md-block d-lg-block d-xl-block shadow' style={{width:'40px', height:'40px',top:'490px', left:'110px', clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 0%)'}}>
      </div>
      <div className='position-absolute bg-success-subtle d-none d-md-block d-lg-block d-xl-block shadow' style={{width:'40px', height:'40px',top:'510px', left:'110px', clipPath: 'polygon(0% 0%, 0% 0%, 100% 100%, 0% 100%)'}}>
      </div>
      <div className='position-absolute bg-success d-none d-md-block d-lg-block d-xl-block shadow' style={{ top:'580px', left:'80px',width:'40px', height:'70px', transform: 'skewY(40deg)'}}>
      </div>

    </div>
  )
}
