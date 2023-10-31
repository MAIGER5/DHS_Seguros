import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './Navbar.module.css'
import logoDhs from '../../../images/DHS.png'
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const MenuAbajo = () => {

  const location = useLocation();

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
  

  let color = {
    primero:"text-success",
    segundo:'text-dark',

  };

  const paths = ()=>{

    return   window.innerWidth > 991 && scrolled
            ? color.segundo
            : window.innerWidth < 992
            ? color.primero
            : location.pathname == "/"  
            ? color.primero
            : location.pathname == "/Nosotros"  
            ? color.primero
            : color.segundo
  }


  return (
      <nav className={`w-100 navbar navbar-expand-lg bg-body-none ${window.innerWidth > 991 && scrolled? "bg-secondary position-fixed": ""} ${window.innerWidth < 992 && scrolled? "position-fixed bg-dark": ""} z-2 border border-0   ${styles.barraBorrosa}`} >
        <div className="container">
          <Link to={'/'} className='overflow-hidden d-felx d-lg-none d-xl-none' style={{width:'30%', height:'auto'}}>
            <img  src={logoDhs} className=' img-fluid'  alt="" />
          </Link>
          {/* <a className="navbar-brand" href="#">Navbar</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"   aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        {/* estas lineas en adelante son el menu que colapsa */}
          <div className="collapse navbar-collapse pt-4" id="navbarSupportedContent">
            <ul className="navbar-nav ms-0 me-auto mb-2 mb-lg-0 ">
              <li className="nav-item me-5">
                <Link to={'/'} style={{textDecoration:'none'}}>
                  <a  aria-current="page" href="#" className={`nav-link ${paths()}`}>Inicio</a>
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link to={'/Nosotros'} style={{textDecoration:'none'}}>
                  <a className={`nav-link ${paths()}`} href="#">Nosotros</a>
                </Link>
              </li>
              <li className="nav-item dropdown me-5 ">
                <a className={`nav-link dropdown-toggle ${paths()}`} href="#" role="button"    data-bs-toggle="dropdown" aria-expanded="false">
                  Productos
                </a>
                <ul className={`dropdown-menu bg-dark   ${styles.textoDropdownMenu}`}>
                <Link to={'/Intermediation'} className='text-decoration-none'><a className="dropdown-item text-success" href="#">Intermediacion ARL</a></Link>
                  <li><hr className="dropdown-divider" /></li>
                  <Link to={'/SegAutomotor'} className='text-decoration-none'><a className="dropdown-item text-success" href="#">Segruos Automotor</a></Link>
                  <Link to={'/SegFamilia'} className='text-decoration-none'><a className="dropdown-item text-success" href="#">Seguros Familia</a></Link>
                  <Link to={'/Polizas'} className='text-decoration-none'><a className="dropdown-item text-success" href="#">Pólizas</a></Link>
                </ul>
              </li>
              <li className="nav-item dropdown me-5">
                <a className={`nav-link dropdown-toggle ${paths()}`} href="#" role="button"    data-bs-toggle="dropdown" aria-expanded="false">
                  Servicios
                </a>
                <ul className={`dropdown-menu bg-dark  ${styles.textoDropdownMenu}`}>
                  <Link to={'/Intermediation'} className='text-decoration-none'><a className="dropdown-item text-success" href="#">Intermediacion ARL</a></Link>
                  <li><hr className="dropdown-divider" /></li>
                  <Link className='text-decoration-none'><a className="dropdown-item text-success" href="#">Segruos Automotor</a></Link>
                  <Link className='text-decoration-none'><a className="dropdown-item text-success" href="#">Seguros Familia</a></Link>
                  <Link to={'/Polizas'} className='text-decoration-none'><a className="dropdown-item text-success" href="#">Pólizas</a></Link>
                </ul>
              </li>
              <li className="nav-item me-5">
                <a className={`nav-link fw-medium ${paths()}`} aria-disabled="true" href="#">DHS Plus</a>
              </li>
            </ul>
            <div className="btn-group">
              <button
                
                className="btn btn-link dropdown-toggle text-white"
                type="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="true"
                aria-expanded="false"
              >
                <i className="bi bi-search " />
              </button>
              <div className="dropdown-menu">
                <input className=" dropdown-item form-control me-2 shadow-none" type="search" placeholder="Search"     aria-label="Search" />
              </div>
            </div>
        {/* hasta aqui colapsa en menu */}
          </div>
        </div>
      </nav>
  )
}
