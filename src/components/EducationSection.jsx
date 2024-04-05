import '../styles/Education.css'
import { useState } from 'react';
import {EditButton, SubmitButton} from './Buttons.jsx'

export default function EducationSection() {
    const [confirmed, toggleConfirmed] = useState(false);
    return (
        <fieldset>
            <legend>Education</legend>
            <label>
                School Name:
                <input type="text" name="schoolNameInput" placeholder="Your alma mater" />
            </label>
            <label>
                Title of Study:
                <input type="text" name="studyTitleInput" placeholder="Your fancy degree" />
            </label>
            <label>
                Date of Completion:
                <input type="date" name="studyDateInput"/>
            </label>
            <EditButton/>
            <SubmitButton onClick={toggleConfirmed}/>
        </fieldset>
    )
}

