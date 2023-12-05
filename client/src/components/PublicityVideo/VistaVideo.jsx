import React, { useState } from 'react';
import styles from './PublicityVideo.module.css'
import ReactPlayer from 'react-player'


export const VistaVideo = ({url, enviarDatos2}) => {

  const [close, setClose] = useState(false);

  const handleClose = () => {
    const statePadre = ""
    setClose(true)
    enviarDatos2(statePadre);
    
  }

  return (
    <div className={` ${close? 'd-none': ""}  ${styles.vistaVideo} bg-dark w-75 h-75`} style={{position:'absolute'}} >
      <p onClick={handleClose} className={`position-absolute top-0 end-0 me-3 mt-5 ri text-dark fs-5 btn border border-2 `  } >X</p>
      {
        !close
        ? <ReactPlayer
          url={url}
          width={'100%'}
          height={'100%'}
          controls
          />
        : ""
      
      }

    </div>
  )
}
