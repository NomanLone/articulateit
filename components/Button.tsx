import React from 'react'
import styles from 'styles/button.module.scss'

const types = {
  primary: 'primary',
  secondary: 'secondary'
}

interface IProps {
  label: string,
  type: keyof typeof types,
  handleClick?: Function,
  modifiers?: string
  active?: boolean
  disabled?: boolean
}

const Button = (props : IProps) => {
  return (
    <button
      className={`${styles.button} ${styles[types[props.type]]} ${props.modifiers ? props.modifiers : ''} ${props.active ? styles.addonActive : ''}`}
      onClick={(e) => props.handleClick(e)}
      type='button'
      disabled={props.disabled}
    >
      {props.label}
    </button>
  )
}

export default Button
