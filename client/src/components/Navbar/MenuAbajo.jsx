import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './Navbar.module.css'
import logoDhs from '../../../images/DHS.png'
import { Link } from 'react-router-dom';

export const MenuAbajo = () => {
  return (
      <nav className={`w-100 navbar navbar-expand-lg bg-body-none z-2 border border-0 ${styles.barraBorrosa}`} >
        <div className="container">
          <Link to={'/'} className='overflow-hidden d-felx d-lg-none d-xl-none' style={{width:'20%', height:'auto'}}>
            <img  src={logoDhs} className=' img-fluid'  alt="" />
          </Link>
          {/* <a className="navbar-brand" href="#">Navbar</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"   aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        {/* estas lineas en adelante son el menu que colapsa */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-0 me-auto mb-2 mb-lg-0 ">
              <li className="nav-item me-5">
                <a className="nav-link " aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link" href="#">Nosotros</a>
              </li>
              <li className="nav-item dropdown me-5">
                <a className="nav-link dropdown-toggle" href="#" role="button"    data-bs-toggle="dropdown" aria-expanded="false">
                  Productos
                </a>
                <ul className={`dropdown-menu ${styles.textoDropdownMenu}`}>
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown me-5">
                <a className="nav-link dropdown-toggle" href="#" role="button"    data-bs-toggle="dropdown" aria-expanded="false">
                  Servicios
                </a>
                <ul className={`dropdown-menu ${styles.textoDropdownMenu}`}>
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link" aria-disabled="true" href="#">DHS Plus</a>
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
