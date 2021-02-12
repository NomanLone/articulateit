import React from 'react'
import styles from '../styles/header.module.scss'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  console.log(router.pathname );
  return (
    <header className={styles.header}>
      <div className={styles.logo}><h5>ArticulateIT</h5></div>
      <nav>
        <ul className={styles.links}>
          <li className={`${styles.link} ${router.pathname === '/' ? styles.active: ''}`}><a href='/'>Home</a></li>
          <li className={`${styles.link} ${router.pathname === '/Services' ? styles.active: ''}`}><a href='/Services'>Our Services</a></li>
          <li className={`${styles.link} ${router.pathname === '/about-us' ? styles.active: ''}`}><a href='/about-us'>About us</a></li>
          <li className={`${styles.link} ${router.pathname === '/contact' ? styles.active: ''}`}><a href='/contact'>Contact</a></li>
        </ul>
      </nav>
      <input className={styles.input} type="text" />
    </header>
  )
}

export default Header