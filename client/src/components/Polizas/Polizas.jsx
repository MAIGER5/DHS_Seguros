import { CardResumenPolizas } from "./CardResumenPolizas"
import { CardPoliza2 } from "./CardPoliza2"
import { ImgPortada } from "./ImgPortada"
import { PolizaX3Absolute } from "./PolizaX3Absolute"


export const Polizas = () => {
  return (
    <div className='posicion-relative w-100 h-100'>
        <div className="" style={{marginBottom:'130px'}}>
            <ImgPortada/>
        </div>
        <div className="container position-absolute mb-5 0 z-1" style={{top:'620px', left:'50%', transform:'translate(-50%, -50%)'}}>
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
