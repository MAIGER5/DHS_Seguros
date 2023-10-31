import DHS from '../../../images/DHS.png'
import PSO from '../../../images/PSO.png'
import JURIDICA from '../../../images/JURIDICA.png'
import SEIN from '../../../images/SEIN.png'
import NOK from '../../../images/NOK.png'

export const Grupopso = () => {
  return (
    <div className="container m-auto border border-0 bg-dark">
      <h1 className="fs-2 text-success text-center fw-bold py-5">Grupo PSO</h1>
      <div className="row g-5 ">
        <div className="col-md-3 ">
          <div className="card border border-0 bg-dark">
            <div className="card-img m-auto" style={{width:'80px', height:'50px'}}>  
              <img src={PSO} alt="" className="img-fluid"/>
            </div>
            <div className="card-body text-center text-success fw-medium">
              <card className="title" >Prevención y Seguridad Ocupacional</card>
              <div className="card-text fw-normal text-black py-2" style={{fontSize:'11px'}}>Somos una compañia dedicada a la Seguridad y Salud en el Trabajo</div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border border-0 bg-dark">
            <div className="card-img m-auto" style={{width:'150px', height:'50px'}}>  
              <img src={JURIDICA} alt="" className="img-fluid"/>
            </div>
            <div className="card-body text-center text-success fw-medium">
              <card className="title" >Jurídica y Consultoría <br /><br /></card>
              <div className="card-text fw-normal text-black py-2" style={{fontSize:'11px'}}>Somos una compañia dedicada a la Seguridad y Salud en el Trabajo</div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border border-0 bg-dark">
            <div className="card-img m-auto" style={{width:'120px', height:'50px'}}>  
              <img src={SEIN} alt="" className="img-fluid"/>
            </div>
            <div className="card-body text-center text-success fw-medium">
              <card className="title" >PSO Extintores y Seguridad Industrial</card>
              <div className="card-text fw-normal text-black py-2" style={{fontSize:'11px'}}>Somos una compañia dedicada a la Seguridad y Salud en el Trabajo</div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border border-0 bg-dark">
            <div className="card-img m-auto" style={{width:'80px', height:'50px'}}>  
              <img src={NOK} alt="" className="img-fluid"/>
            </div>
            <div className="card-body text-center text-success fw-medium">
              <card className="title" >Pest Control <br /><br /></card>
              <div className="card-text fw-normal text-black py-2" style={{fontSize:'11px'}}>Somos una compañia dedicada a la Seguridad y Salud en el Trabajo</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
