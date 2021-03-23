import React from 'react';
import Head from 'next/head'
import Header from 'components/Header'
import Footer from 'components/Footer'

export default function OurServices() {
  return (
    <div className='flex flex-full flex-col'>
      <Head>
        <title>Articulate IT</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="img/png" href="/favicon.ico" />
      </Head>
      <Header />
      <main className='flex flex-full flex-col items-center justify-center'>
        <h2>Coming soon</h2>
      </main>
      <Footer />
    </div>
  )
}