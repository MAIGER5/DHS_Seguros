import { Link } from 'react-router-dom';
import styles from './SegurosFamilia.module.css';

export const CardBenefits = () => {
  return (
    <div className='container'>

      <div className={`card mb-3 rounded-0 border border-0 ps-3 ${styles.gradiantTitle}`} >
        <div className="row g-0 align-middle ">
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title fs-3">Qué Beneficios brindan nuestros seguros? </h5>
              <p className="card-text d-none d-md-block">Descubre y conoce nuestros servicos de protección Familiar.</p>
              {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
            </div>
          </div>
          {/* <Link to={'/Contact'} className="col-md-3 border border-0 d-flex justify-content-center align-items-center text-decoration-none">
            <a href="#" className="btn btn-success mt-2 z-1 d-none d-md-block" >Contactanos</a>
          </Link> */}
        </div>
      </div>

      <div className="row ">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card border rounded-0 mb-3" >
            <div className="card-header">Beneficios</div>
            <div className="card-body">
              <h5 className="card-title">Seguro Vida</h5>
              <ul>
                <li>Hecho para Colombianos</li>
                <li>Montos de cobertura flexibles</li>
                <li>Beneficio por enfermedad terminal</li>
                <li>Aplicar facilmente por teléfono</li>
                <li>Aumento de cobertura anual (opcional)</li>
                <li>Pagas menos según tu estilo de vida</li>
                <li>Cualquier causa de muerte</li>
                <li>Protección inmediata</li>
                <li>Renovaciones automaticas</li>
                <li>Cancelación en cualquier momento</li>
              </ul>
            </div>
          </div>    
        </div>
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card border rounded-0 mb-3" >
            <div className="card-header">Beneficios</div>
            <div className="card-body">
              <h5 className="card-title">SeguroS Hogar</h5>
              <ul>
                <li>Hecho para Colombianos</li>
                <li>Montos de cobertura flexibles</li>
                <li>Protege hasta el 100% del valor de tu vivienda</li>
                <li>Actualización de la póliza en cualquier momento</li>
                <li>Protege los habitantes dentro de la vivienda</li>
                <li>Protege los bienes dentro de la vivienda</li>
                <li>Aumento de cobertura anual (opcional)</li>
                <li>Protección inmediata</li>
                <li>Renovaciones automaticas</li>
                <li>Cancelación en cualquier momento</li>
              </ul>
            </div>
          </div>    
        </div>
      </div>
    </div>
  )
}
