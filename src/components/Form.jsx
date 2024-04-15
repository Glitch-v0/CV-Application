import { useState } from 'react'
import '../styles/Form.css'
import EducationSection from './EducationSection.jsx'
import ExperienceSection from './ExperienceSection.jsx'
import GeneralInfoSection from './GeneralInfoSection.jsx'
import {EditButton, SubmitButton} from './Buttons.jsx'

export default function Form() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "Nathan",
    lastName: "Jones",
    email: "njonessurvey@gmail.com",
    phone: "256-460-2181",
    schoolName: "Florida College",
    studyTitle: "Music Education",
    studyDate: "2009-09-01",
    companyName: "Great Product INC",
    positionTitle: "Software Developer",
    responsibilities: "Slapping keyboard keys",
    jobStartDate: "2015-08-01",
    jobEndDate: "2024-04-15"
  });


  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleEdit = () => {
    setSubmitted(false);
  };

  //Conditional Display Logic on whether or not the form has been submitted
  let display;
  if (submitted){
    display = 
    <>
    <FormResults formData={formData}/>
    <EditButton onClick={handleEdit}/>
    </>
  } else {
    display = 
    <>
    <h1>CV Application</h1>
    <GeneralInfoSection formData={formData} setFormData={setFormData}/>
    <ExperienceSection formData={formData} setFormData={setFormData}/>
    <EducationSection formData={formData} setFormData={setFormData}/>
    <SubmitButton/>
    </>
  }

  return (
    <form onSubmit={handleSubmit} id='application-form'>
      {display}
    </form>
  )
}

function FormResults({formData}) {
  return (
    <div>
      <h1>Your submission:</h1>
      <h2>General Info</h2>
      <p>Hello, {formData.firstName} {formData.lastName}!</p>
      <p>We're delighted to have your information and will be reaching out to you shortly at {formData.phone} or {formData.email}.</p>
      <h2>Education</h2>
      <p>It is neat that you studied at {formData.schoolName}.</p>
      <p>You pursued {formData.studyTitle} and completed it on {formData.studyDate}.</p>
    
      <h2>Experience</h2>
      <p>During your time at {formData.companyName}, you worked as a {formData.positionTitle}.</p>
      <p>Your responsibilities included: {formData.responsibilities}.</p>
      <p>You started {formData.jobStartDate} and finished {formData.jobEndDate}.</p>
    </div>
  )
}