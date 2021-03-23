import styles from 'styles/Home.module.scss'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Map from 'components/Map'
import Button from 'components/Button'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faLifeRing } from '@fortawesome/free-regular-svg-icons'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  const loadingElementStyle = { height: '100%' };
  const containerElementStyle = { height: '280px' };
  const mapElementStyle = { height: '100%' };
  return (
    <>
      <Head>
        <title>Articulate IT</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="img/png" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>

        <div className='container mx-auto'>
          <section className={styles.section}>
            <div className='flex flex-col-reverse md:flex-row'>
              <div className='flex flex-col flex-2 mt-auto mb-10 text-center'>
                <h2 className='mb-3'>Making Sense of Software</h2>
                <p className='mb-3'>Articulate IT is a Swedish Management Consultancy and IT Consultancy Firm<br /> dedicated to excellent delivery and long term customer relationships</p>
                <div className='flex mt-8'>
                  <Button label='Contact us' type='primary' modifiers='ml-auto' />
                  <Button modifiers='ml-5 mr-auto' label='Learn more' type='secondary' />
                </div>
              </div>
              {/* <div className='flex-1 flex justify-center mb-5 md:mb-0 md:ml-5'>
                <img src="/placeholder.png" alt="me" />
              </div> */}
            </div>
          </section>
        </div>
        <hr className={styles.divider} />
        {/* md:px-20 */}
        <div className='container mx-auto md:py-10 '>
          <section className={styles.section}>
            <p>Our management team works across the top companies and consultancies in the Nordics with proven track records and commitment to delivering client value. Our IT Consultants are specialists with deep expertise that can enable your business with rare and challenging to find skillsets. <br /> In 2021 we look to grow and have opportunity to take on new customers <br /> Looking for an excellent workplace? <a className='underline hover:text-black' href='/contact.html'>Get in touch!</a></p>
          </section>
        </div>
        <hr className={styles.divider} />
        <div className='container mx-auto md:py-10 md:px-20'>
          <section className={`${styles.section} text-center`}>
            <h2 className='mb-4'>Our Advantages</h2>
            <p className='w-5/6 mx-auto'>Making Sense of Software. <br /> We ensure all our staff are not only capable at delivering but at communicating so you our customer is comfortable at all stages of the process</p>
            <div className='flex flex-col md:flex-row justify-evenly mt-10 md:mt-20'>
              <div className={styles.usp}>
                <span className='mb-3'><FontAwesomeIcon icon={faBuilding} width='60' /></span>
                <h3 className='mb-5'>Business Results</h3>
                <p className='text-base'>We are a niche market company providing IT Leadership and specialists which can drive major value to your business</p>
              </div>
              <div className={styles.usp}>
                <span className='mb-3'><FontAwesomeIcon icon={faHeart} width='60' /></span>
                <h3 className='mb-5'>Love what you do!</h3>
                <p className='text-base'>Why do our clients love us? We bring work ethic and clever solutioning to provide fast time to value while having fun</p>
              </div>
              <div className={styles.usp}>
                <span className='mb-3'><FontAwesomeIcon icon={faLifeRing} width='60' /></span>
                <h3 className='mb-5'>To the Rescue!</h3>
                <p className='text-base'>Project in deep trouble, have a problem nobody else can solve? We are experts at taking deep red situations back to green. We believe in sticking with you through the tough times.</p>
              </div>
            </div>
          </section>
        </div>
        <hr className={styles.divider} />
        <div className='container mx-auto md:py-10'>
          <section className={`${styles.section} text-center`}>
            <h2 className='mb-4'>How We Work?</h2>
            <p className='w-3/6 mx-auto'>Establish customer trust by providing a transparency and clear explanations of our process.</p>
            <div className='flex flex-col md:flex-row justify-evenly mt-10 md:mt-20'>
              <div className={styles.usp}>
                <div className={styles.stepCirlce}>01</div>
                <h4 className='mb-5'>Understand the Business Challenge</h4>
                <p className='text-base'>"Helping make sense of Software" we turn clients ideas into reality by giving step by step guidance and expert advisory services by understanding your current situation and scope</p>
              </div>
              <div className={styles.usp}>
                <div className={styles.stepCirlce}>02</div>
                <h4 className='mb-5'>Pre-Analysis</h4>
                <p className='text-base'>Map out you our clients needs and provide clear insight and overview to next steps. What does your process look like today? How can it look like tomorrow?</p>
              </div>
              <div className={styles.usp}>
                <div className={styles.stepCirlce}>03</div>
                <h4 className='mb-5'>Prototype + MVP</h4>
                <p className='text-base'>Form working software as Proof of Concepts and help our customers form the planning necessary for success</p>
              </div>
              <div className={styles.usp}>
                <div className={styles.stepCirlce}>04</div>
                <h4 className='mb-5'>Solution</h4>
                <p className='text-base'>Delivering with excellence </p>
              </div>
            </div>
          </section>
        </div>
        {/* <hr className={styles.divider} />
        <div className='container mx-auto md:py-10 md:px-20'>
          <section className={`${styles.section} text-center`}>
            <h2 className='mb-4'>Our Clients</h2>
            <p className='text-auto'>A list of companies that have worked with us.</p>
            <div className='flex flex-col md:flex-row justify-evenly mt-10 md:mt-20'>
              <div className='mb-5 md:mb-0 md:mr-5'>
                <img className={styles.image} src="/placeholder.png" alt="" />
              </div>
              <div className='mb-5 md:mb-0 md:mr-5'>
                <img className={styles.image} src="/placeholder.png" alt="" />
              </div>
              <div className='mb-5 md:mb-0 md:mr-5'>
                <img className={styles.image} src="/placeholder.png" alt="" />
              </div>
              <div className='mb-5 md:mb-0 md:mr-5'>
                <img className={styles.image} src="/placeholder.png" alt="" />
              </div>
              <div className='mb-5 md:mb-0 md:mr-5'>
                <img className={styles.image} src="/placeholder.png" alt="" />
              </div>
            </div>
          </section>
        </div> */}
        <hr className={styles.divider} />
        <div className='container mx-auto'>
          <section className={`${styles.section} flex-row`}>
            <div className='flex-1 flex flex-col'>
              <h2 className='mb-4'>Contact Us</h2>
              <div className="flex flex-col">
                <h5>Malmö, Sweden</h5>
                <ul className={styles.contactInfo}>
                  <li className='flex mb-3'><span className='mr-3 flex'><FontAwesomeIcon icon={faBuilding} width='16' height='16' className='mt-2' /></span> <span>S:t Johannesgatan 2, 4th floor <br /> 211 46 Malmö, Sweden</span></li>
                  <li className='flex mb-3'><span className='mr-3 flex items-center'><FontAwesomeIcon icon={faEnvelope} width='16' /></span>info@articulateit.se</li>
                  <li className='flex mb-3'><span className='mr-3 flex items-center'><FontAwesomeIcon icon={faPhone} width='15' /></span>+46 733 915 815</li>
                </ul>
              </div>
            </div>
            {/* <div className={styles.map}>
              <Map
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDLHeANYUUoyNt5KivxyiQYER77zExvtac"
                loadingElement={<div style={loadingElementStyle} />}
                containerElement={<div style={containerElementStyle} />}
                mapElement={<div style={mapElementStyle} />}
              />
            </div> */}
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
