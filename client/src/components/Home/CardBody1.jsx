import imgCard from '../../../images/seglaboral1.jpg'
import imgCard1 from '../../../images/prueba10.avif'
import styles from './Home.module.css'

export const CardBody1 = () => {
  return (
  <div className="card mb-3 rounded-0 border border-0 position-relative" >
    <div className='position-absolute bg-warning d-none d-lg-block d-xl-block' style={{width:'40px', height:'40px', clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 100%)'}}></div>
    <div className='position-absolute bottom-0 end-0 bg-success d-none d-lg-block d-xl-block' style={{width:'40px', height:'40px', clipPath: 'polygon(100% 1000%, 100% 0%, 100% 0%, 0% 100%)'}}></div>
    <div className="row g-0">
      <div className="col-md-6 p-lg-3">
        <div className="card-body w-lg-75">
          <h5 className="card-title fs-2">Intermediación en Riesgos <br /> <a className='text-warning text-decoration-none'>Laborales</a> </h5>
          <p className="card-text mt-3">Nos convertimos en sus aliados estratégicos en la intermediación de sus riesgos laborales. Generamos valor para su compañía mediante la gestión integral y el servicio personalizado, humanizamos los diferentes procesos para sus colaboradores, dejando experiencias memorables en nuestros clientes. <br /> <br /> Contamos con registro único de intermediarios expedido por el ministerio de trabajo..</p>
          <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div className="col-md-6 rounded-0 border border-0 p-0 px-lg-5 pb-lg-5 position-relative " >
        <div className='position-absolute bg-warning d-none d-lg-block d-xl-block' style={{ top:'250px', left:'30px', width:'40px', height:'40px', transform: 'skewY(20deg)'}}></div>
        <div className='position-absolute bg-success d-none d-lg-block d-xl-block' style={{ top:'150px', left:'30px', width:'40px', height:'70px', transform: 'skewY(20deg)'}}></div>

        <img src={imgCard} className='img-fluid' alt=""/>
      </div>
    </div>
  </div>
  )
}
