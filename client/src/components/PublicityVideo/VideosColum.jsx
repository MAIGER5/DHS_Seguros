import React, { useEffect, useState } from 'react'
import styles from './PublicityVideo.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { VistaVideo } from './VistaVideo'
import { getVideosAction } from '../../Redux/Actions/getVideosAction'



export const VideosColum = ({enviarDatos}) => {

  const dispatch = useDispatch()
  const allVideos = useSelector((state)=>state.Videos)

  const [open, setOpen] = useState("");


  useEffect (()=>{
    dispatch(getVideosAction())
  },[dispatch])



  return (
    <div className='col-4 px-5 py-5 border border-0 rounded-5 ' style={{maxHeight:'75vh', marginTop:'80px', backgroundColor: 'rgba(0,0,0,0.30)'}}>
      <div className={`${styles.barraVertical} rounded-3 pe-4`} style={{ overflowY: 'auto', maxHeight: '60vh' }} >

        {
          allVideos.map((video)=>(
            <div className="card mb-3 rounded-4 " style={{maxWidth: '500px'}} key={video.idVideo}>
              <div className="row g-0">
                <div className="col-md-4 overflow-hidden">
                  <img src={video.image} className="rounded-start-4 " alt="..." style={{width:'90%', height:'100%', objectFit:'cover'}}/>
                  {console.log(video.image)}
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title fs-6">{video.title}</h5>
                    <p className="card-text p-0 m-0" style={{fontSize:'13px'}}>{video.date}</p>
                    <p onClick={()=>{ const nuevosDatos = video.url; setOpen(nuevosDatos);  enviarDatos(nuevosDatos)}} className='text-decoration-none btn m-0 p-0 text-success fw-bold' style={{fontSize:'13px'}}>Ver video</p>
                  </div>
                </div>
              </div>
            </div>  
          ))
        }
        
      </div>
    </div>
)
}
