import { useState } from 'react'
import '../styles/Form.css'
import EducationSection from './EducationSection.jsx'
import ExperienceSection from './ExperienceSection.jsx'
import GeneralInfoSection from './GeneralInfoSection.jsx'
import {EditButton, SubmitButton} from './Buttons.jsx'

export default function Form() {
  const [submitted, setSubmitted] = useState(false);

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
    <FormResults/>
    <EditButton onClick={handleEdit}/>
    </>
  } else {
    display = 
    <>
    <GeneralInfoSection/>
    <ExperienceSection/>
    <EducationSection/>
    <SubmitButton/>
    </>
  }

  return (
    <form onSubmit={handleSubmit}>
      CV Application
      {display}
    </form>
  )
}

function FormResults() {
  return (
    <div>
      <h1>Your submission:</h1>
      <h2>General Info</h2>
      <p></p>
      <h2>Education</h2>
      <p>Your School: </p>
      <p>You Studied: </p>
      <p>Date finished: </p>
    
      <h2>Experience</h2>
      <p></p>
    </div>
  )
}