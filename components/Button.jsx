import React from 'react'
import styles from 'styles/button.module.scss'


const Button = (props) => {
  const types = {
    primary: 'primary',
    secondary: 'secondary'
  }

  return (
    <button
      className={`${styles.button} ${styles[types[props.type]]} ${props.modifiers ? props.modifiers : ''} ${props.active ? styles.addonActive : ''}`}
      onClick={props.handleClick}
      type={props.buttontype || 'button'}
      disabled={props.disabled}
    >
      {props.label}
    </button>
  )
}

export default Button
