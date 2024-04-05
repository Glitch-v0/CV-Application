import { useState } from 'react'
import '../styles/Form.css'
import EducationSection from './EducationSection.jsx'
import ExperienceSection from './ExperienceSection.jsx'
import GeneralInfoSection from './GeneralInfoSection.jsx'

export default function Form() {

  return (
    <div>
      <GeneralInfoSection/>
      <EducationSection/>
      <ExperienceSection/>
    </div>
  )
}
