import imgHome from '../../../images/prueba6.jpg';
import styles from './Home.module.css'

export const ImgPortada = () => {
  return (
    <div className={styles.posicionImgPortada}>
        <img  src={imgHome} alt=""  />
    </div>
  )
}
