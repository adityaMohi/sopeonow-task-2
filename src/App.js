import Timeline from './Components/Timeline.js'
import "./Styles/main.css";


const App = ()=> (
  <div className='main-container'>
    <div className='adm-modal'>
      <div className='header'>
        <div className='logo-section'>
          <img src='https://res.cloudinary.com/dp0azsrab/image/upload/v1679559205/male_1_profile_koabbp.png' className='logo-image' />
          <div className='name-alignment'>
            <h1 className='patient-name'>ETHAN WONG</h1>
            <p className='para-details'>Male, 60 yrs <span>&#40;</span>Senior Citizen<span>&#41;</span></p>
          </div>

        </div>
        <div className='right-side'>
          <p className='resident'>Resident</p>
          <p className='country'>Malaysia</p>
        </div>

      </div>
      <div className='details-section'>
        <div className='box-section'>
          <div className='box-section-first'>
            <p className='box-para'>Patient ID</p>
            <i class="fa-sharp fa-solid fa-address-card new-color"></i>
          </div>
          <p className='box-para-bottom'>5321344</p>

        </div>
        <div className='box-section'>
          <div className='box-section-first'>
            <p className='box-para'>Visit ID</p>
            <i class="fa-sharp fa-regular fa-calendar-days new-color"></i>
          </div>
          <p className='box-para-bottom'>2735678</p>

        </div>
        <div className='box-section'>
          <div className='box-section-first'>
            <p className='box-para'>Ward</p>
            <i class="fa-solid fa-building new-color"></i>
          </div>
          <p className='box-para-bottom'>Ward 2A</p>

        </div>

      </div>
      <div className='details-section'>
        <div className='box-section-2'>
          <div className='box-section-first'>
            <p className='box-para'>Bed <span><span>&#40;</span>F5-102<span>&#41;</span></span></p>
            <i class="fa-sharp fa-solid fa-bed-pulse new-color"></i>
          </div>
          <p className='box-para-bottom'>Single Bed</p>

        </div>
        <div className='box-section-2'>
          <div className='box-section-first'>
            <p className='box-para'>Payor</p>
            <i class="fa-solid fa-umbrella new-color"></i>
          </div>
          <p className='box-para-bottom'>AIA BHD <span>&#40;</span>INDIVIDUAL<span>&#41;</span></p>

        </div>

        
      </div>
      <div className='admission-journey'>
        <div className='admission-header'>
          <h1 className='heading-admission'>Admission Journey</h1>
          <div className='elepsed-container'>
            <p className='para-elepsed'>Elepsed Time</p>
            <button className='btn'>02:45</button>
          </div>
        </div>
        <Timeline/>

      </div>

    </div>

  </div>
  
  
)

export default App
