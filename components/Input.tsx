import React, { useState } from 'react'
import styles from 'styles/input.module.scss'

const Input = (props) => {
  const [touched, setTouched] = useState(!!props.defaultValue)
  const [inputValue, setInputValue] = useState(props.defaultValue || '')

  const handleChange = (value: string) => {
    setInputValue(value)
    props.handleInputChange()(value)
  }

  const handleBlur = () => {
    if (props.handleValidation) {
      props.handleValidation()(inputValue)
    }
    setTouched(true)
  }

  const handleFocus = () => {
    setTouched(false)
    if (props.resetError) {
      props.resetError()
    }
  }

  const valid = (touched && inputValue) ? (!props.error) : null

  return (
    <div className={`${styles.inputField} ${props.modifiers ? props.modifiers : ''}`}>
      {props.label && <label htmlFor={props.name} className={styles.inputLabel}>{props.label}</label>}
      <div className={styles.inputWrapper}>
        <input
          id={props.name}
          className={styles.input}
          placeholder={props.placeholder}
          type={props.type}
          readOnly={props.readOnly}
          disabled={props.readOnly}
          value={inputValue}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </div>
  )
}

export default Input