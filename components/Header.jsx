import React from 'react'
import styles from '../styles/header.module.scss'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  console.log(router.pathname);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/ArticulateIT-1a.png" alt="" />
      </div>
      <nav className='mx-auto'>
        <ul className={styles.links}>
          <li className={`${styles.link} ${router.pathname === '/' ? styles.active : ''}`}><a href='/'>Home</a></li>
          <li className={`${styles.link} ${router.pathname === '/about-us' ? styles.active : ''}`}><a href='/about-us'>About us</a></li>
          <li className={`${styles.link} ${router.pathname === '/our-services' ? styles.active : ''}`}><a href='/our-services'>Our services</a></li>
          <li className={`${styles.link} ${router.pathname === '/contact' ? styles.active : ''}`}><a href='/contact'>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header