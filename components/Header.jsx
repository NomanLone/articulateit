import React from 'react'
import styles from '../styles/header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>ArticulateIT</div>
      <nav>
        <ul className={styles.links}>
          <li className={styles.link}>Home</li>
          <li className={styles.link}>Our Services</li>
          <li className={styles.link}>About us</li>
          <li className={styles.link}>Contact</li>
        </ul>
      </nav>
      <input className={styles.input} type="text" />
    </header>
  )
}

export default Header