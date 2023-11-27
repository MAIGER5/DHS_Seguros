import { useLocation } from "react-router-dom"
import { FooterBody } from "./FooterBody";


export const Footer = () => {

  const location = useLocation();

  return (
    <div>
       {location.pathname !== '/PublicityVideo' && location.pathname !== '/FormNewVideo' && <FooterBody />}
    </div>
  )
}
