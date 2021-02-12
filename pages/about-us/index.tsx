import Head from 'next/head'
import Header from 'components/Header'
import Footer from 'components/Footer'
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
          <div className='flex justify-center mt-10 flex-wrap p-5'>
            <div className={styles.card}>
              <a href='#'>
                <img className={styles.cardCover} src="/placeholder.png" alt="" />
              </a>
              <div className={styles.cardContent}>
                <h3>Fath <br /> Bror Haq-Hansson</h3>
                <h5>Executive Consultancy Manager</h5>
                <ul className='mt-5'>
                  <li>+46 70 235 75 10</li>
                  <li>Stockholm, Sweden</li>
                  <li>Fath@mail.com</li>
                </ul>
                <a href="#" className={styles.readMore}>Find out more</a>
              </div>
            </div>
            <div className={styles.card}>
              <a href='#'>
                <img className={styles.cardCover} src="/placeholder.png" alt="" />
              </a>
              <div className={styles.cardContent}>
                <h3>Fath <br /> Bror Haq-Hansson</h3>
                <h5>Executive Consultancy Manager</h5>
                <ul className='mt-5'>
                  <li>+46 70 235 75 10</li>
                  <li>Stockholm, Sweden</li>
                  <li>Fath@mail.com</li>
                </ul>
                <a href="#" className={styles.readMore}>Find out more</a>
              </div>
            </div>
            <div className={styles.card}>
              <a href='#'>
                <img className={styles.cardCover} src="/placeholder.png" alt="" />
              </a>
              <div className={styles.cardContent}>
                <h3>Fath <br /> Bror Haq-Hansson</h3>
                <h5>Executive Consultancy Manager</h5>
                <ul className='mt-5'>
                  <li>+46 70 235 75 10</li>
                  <li>Stockholm, Sweden</li>
                  <li>Fath@mail.com</li>
                </ul>
                <a href="#" className={styles.readMore}>Find out more</a>
              </div>
            </div>
            <div className={styles.card}>
              <a href='#'>
                <img className={styles.cardCover} src="/placeholder.png" alt="" />
              </a>
              <div className={styles.cardContent}>
                <h3>Fath <br /> Bror Haq-Hansson</h3>
                <h5>Executive Consultancy Manager</h5>
                <ul className='mt-5'>
                  <li>+46 70 235 75 10</li>
                  <li>Stockholm, Sweden</li>
                  <li>Fath@mail.com</li>
                </ul>
                <a href="#" className={styles.readMore}>Find out more</a>
              </div>
            </div>
            <div className={styles.card}>
              <a href='#'>
                <img className={styles.cardCover} src="/placeholder.png" alt="" />
              </a>
              <div className={styles.cardContent}>
                <h3>Fath <br /> Bror Haq-Hansson</h3>
                <h5>Executive Consultancy Manager</h5>
                <ul className='mt-5'>
                  <li>+46 70 235 75 10</li>
                  <li>Stockholm, Sweden</li>
                  <li>Fath@mail.com</li>
                </ul>
                <a href="#" className={styles.readMore}>Find out more</a>
              </div>
            </div>
            <div className={styles.card}>
              <a href='#'>
                <img className={styles.cardCover} src="/placeholder.png" alt="" />
              </a>
              <div className={styles.cardContent}>
                <h3>Fath <br /> Bror Haq-Hansson</h3>
                <h5>Executive Consultancy Manager</h5>
                <ul className='mt-5'>
                  <li>+46 70 235 75 10</li>
                  <li>Stockholm, Sweden</li>
                  <li>Fath@mail.com</li>
                </ul>
                <a href="#" className={styles.readMore}>Find out more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
