import '../styles/Education.css'
import { useState } from 'react';

export default function EducationSection() {
    const [confirmed, toggleConfirmed] = useState(false);
    return (
        <fieldset>
            <legend>Education</legend>
            <label>
                School Name:
                <input
                type="text"
                name="schoolNameInput"
                placeholder="Your alma mater"
                required />
            </label>
            <label>
                Title of Study:
                <input
                type="text"
                name="studyTitleInput"
                placeholder="Your fancy degree"
                required />
            </label>
            <label>
                Date of Completion:
                <input
                type="date"
                name="studyDateInput"
                required/>
            </label>
        </fieldset>
    )
}

