// import imgHome from '../../../images/automotor3.jpg';
import imgHome from '../../../images/prueba4.jpg';
import { CardImgPortada } from './CardImgPortada';
import styles from './Polizas.module.css'

export const ImgPortada = () => {
  return (
    <div className='w-100  position relative z-2' style={{height:'550px'}}>
      <div className={`w-100 h-100 position-absolute`} >
        {/* <CardImgPortada/> */}
      </div>
      <div className={`w-100 h-100 position-absolute overflow-hidden z-1 ${styles.imagePinc}`} >
        <CardImgPortada/>
      </div>
      <img src={imgHome} alt="" className='w-100 h-100' style={{objectFit:'cover', objectPosition:'center', opacity:'85%'}} />
    </div>  
  )
}
