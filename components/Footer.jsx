import React from 'react'
import styles from 'styles/footer.module.scss'


const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContainer}>
      <div className={styles.logo}>
        <img src="/ArticulateIT-1a.png" alt="" />
      </div>
      <p>ArticulateIT © Copyright 2021</p>
    </div>
  </footer>
)

export default Footer