import { ImgPortada } from "../SegurosFamilia/ImgPortada"
import { CardBenefits } from "./CardBenefits"
import { CardCaracteristic } from "./CardCaracteristic"
import { CardHorizontalSegVida } from "./CardHorizontalSegVida"
import { CardfamilyX3 } from "./CardfamilyX3"


export const SegurosFamilia = () => {
  return (
    <div className='posicion-relative w-100 h-100'>
      <div className="" >
          <ImgPortada/>
      </div>
      {/* <div className="col border-success border-3">
        <CardfamilyX3/>
      </div> */}
      <div className="container border border-0 mt-5">
        <CardHorizontalSegVida/>
      </div>
      <div className="container border border-0 mt-5">
        <CardCaracteristic/>
      </div>
      <div className="container border border-0 mt-5">
        <CardBenefits/>
      </div>

    </div>  
  )
}
