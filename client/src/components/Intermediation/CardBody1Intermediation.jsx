import firstImg1 from '../../../images/firstImg1.jpg'
import firstImg2 from '../../../images/firstImg2.jpg'

export const CardBody1Intermediation = () => {
  return (
    <div className="row "> 
      <div className="col-md-3 border border-0 overflow-hidden p-3" >
        <img src={firstImg1} alt="" className='w-100 h-100 object-fit-cover'/>
      </div>
      <div className="col-md-3 border border-0 overflow-hidden p-3" >
        <img src={firstImg2} alt="" className='w-100 h-100 object-fit-cover'/>
      </div>
      <div className="col-md-6 border border-0 overflow-hidden" >
        <div className="card h-100 rounded-0 border border-0 ">
          <i className="bi bi-house-heart card-img-top fs-1 text-warning px-4 pt-4"></i>
          <div className="card-body  px-4 ">
            <h5 className="card-title">Seguros Familia</h5>
            <p className="card-text">Resguarda tu presente y futuro con nuestras pólizas integrales. Nuestro seguro de vida garantiza la protección financiera de tus seres queridos, mientras que el seguro de vivienda vela por la seguridad y bienestar de tu hogar. ¡Invierte en tranquilidad y protege lo que más valoras en la vida!.</p>
            <ul className="list-group-numbered">
              <li className="list-group-item">Seguros de Vida</li>
              <li className="list-group-item">Seguros de Vivienda</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
