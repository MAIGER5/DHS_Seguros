import React from 'react'
import styles from './PublicityVideo.module.css'
import { VideosColum } from './VideosColum'
import { TextColumn } from './TextColumn'
import { VistaVideo } from './VistaVideo'

export const PublicityVideo = () => {
  return (
    <div className={`${styles.imgBacground}` } style={{display:'flex', alignItems:'center', justifyContent:'space-evenly', position:'relative'}}>

      <VideosColum/>
      
      <TextColumn/>
      
      <VistaVideo/>

    </div>
  )
}
