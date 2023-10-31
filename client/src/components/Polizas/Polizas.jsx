import styles from './Polizas.module.css'
import { CardResumenPolizas } from "./CardResumenPolizas"
import { CardPoliza2 } from "./CardPoliza2"
import { ImgPortada } from "./ImgPortada"
import { PolizaX3Absolute } from "./PolizaX3Absolute"


export const Polizas = () => {
  return (
    <div className='posicion-relative w-100 h-100'>
        <div className={styles.imgPortadaPoliza}>
            <ImgPortada/>
        </div>
        <div className= {`${styles.cardCentarlX3}`} >
            <PolizaX3Absolute/>
        </div>
        <div className="container">
            <CardPoliza2/>
        </div>
        <div className="container">
            <CardResumenPolizas/>
        </div>
    </div>  
   )
}
