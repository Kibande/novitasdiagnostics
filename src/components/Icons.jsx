import {
  FaAmericanSignLanguageInterpreting,
  FaBuilding,
  FaDesktop,
} from 'react-icons/fa'

function Icons() {
  return (
    <section>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-4 text-center mb-5'>
            <FaAmericanSignLanguageInterpreting size={90} className='mb-3' />
            <h3>Precision</h3>
            <p>
            By continuously learning from vast datasets, we strive to deliver the most 
precise and reliable results for early disease detection.
            </p>
          </div>
          <div className='col-md-4 text-center mb-5'>
            <FaBuilding size={90} className='mb-3' />
            <h3>Research</h3>
            <p> We actively collaborate with leading research institutions to ensure our 
diagnostic solutions are at the forefront of medical innovation</p>
          </div>
          <div className='col-md-4 text-center mb-5'>
            <FaDesktop size={90} className='mb-3' />
            <h3>Data Processing</h3>
            <p>
            We leverage the power of machine learning algorithms and data 
            analysis techniques.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Icons
