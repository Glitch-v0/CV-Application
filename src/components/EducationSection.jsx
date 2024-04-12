import '../styles/Education.css'
import { useState } from 'react';

export default function EducationSection() {
    const [education, setEducation] = useState({
        schoolNameInput: '',
        studyTitleInput: '',
        studyDateInput: ''
      });
    
    return (
        <fieldset>
            <legend>Education</legend>
            <label>
                School Name:
                <input
                type="text"
                name="schoolNameInput"
                placeholder="Your alma mater"
                value="Florida College"
                required />
            </label>
            <label>
                Title of Study:
                <input
                type="text"
                name="studyTitleInput"
                placeholder="Your fancy degree"
                value="Master of Music"
                required />
            </label>
            <label>
                Date of Completion:
                <input
                type="date"
                name="studyDateInput"
                value="2024-04-11"
                required/>
            </label>
        </fieldset>
    )
}

