import { useState } from 'react'
import Head from 'next/head'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Input from 'components/Input'
import styles from 'styles/contact.module.scss'
import emailjs from 'emailjs-com'
import Button from 'components/Button'


export default function Home() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [messageSent, setMessageSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const handleInputChange = (fieldName) => (value) => {
    setValues({
      ...values,
      [fieldName]: value
    })
  }

  function sendEmail(e) {
    console.log(values);
    setMessageSent(true)
    e.preventDefault()
    setLoading(true)
    emailjs.sendForm('service_3drt2ll', 'template_8u1cwcj', e.target, 'user_O7DllPLQaIRQPFSX1lLrL')
      .then((result) => {
        setLoading(false)
        setTimeout(function () {
          setMessageSent(false)
        }, 10000);
      }, (error) => {
        console.log(error.text);
      });
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
        <div className='container mx-auto flex justify-center items-center flex-auto relative'>
          {messageSent && <div class={`${styles.alert} bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md`} role="alert">
            <div className="flex">
              {loading ?
                <>
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Processing</span>
                </> :
                <>
                  <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
                  <div>
                    <p className="font-bold">Message recieved</p>
                    <p className="text-sm">We will get back to you as soon as possible.</p>
                  </div>
                </>}
            </div>
          </div>}
          <div className={styles.module}>
            <header className='mb-10'>
              <h3>Contact us</h3>
              <p>Please fill out the form</p>
            </header>
            <div className={styles.content}>
              <form onSubmit={sendEmail}>
                <Input handleInputChange={() => handleInputChange('name')} modifiers='mb-5' label='Full Name *' />
                <Input handleInputChange={() => handleInputChange('email')} modifiers='mb-5' label='E-mail *' />
                <Input handleInputChange={() => handleInputChange('message')} modifiers='mb-5' label='Message' />
                <input disabled={messageSent || (!values.email && !values.message && !values.name)} type="submit" className={styles.button} value='submit' />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
