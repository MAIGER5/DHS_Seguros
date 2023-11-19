import { useLocation } from "react-router-dom"
import { FooterBody } from "./FooterBody";


export const Footer = () => {

  const location = useLocation();

  return (
    <div>
      { location.pathname !== '/PublicityVideo' && <FooterBody/>}
    </div>
  )
}
