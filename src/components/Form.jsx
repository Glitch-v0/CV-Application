import { useState } from 'react'
import '../styles/Form.css'
import {EditButton, SubmitButton} from './Buttons.jsx'
import EducationSection from './EducationSection.jsx'
import ExperienceSection from './ExperienceSection.jsx'
import GeneralInfoSection from './GeneralInfoSection.jsx'

function Form() {
  const [generalSectionActive, setGeneralState] = useState(false)
  const [educationSectionActive, setEducationState] = useState(false)
  const [experienceSectionActive, setExperienceState] = useState(false)

  return (
    <div>
      <GeneralInfoSection/>
      <EditButton onClick={() => setGeneralState(!generalSectionActive)}/>
      <SubmitButton/>

      <EducationSection/>
      <EditButton onClick={() => setEducationState(!educationSectionActive)}/>
      <SubmitButton/>

      <ExperienceSection/>
      <EditButton onClick={() => setExperienceState(!experienceSectionActive)}/>
      <SubmitButton/>
    </div>
  )
}

export default Form()
