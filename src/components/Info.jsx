import dron from '../assets/image/vecteezy_medicine-doctor-team-working-with-digital-medical-interface_10817125_13-min.jpg'

function Info() {
  return (
    <>
      <section className='py-5 info'>
        <div className='overlay'>
          <div className='row pt-5'>
            <div className='col'>
              <div className='container pt-5'>
                <h1>Our Vision</h1>
                <div className='p'>
                To revolutionize the field of medical diagnostics by developing 
                innovative and accessible solutions that empower individuals and healthcare providers to detect and 
                prevent life-threatening conditions.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 align-self-center text-center'>
              <h3>Patient-Centric Approach</h3>
              <p>
               At Novitas Diagnostics, we prioritize the well-being and convenience of 
patients. Our solutions are user-friendly, non-invasive, and designed to be easily accessible for regular 
monitoring and self-care. We empower individuals to take control of their health and make informed 
decisions.

              </p>
            </div>
            <div className='col-md-6 my-3'>
              <img
                src={dron}
                alt='drone'
                className='img-fluid'
                style={{ borderRadius: '15px' }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Info
