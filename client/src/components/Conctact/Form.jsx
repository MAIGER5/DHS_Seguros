import React from 'react'

export const Form = () => {
  return (
    <form className='col-10 border border-0 m-auto py-4'>
      {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
      <div className="row mb-4">
        <div className="col">
          <div className="form-outline">
            <input type="text" id="form6Example1" className="form-control" />
            <label className="form-label" htmlFor="form6Example1">Nombres</label>
          </div>
        </div>
        <div className="col">
          <div className="form-outline">
            <input type="text" id="form6Example2" className="form-control" />
            <label className="form-label" htmlFor="form6Example2">Apellidos</label>
          </div>
        </div>
      </div>

      {/* <!-- Text input --> */}
      <div className="form-outline mb-4">
        <input type="text" id="form6Example3" className="form-control" />
        <label className="form-label" htmlFor="form6Example3">Empresa</label>
      </div>

      {/* <!-- Text input --> */}
      {/* <div className="form-outline mb-4">
        <input type="text" id="form6Example4" className="form-control" />
        <label className="form-label" htmlFor="form6Example4">Address</label>
      </div> */}

      {/* <!-- Email input --> */}
      <div className="form-outline mb-4">
        <input type="email" id="form6Example5" className="form-control" />
        <label className="form-label" htmlFor="form6Example5">Correo electrónico</label>
      </div>

      {/* <!-- Number input --> */}
      <div className="form-outline mb-4">
        <input type="number" id="form6Example6" className="form-control" />
        <label className="form-label" htmlFor="form6Example6">Teléfono</label>
      </div>

      {/* <!-- Message input --> */}
      <div className="form-outline mb-4">
        <textarea className="form-control" id="form6Example7" rows="4"></textarea>
        <label className="form-label" htmlFor="form6Example7">Información adicional</label>
      </div>

      {/* <!-- Checkbox --> */}
      <div className="form-check d-flex justify-content-center mb-4">
        <input className="form-check-input me-2 bg-success border-0" type="checkbox" value="" id="form6Example8" checked />
        <label className="form-check-label" htmlFor="form6Example8"> Autorizo el tratamiento de mis datos ingresados? </label>
      </div>

      {/* <!-- Submit button --> */}
      <button type="submit" className="btn btn-success btn-block mb-4">Enviar</button>
    </form>  
  )
}
