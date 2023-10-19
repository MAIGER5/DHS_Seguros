import imgHome from '../../../images/automotor3.jpg';
import { CardImgPortada } from './CardImgPortada';
import styles from './SegurosAutomotor.module.css'

export const ImgPortada = () => {
  return (
    <div className={`w-100 overflow-hidden position-realtive ${styles.imagePinc}`} style={{height:'600px'}} >
        <img  src={imgHome} alt="" className={`w-100 h-100 object-fit-cover`} style={{objectPosition:'center'}} />
        <div className='position-absolute z-2' style={{top:'40%', left:'40%', transform:'translate(-50%, -50%)'}}>
          <CardImgPortada/>
        </div>
    </div>
  )
}
