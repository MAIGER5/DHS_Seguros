import quienesSomos from '../../../images/quienesSomos.png'
import filosofia from '../../../images/filosofia.png'
import social from '../../../images/social.png'

export const InformacionNosotros = () => {
  return (
    <div className='container position-relative pt-5 px-0'>
      <div className="card rounded- bg-dark border border-0 ps-3 py-2" >
        <div className="row g-0 align-middle ">
          <div className="col-md-10">
            <div className="card-body">
              <h5 className="card-title fs-2 mb-4">Sobre Nosotros </h5>
              <p className="card-text">En DHS AGENCIA DE SEGUROS LTDA, generamos la mejor asesoría y respaldo a nuestros clientes, es así que por esta razón representamos a las mejores aseguradoras del país. <br /> <br />

              Nuestro capital técnico y humano cuenta con la idoneidad para el manejo de riesgos corporativos y conexos, por lo que uno de nuestros objetivos principales es convertirnos en aliados desde la intermediación garantizando a nuestros clientes la mejor oferta comercial. Para esto auditamos constantemente y mantenemos los canales de comunicación entre las aseguradoras y nuestros clientes..</p>
            </div>
          </div>
          <div className="col-md-2 border border-0 d-flex justify-content-center align-items-center">
          <a href="#" className="btn btn-success mt-2 z-1" role="button" data-bs-toggle="button">Contactanos</a>
          </div>
        </div>
      </div>

      <div className="container row row-cols-1 row-cols-md-3 pt-5 m-auto">
        <div className="col pb-5 pb-md-0">
          <div className="card">
            <img src={quienesSomos} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">¿Quiénes Somos?</h5>
              <p className="card-text">DHS LTDA. es una empresa intermediadora de seguros con mas de 10 años en el mercado, somos referente en la región de antioquia y proximamente en toda Colombia. Hacemos parte de un grupo empresarial conexo, prestos a brindar apoyo y soporte a tus necesidades</p>
            </div>
          </div>
        </div>
        <div className="col pb-5 pb-md-0">
          <div className="card">
            <img src={social} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Nuestra Filosofía</h5>
              <p className="card-text">Nuestra filosofía se centra en la excelencia en el servicio al cliente, la transparencia en todas nuestras operaciones y un compromiso inquebrantable con la protección y el bienestar de nuestros asegurados. Buscamos la construcción de un futuro seguro y próspero para nuestros clientes.</p>
            </div>
          </div>
        </div>
        <div className="col pb-5 pb-md-0">
          <div className="card">
            <img src={filosofia} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Responsabilidad Social</h5>
              <p className="card-text">En DHS LTDA., hemos implementado diversas iniciativas de responsabilidad social que reflejan nuestro compromiso. Colaboramos con organizaciones locales en proyectos de educación, salud y el medio ambiente. Fomentamos la inclusión y diversidad en nuestro equipo de trabajo.</p>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}
