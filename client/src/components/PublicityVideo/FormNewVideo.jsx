import React, { useState } from 'react';
import styles from './PublicityVideo.module.css'
import { useDispatch } from 'react-redux';
import { postVideoAction } from '../../Redux/Actions/postVideoAction';


export const FormNewVideo = () => {

  const [ form, setForm ] = useState({
    title:"",
    date:"",
    image:"",
    url:"",
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
    dispatch(postVideoAction(form))
  }

  return (
    <div className={`${styles.imgBacgroundForm}` } style={{display:'flex', alignItems:'center', justifyContent:'space-evenly', position:'relative'}}>

      <form onSubmit={handleSubmit} className='col-4 border border-0 m-auto py-5'>
        {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
        <div className="row mb-2">
          <div className='my-5 fs-3 text-dark text-center fw-semibold'>Adicionar un Nuevo Video</div>
          <div className="col">
            <div className="form-outline">
              <input type="text" id="title" name='title' value={form.title} onChange={handleInput} className="form-control" required />
              <label className="form-label" htmlFor="title">Titulo(max 30 letras)</label>
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <input type="text" id="date" name='date' value={form.date} onChange={handleInput} className="form-control" required />
              <label className="form-label" htmlFor="date">Fecha(dd/mm/aa)</label>
            </div>
          </div>
        </div>

        {/* <!-- Text input --> */}
        <div className="row mb-2">
          <div className="col">
            <div className="form-outline">
              <input type="text" id="image" name='image' value={form.image} onChange={handleInput} className="form-control" required />
              <label className="form-label" htmlFor="image">URL(Imagen)</label>
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <input type="text" id="url" name='url' value={form.url} onChange={handleInput} className="form-control" required />
              <label className="form-label" htmlFor="url">URL(YouTube)</label>
            </div>
          </div>
        </div>


        {/* <!-- Submit button --> */}
        <button type="submit" className="btn btn-success btn-block mb-4">Enviar</button>
      </form>  

    </div>
  )
}
