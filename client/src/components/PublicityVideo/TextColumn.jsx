import React from 'react';
import styles from './PublicityVideo.module.css'

export const TextColumn = () => {
  return (
    <div className={`col-6 ps-0 ${styles.cotendedorTextVideo}`}>
      <div className="card bg-transparent border border-0">
        <div className="card-body ">
          <h1 className={`card-title text-dark fw-bold ${styles.h1TextVideo}`} >
           Mantente Informado con Nuestros Videos de Actualidad
          </h1>
        </div>
      </div>
    </div>
)
}
