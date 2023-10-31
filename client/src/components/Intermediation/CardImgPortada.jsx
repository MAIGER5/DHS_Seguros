import firstImg2 from '../../../images/firstImg2.jpg';
import { Link } from 'react-router-dom'

export const CardImgPortada = () => {
  return (
    <div className='container d-flex justify-content-center d-felx align-items-center border border-0'>
      <div className="row justify-content-md-center position-relative"> 
        <div className="col-2 h-100 position-relative border border-0">
          <div className='position-absolute bg-success d-none d-md-block d-lg-block d-xl-block shadow' style={{ top:'70px', left:'0',width:'40px', height:'70px', transform: 'skewY(40deg)'}}>
          </div>
          <div className='position-absolute bg-dark d-none d-md-block d-lg-block d-xl-block shadow' style={{width:'40px', height:'40px',top:'140px', left:'0', clipPath: 'polygon(0% 0%, 0% 0%, 100% 100%, 0% 100%)'}}>
          </div>
          <div className='position-absolute bg-dark d-none d-md-block d-lg-block d-xl-block shadow' style={{width:'40px', height:'40px',top:'270px', left:'30px', clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 0%)'}}>
          </div>
          <div className='position-absolute bg-warning d-none d-md-block d-lg-block d-xl-block shadow' style={{width:'40px', height:'40px',top:'290px', left:'30px', clipPath: 'polygon(0% 0%, 0% 0%, 100% 100%, 0% 100%)'}}>
          </div>
          <div className='position-absolute bg-warning d-none d-md-block d-lg-block d-xl-block shadow' style={{width:'40px', height:'40px',top:'390px', left:'70px', clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 0%)'}}>
          </div>
          <div className='position-absolute bg-success-subtle d-none d-lg-block d-lg-block d-xl-block shadow' style={{width:'40px', height:'40px',top:'410px', left:'70px', clipPath: 'polygon(0% 0%, 0% 0%, 100% 100%, 0% 100%)'}}>
          </div>
        </div>

        <div className="col-md-7 border border-0 overflow-hidden " >
          <div className="card h-100 rounded-0 border border-0 bg-transparent ">
            <div className="card-body  px-4 ">
              <h1 className="card-title text-dark fw-bold">"Su Mjeor Aliado <br /> En la Gestión de Riesgos<br /><a className='text-decoration-none text-warning' href="">Laborales</a>"</h1>
              {/* <h1 className="card-title text-dark fw-bold">Optimiza Tú <br /> Entonro Laboral<br /><a className='text-decoration-none text-warning' href="">con Nosotros</a></h1> */}
              <p className="card-text text-dark ">Nuestra misión es garantizar que tu empresa sea un lugar seguro y saludable para tus colaboradores, promoviendo un ambiente de trabajo en el que todos puedan prosperar y alcanzar su máximo potencial.</p>
              <br />
              <Link to={'/Contact'} className="col-md-3 border border-0 d-flex justify-content-start align-items-center text-decoration-none">
                <a href="#" className="btn btn-dark mt-2 text-success fw-bold" >Contactanos</a>
              </Link>

            </div>
          </div>
        </div>
        {/* <div className='col-md-1'></div> */}
        <div className="col-md-3  overflow-hidden d-none d-md-block p-3 shadow-sm rounded-3" >
          <img src={firstImg2} alt="" className='w-100 h-100 object-fit-cover border border-5 border-bottom-0 border-start-0 border-warning rounded-2' style={{opacity:'90%'}}/>
        </div>
      </div>

      

    </div>
  )
}
