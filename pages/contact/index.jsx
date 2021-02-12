import { useState } from 'react'
import Head from 'next/head'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Input from 'components/Input'
import styles from 'styles/contact.module.scss'
import Button from 'components/Button'


export default function Home() {
  const [values, setValues] = useState()

  const handleInputChange = (fieldName) => (value) => {
    setValues({
      ...values,
      [fieldName]: value
    })
  }
  return (
    <>
      <Head>
        <title>Articulate IT</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="img/png" href="/favicon.ico" />
      </Head>
      <Header />
      <div className='md:bg-gray-100 flex-auto flex p-5'>
        <div className='container mx-auto flex justify-center items-center flex-auto'>
          <div className={styles.module}>
            <header className='mb-10'>
              <h3>Contact us</h3>
              <p>Please fill out this form</p>
            </header>
            <div className={styles.content}>
              <Input modifiers='mb-5' label='Full Name *' />
              <Input modifiers='mb-5' label='E-mail *' />
              <Input modifiers='mb-5' label='Message' />
              <Button label='submit' handleClick={() => { }} type='primary' />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
