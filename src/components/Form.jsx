import { useState } from 'react'
import '../styles/Form.css'
import EducationSection from './EducationSection.jsx'
import ExperienceSection from './ExperienceSection.jsx'
import GeneralInfoSection from './GeneralInfoSection.jsx'
import {EditButton, SubmitButton} from './Buttons.jsx'

export default function Form() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "Guy",
    lastName: "Dude",
    email: "mrdude@email.com",
    phone: "111-222-3333",
    schoolName: "Fancy College",
    studyTitle: "Education Education",
    studyDate: "2009-09-01",
    companyName: "Great Product INC",
    positionTitle: "Software Developer",
    responsibilities: "Slapping keyboard keys",
    jobStartDate: "2015-08-01",
    jobEndDate: "2024-04-15"
  });


  const handleSubmit = (event) => {
    event.preventDefault()
    let appForm = document.getElementById('application-form')
    appForm.className = 'submitted' // triggers transition to fade off screen
    setTimeout(() => {
      setSubmitted(true)
    }, 1500) //the trigger to remove form and instead show submitted data
  };

  const handleEdit = () => {
    let submittedData = document.getElementById('submitted-data')
    submittedData.className = '' // triggers transition to fade off screen
    setTimeout(() => {
      setSubmitted(false)
    }, 1500) //the trigger to remove data and instead show form
  };

  //Conditional Display Logic on whether or not the form has been submitted
  let display;
  if (submitted){
    display = 
    <div id='submitted-data' className=''>
    <FormResults formData={formData}/>
    <EditButton onClick={handleEdit}/>
    </div>
  } else {
    display = 
    <div id='application-form' className=''>
      <h1>CV Application</h1>
      <GeneralInfoSection formData={formData} setFormData={setFormData}/>
      <EducationSection formData={formData} setFormData={setFormData}/>
      <ExperienceSection formData={formData} setFormData={setFormData}/>
      <SubmitButton/>
    </div>
  }

  return (
    <form onSubmit={handleSubmit} id='main-form-container'>
      {display}
    </form>
  )
}

function FormResults({formData, submitted}) {
  return (
    <div id='formResults' className={submitted ? 'submitted' : ''}>
      <h1>Your submission:</h1>
      <div id='generalInfo'>
        <hr />
        <h2>Personal Info</h2>
        <p>Hello, {formData.firstName} {formData.lastName}!</p>
        <p>We're delighted to have your information and will be reaching out to you shortly at <b>{formData.phone}</b> or <b>{formData.email}</b>.</p>
      </div>
      <div id='educationInfo'>
        <hr />
        <h2>Education</h2>
        <p>It is neat that you studied at {formData.schoolName}.</p>
        <p>You pursued {formData.studyTitle} and completed it on {formData.studyDate}.</p>
      </div>
      <div id="experienceInfo">
        <hr />
        <h2>Experience</h2>
        <p>During your time at {formData.companyName}, you worked as a {formData.positionTitle}.</p>
        <p>Your responsibilities included: {formData.responsibilities}.</p>
        <p>You started {formData.jobStartDate} and finished {formData.jobEndDate}.</p>
      </div>
    </div>
  )
}