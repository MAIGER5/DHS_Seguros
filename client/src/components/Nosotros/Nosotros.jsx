import { ImgPortada } from "./ImgPortada"
import { Grupopso } from "./Grupopso"
import { InformacionNosotros } from "./InformacionNosotros"


export const Nosotros = () => {
  return (
    <div className='posicion-relative w-100 h-100 bg-dark'>
      <div className="" >
        <ImgPortada/>
      </div>
      <div className="col bg-dark">
        <Grupopso/>
      </div>
      <div className="col bg-dark pb-5">
        <InformacionNosotros/>
      </div>
    </div>  
  )
}
