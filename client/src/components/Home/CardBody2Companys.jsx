import logo1 from '../../../images/PSO.png'
import logo2 from '../../../images/SEIN.png'
import logo3 from '../../../images/JURIDICA.png'
import logo4 from '../../../images/DHS.png'

export const CardBody2Companys = () => {
  return (
    <div className="row ">
        <div className="col-12 d-flex">
            <div className="col-3 ">
                <div className='overflow-hidden' style={{width:'40%', height:'auto'}}>
                    <img className='img-fluid ' style={{filter: 'invert(100%) grayscale(100%)', opacity:'60%'}} src={logo1} alt="" />
                </div>
            </div>
            <div className="col-3 ">
                <div className='overflow-hidden' style={{width:'40%', height:'auto'}}>
                    <img className='img-fluid ' style={{filter: 'invert(100%) grayscale(100%)', opacity:'60%'}} src={logo2} alt="" />
                </div>
            </div>
            <div className="col-3 ">
                <div className='overflow-hidden' style={{width:'40%', height:'auto'}}>
                    <img className='img-fluid ' style={{filter: 'invert(100%) grayscale(100%)', opacity:'60%'}} src={logo3} alt="" />
                </div>
            </div>
            <div className="col-3 ">
                <div className='overflow-hidden' style={{width:'40%', height:'auto'}}>
                    <img className='img-fluid ' style={{filter: 'invert(100%) grayscale(100%)', opacity:'60%'}} src={logo4} alt="" />
                </div>
            </div>

        </div>
    </div>
  )
}
