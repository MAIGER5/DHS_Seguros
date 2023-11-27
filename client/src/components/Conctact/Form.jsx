import React, { useState } from 'react'
import { postContactAction } from '../../Redux/Actions/postContactAction';
import { useDispatch } from 'react-redux';

export const Form = () => {

  const [ form, setForm ] = useState({
    names:"",
    lastName:"",
    company:"",
    email:"",
    phone:"",
    message:"",
    autorized:""
  })

  const dispatch = useDispatch()

  const handleInput = (event) =>{
    event.preventDefault();

    const property = event.target.name;
    const value = event.target.value;

    setForm({...form, [property]:value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postContactAction(form))
  }


  return (
    <form onSubmit={handleSubmit} className='col-10 border border-0 m-auto py-5'>
      {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
      <div className="row mb-2">
        <div className="col">
          <div className="form-outline">
            <input type="text" id="names" name='names' value={form.names} onChange={handleInput} className="form-control" required />
            <label className="form-label" htmlFor="names">Nombres</label>
          </div>
        </div>
        <div className="col">
          <div className="form-outline">
            <input type="text" id="lastName" name='lastName' value={form.lastName} onChange={handleInput} className="form-control" required />
            <label className="form-label" htmlFor="lastName">Apellidos</label>
          </div>
        </div>
      </div>

      {/* <!-- Text input --> */}
      <div className="row mb-2">
        <div className="col">
          <div className="form-outline">
            <input type="text" id="company" name='company' value={form.company} onChange={handleInput} className="form-control" required />
            <label className="form-label" htmlFor="company">Empresa</label>
          </div>
        </div>
        <div className="col">
          <div className="form-outline">
            <input type="text" id="email" name='email' value={form.email} onChange={handleInput} className="form-control" required />
            <label className="form-label" htmlFor="email">Correo Electónico</label>
          </div>
        </div>
      </div>

      {/* <!-- Number input --> */}
      <div className="form-outline mb-2">
        <input type="number" id="phone" name='phone' value={form.phone} onChange={handleInput} className="form-control" required/>
        <label className="form-label" htmlFor="phone">Teléfono o Móvil</label>
      </div>

      {/* <!-- Message input --> */}
      <div className="form-outline mb-4">
        <textarea className="form-control" id="message" name='message' value={form.message} onChange={handleInput} rows="2" required ></textarea>
        <label className="form-label" htmlFor="message">Información adicional</label>
      </div>

      {/* <!-- Checkbox --> */}
      <div className="form-check d-flex justify-content-center mb-4">
        <input className="form-check-input me-2 bg-success border-0" type="checkbox" name='autorized' value={form.autorized} onChange={handleInput} id="autorized" checked />
        <label className="form-check-label" htmlFor="form6Example8"> Autorizo el tratamiento de mis datos ingresados? </label>
      </div>

      {/* <!-- Submit button --> */}
      <button type="submit" className="btn btn-success btn-block mb-4">Enviar</button>
    </form>  
  )
}
