import imgHome from '../../../images/prueba6.jpg';
import styles from './Home.module.css'

export const ImgPortada = () => {
  return (
    <div className='w-100 overflow-hidden' style={{height:'500px'}} >
        <img  src={imgHome} alt="" className='w-100 h-100 object-fit-cover' style={{objectPosition:'center'}} />
    </div>
  )
}
