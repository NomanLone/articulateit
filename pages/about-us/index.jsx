import Head from 'next/head'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faBuilding } from '@fortawesome/free-solid-svg-icons'
import styles from 'styles/about-us.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Articulate IT</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="img/png" href="/favicon.ico" />
      </Head>
      <Header />
      <div className='bg-gray-100 flex-auto'>
        <div className='container mx-auto'>
          <h2 className='text-center pt-10'>Meet our staff</h2>
          <div className='flex justify-evenly mt-10 flex-wrap p-5'>
            <div className={styles.card}>
              <img className={styles.cardCover} src="/Fath.jpg" alt="" />
              <div className={styles.cardContent}>
                <h3>Bror Haq-Hansson</h3>
                <h5>Owner - Principal Consultant</h5>
                <h6>IT Management, PMO, Complicance</h6>
                <ul className='mt-5'>
                  <li className='flex'><span className='mr-3 flex items-center'><FontAwesomeIcon width='16' icon={faPhone} /></span> +46 733 915 815</li>
                  <li className='flex'><span className='mr-3 flex items-center'><FontAwesomeIcon width='16' icon={faBuilding} /></span> SE/DK – Malmö/Copenhagen</li>
                  <li className='flex'><span className='mr-3 flex items-center'><FontAwesomeIcon width='16' icon={faEnvelope} /></span> bror@articulateIT.se</li>
                </ul>
              </div>
            </div>
            <div className={styles.card}>
              <img className={styles.cardCover} src="/Ehsan.jpg" alt="" />
              <div className={styles.cardContent}>
                <h3>Ehsan Zonoz</h3>
                <h5>Partner - Principal Consultant</h5>
                <h6>IT Management, Delivery Management</h6>
                <ul className='mt-5'>
                  <li className='flex'><span className='mr-3 flex items-center'><FontAwesomeIcon width='16' icon={faPhone} /></span> +46 70 7477750</li>
                  <li className='flex'><span className='mr-3 flex items-center'><FontAwesomeIcon width='16' icon={faBuilding} /></span> SE – Stockholm</li>
                  <li className='flex'><span className='mr-3 flex items-center'><FontAwesomeIcon width='16' icon={faEnvelope} /></span> Ehsan@articulateIT.se</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
