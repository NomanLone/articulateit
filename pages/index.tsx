import styles from 'styles/Home.module.css'
import Header from 'components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='container mx-auto'>
      <Header />

      <main className={styles.main}>
        <div className='flex'>
          <div className='flex flex-col flex-1'>
            <h2>Making Sense of Software</h2>
            <p>Articulate IT is a Swedish Management Consultancy and IT Consultancy Firm dedicated to excellent delivery and long term customer relationships</p>
            <div className='flex'>
              <button>Contact us</button>
              <button>Learn more</button>
            </div>
          </div>
          <div className='flex-1 flex justify-center'>
            <Image src="/placeholder.png" alt="me" width={500} height={500} />
          </div>
        </div>
      </main>

    </div>
  )
}
