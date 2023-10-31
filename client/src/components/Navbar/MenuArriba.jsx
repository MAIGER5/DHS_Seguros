import { Link } from 'react-router-dom'
import logoDhs from '../../../images/DHS.png'
import { useEffect, useState } from 'react';


export const MenuArriba = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Limpiamos el evento al desmontar el componente para evitar problemas de memoria.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fixed = ()=>{
    return scrolled? "position-fixed":""
  }


  return (
    <div className={`container d-flex justify-content-between align-items-center d-none d-lg-flex d-xl-flex mb-1 ${fixed()}`} >
      <Link to={'/'} className='overflow-hidden' style={{width:'150px', height:'auto'}}>
          <img  src={logoDhs} className=' img-fluid'  alt="" />
      </Link>
      <ul className=" nav justify-content-end ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  )
}
