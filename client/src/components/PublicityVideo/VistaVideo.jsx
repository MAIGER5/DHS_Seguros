import React from 'react';
import styles from './PublicityVideo.module.css'


export const VistaVideo = () => {
  return (
    <div className={`${styles.vistaVideo} bg-dark w-75 h-75`} style={{position:'absolute'}} >
        <video controls poster='imagen_poster.jpg' className='w-100 h-100'>
            <source src='https://www.youtube.com/watch?v=ziDDZdeObvA' type='video/mp4' />
        </video>
    </div>
  )
}
