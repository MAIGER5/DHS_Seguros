import styles from './intermediation.module.css'
import { CardImgPortada } from './CardImgPortada';

export const ImgPortada = () => {
  return (
    <div className={`w-100 d-flex ${styles.imgPortada}`}>
      <CardImgPortada/>
    </div>
  )
}
