import { ImgPortada } from './imgPortada';
import { CardCentralX2 } from './CardCentralX2';
import { CardBody1 } from './CardBody1';
import { CardBody2Products } from './CardBody2Products';


export const Home = () => {


  
  return (
    <div className='position-relative w-100 h-100'>
      <div >
        <ImgPortada/>
      </div>
      <div >
        <CardCentralX2/>
      </div>
      <div className='container  my-5' >
        <CardBody1/>  {/*Card Intermediacion de Riesgos*/}
      </div>
      <div className=' bg-dark mb-5' style={{marginTop:'50px'}}>
        <CardBody2Products/>
      </div>
    </div>
  )
}
