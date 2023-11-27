import logoDhs from '../../../images/DHS.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './Navbar.module.css'
import { useDispatch } from 'react-redux';
import { getVideosAction } from '../../Redux/Actions/getVideosAction';



function Navbar() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const location = useLocation();

  
  const [scrolled, setScrolled] = useState(false);

  const [collapso, setCollapso] = useState(false);

  useEffect(() => {

    dispatch(getVideosAction())

    const handleScroll = () => {
      if (window.scrollY > 0 && location.pathname !== '/PublicityVideo') {
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
            : location.pathname == "/Contact"
            ? color.primero
            : color.segundo
  }

  const handleItemClick = ()=>{
    setCollapso(true);

    setTimeout(() => {
      setCollapso(false);
    }, 2000);

  }


	return (
    
    <div className={`${!scrolled? "mt-2":""} z-100 `}>
      <div className={`container justify-content-between align-items-center d-none ${!scrolled? "d-lg-flex d-xl-flex mb-1": ""} `} >
        <Link to={'/'} className='overflow-hidden' style={{width:'130px', height:'auto'}}>
            <img  src={logoDhs} className=' img-fluid'  alt="" />
        </Link>
        <ul className=" nav justify-content-evenly w-25  ">
          <li className="nav-item">
            <i className="bi bi-facebook col-2 border border-0 fs-4 text-success "></i>
          </li>
          <li className="nav-item">
            <i className="bi bi-instagram col-2 border border-0 fs-4 text-success "></i>
          </li>
          <li className="nav-item">
            <i className="bi bi-linkedin col-2 border border-0 fs-4 text-success "></i>
          </li>
          <li className="nav-item d-none d-xl-block">
            <a className="btn border-secondary border-2 rounded-5 ">+57 3016957458</a>
          </li>
        </ul>
      </div>


      <nav className={`w-100 navbar navbar-expand-lg bg-body-none ${window.innerWidth > 991 && scrolled? "bg-secondary position-fixed": ""} ${window.innerWidth < 992 && scrolled? "position-fixed bg-dark": ""} z-2 border border-0   ${styles.barraBorrosa}`} >
        <div className="container">
          <Link to={'/'} className={`${window.innerWidth < 992? "d-none": !scrolled? "d-none": "d-blok mt-3"} overflow-hidden me-5`} style={{width:'120px', height:'auto'}}>
              <img  src={logoDhs} className=' img-fluid'  alt="" />
          </Link>

          <Link to={'/'} className='overflow-hidden d-felx d-lg-none d-xl-none' style={{width:'20%', height:'auto'}}>
            <img  src={logoDhs} className=' img-fluid'  alt="" />
          </Link>
          {/* <a className="navbar-brand" href="#">Navbar</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"   aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        {/* estas lineas en adelante son el menu que colapsa */}
          <div className={`${!scrolled? "collapse": ""} collapse navbar-collapse pt-4`} id="navbarSupportedContent">
            <ul className="navbar-nav ms-0 me-auto mb-0 mb-lg-0 ">
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
                <ul className={`dropdown-menu bg-dark ${collapso ? 'collapse' : ''} ${styles.textoDropdownMenu}`} >
                  <Link to={'/Intermediation'} className='text-decoration-none' onClick={handleItemClick}><a className="dropdown-item text-success" href="#">Intermediacion ARL </a></Link>
                  <li><hr className="dropdown-divider" /></li>
                  <Link to={'/SegAutomotor'} className='text-decoration-none' onClick={handleItemClick}><a className="dropdown-item text-success" href="#">Segruos Automotor</a></Link>
                  <Link to={'/SegFamilia'} className='text-decoration-none' onClick={handleItemClick}><a className="dropdown-item text-success" href="#">Seguros Familia</a></Link>
                  <Link to={'/Polizas'} className='text-decoration-none' onClick={handleItemClick}><a className="dropdown-item text-success" href="#">Pólizas</a></Link>
                </ul>
              </li>
              <li className="nav-item dropdown me-5">
                <a className={`nav-link dropdown-toggle ${paths()}`} href="#" role="button"    data-bs-toggle="dropdown" aria-expanded="false">
                  Servicios
                </a>
                <ul className={`dropdown-menu bg-dark ${collapso ? 'collapse' : ''} ${styles.textoDropdownMenu}`} >
                  <Link to={'/Intermediation'} className='text-decoration-none' onClick={handleItemClick}><a className="dropdown-item text-success" href="#">Mis Polizas</a></Link>
                  <li><hr className="dropdown-divider" /></li>
                  <Link to={'/PublicityVideo'} className='text-decoration-none' onClick={handleItemClick}><a className="dropdown-item text-success" href="#">Actualidad</a></Link>
                  {/* <Link to={'/SegFamilia'} className='text-decoration-none' onClick={handleItemClick}><a className="dropdown-item text-success" href="#">none</a></Link>
                  <Link to={'/Polizas'} className='text-decoration-none' onClick={handleItemClick}><a className="dropdown-item text-success" href="#">none</a></Link> */}
                </ul>
              </li>
              <li className="nav-item dropdown me-5">
                <a className={`nav-link dropdown-toggle ${paths()}`} href="#" role="button"    data-bs-toggle="dropdown" aria-expanded="false">
                  Adnministrador
                </a>
                <ul className={`dropdown-menu bg-dark ${collapso ? 'collapse' : ''} ${styles.textoDropdownMenu}`} >
                  <Link to={'/Intermediation'} className='text-decoration-none' onClick={handleItemClick}><a className="dropdown-item text-success" href="#">Monitoreo de Datos</a></Link>
                  <li><hr className="dropdown-divider" /></li>
                  <Link to={'/FormNewVideo'} className='text-decoration-none' onClick={handleItemClick}><a className="dropdown-item text-success" href="#">Formulario de Videos</a></Link>
                  {/* <Link to={'/SegFamilia'} className='text-decoration-none' onClick={handleItemClick}><a className="dropdown-item text-success" href="#">none</a></Link>
                  <Link to={'/Polizas'} className='text-decoration-none' onClick={handleItemClick}><a className="dropdown-item text-success" href="#">none</a></Link> */}
                </ul>
              </li>
              <Link to={'/Contact'} className="nav-item me-5 text-decoration-none">
                <a className={`nav-link fw-medium ${paths()}`} aria-disabled="true" href="#">Contacto</a>
              </Link>
            </ul>
            <div className="btn-group">
              <button
                
                className={`btn btn-link dropdown-toggle ${paths()}`}
                type="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="true"
                aria-expanded="false"
              >
                <i className={`bi bi-search ${paths()} `} />
              </button>
              <div className="dropdown-menu">
                <input className=" dropdown-item form-control me-2 shadow-none" type="search" placeholder="Search"     aria-label="Search" />
              </div>
            </div>
        {/* hasta aqui colapsa en menu */}
          </div>
        </div>
      </nav>

    </div>
	);
}

export default Navbar;