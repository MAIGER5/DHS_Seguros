import { CardPolizasGrupales } from "./CardPolizasGrupales"
import { CardSOAT } from "./CardSOAT"
import { ImgPortada } from "./ImgPortada"
import { PolizaAutoIndividual } from "./PolizaAutoIndividual"


export const SegurosAutomotor = () => {
  return (
    <div className='posicion-relative w-100 h-100'>
        <div>
            <ImgPortada/>
        </div>
        <div className="container">
            <PolizaAutoIndividual/>
        </div>
        <div className="container">
            <CardSOAT/>
        </div>
        <div className="container">
            <CardPolizasGrupales/>
        </div>
    </div>  
   )
}
