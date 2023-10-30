import { ImgPortada } from "./ImgPortada"
import DHS from '../../../images/DHS.png'
import PSO from '../../../images/PSO.png'
import JURIDICA from '../../../images/JURIDICA.png'
import SEIN from '../../../images/SEIN.png'
import NOK from '../../../images/NOK.png'


export const Nosotros = () => {
  return (
    <div className='posicion-relative w-100 h-100'>
      <div className="" >
        <ImgPortada/>
      </div>
      <div className="col bg-dark">
        <div className="container m-auto border border-0 bg-dark">
          <h1 className="fs-2 text-success text-center fw-bold py-5">Grupo PSO</h1>
          <div className="row g-5 ">
            <div className="col-3 ">
              <div className="card border border-0 bg-dark">
                <div className="card-img m-auto" style={{width:'80px'}}>  
                  <img src={PSO} alt="" className="img-fluid"/>
                </div>
                <div className="card-body">
                  <card className="title">PSO</card>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card border border-0 bg-dark">
                <div className="card-img m-auto" style={{width:'150px'}}>  
                  <img src={JURIDICA} alt="" className="img-fluid"/>
                </div>
                <div className="card-body">
                  <card className="title">PSO</card>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card border border-0 bg-dark">
                <div className="card-img m-auto" style={{width:'120px'}}>  
                  <img src={SEIN} alt="" className="img-fluid"/>
                </div>
                <div className="card-body">
                  <card className="title">PSO</card>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card border border-0 bg-dark">
                <div className="card-img m-auto" style={{width:'80px'}}>  
                  <img src={NOK} alt="" className="img-fluid"/>
                </div>
                <div className="card-body">
                  <card className="title">PSO</card>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>  
  )
}
