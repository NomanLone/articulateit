import React, { useEffect, useState } from 'react'
import styles from 'styles/modal.module.scss'

const Modal = (props) => {

  //set body overflow hidden
  return (
    <div id={styles.modalContainer} className={props.active ? styles.one : styles.out} onClick={() => props.setActive(false)}>
      <div className={styles.modalBackground}>
        <div className={styles.modal}>
          <h2>I'm a Modal</h2>
          <p>Hear me roar.</p>
          <svg className="modal-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
            <rect x="0" y="0" fill="none" width="226" height="162" rx="3" ry="3"></rect>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Modal