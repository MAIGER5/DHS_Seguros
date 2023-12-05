import React, { useState } from 'react'
import styles from './PublicityVideo.module.css'
import { VideosColum } from './VideosColum'
import { TextColumn } from './TextColumn'
import { VistaVideo } from './VistaVideo'

export const PublicityVideo = () => {

  const [estadoHijo, setEstadoHijo] = useState("");

  const manejarDatosHijo1 = (datos) =>{
    setEstadoHijo(datos);
    console.log(datos)
  }

  const manejarDatosHijo2 = (datos) =>{
    setEstadoHijo(datos);
  }

  return (
    <div className={`${styles.imgBacground}` } style={{display:'flex', alignItems:'center', justifyContent:'space-evenly', position:'relative'}}>

      <VideosColum enviarDatos={manejarDatosHijo1}/>
      
      <TextColumn/>

      {estadoHijo? <VistaVideo url={estadoHijo} enviarDatos2={manejarDatosHijo2}/>: "" }
      
    

    </div>
  )
}
