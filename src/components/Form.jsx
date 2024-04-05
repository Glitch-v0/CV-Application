import { useState } from 'react'
import '../styles/Form.css'
import EducationSection from './EducationSection.jsx'
import ExperienceSection from './ExperienceSection.jsx'
import GeneralInfoSection from './GeneralInfoSection.jsx'
import {EditButton, SubmitButton} from './Buttons.jsx'

export default function Form() {
  const [active, toggleActiveState] = useState(true);

  return (
    <form>
      <fieldset>
      <legend>CV Application</legend>
      <GeneralInfoSection/>
      <EducationSection/>
      <ExperienceSection/>
      <SubmitButton type="submit"/>
      <EditButton/>
    </fieldset>
    </form>
  )
}
