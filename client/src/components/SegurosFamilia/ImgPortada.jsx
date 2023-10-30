import imgHome from '../../../images/seg-vida2.jpg';
import { CardImgPortada } from './CardImgPortada';
import styles from './SegurosFamilia.module.css'

export const ImgPortada = () => {
  return (
    <div className='w-100  position relative z-2' style={{height:'500px'}}>
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
