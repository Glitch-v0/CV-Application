import '../styles/Experience.css'
import { useState } from 'react';
import {EditButton, SubmitButton} from './Buttons.jsx'

export default function ExperienceSection() {
    const [confirmed, toggleConfirmed] = useState(false);
    return (
        <fieldset>
        <legend>Relevant Experience</legend>
        <label>
            Company Name:
            <input type="text" name="companyNameInput" placeholder="Great Product Inc." />
        </label>
        <label>
            Position Title:
            <input type="text" name="positionTitleInput" placeholder="Software Developer" />
        </label>
        <label>
            Main Responsibilities:
            <input type="text" name="responsibilitiesInput" placeholder="Slapping keyboard keys" />
        </label>
        <label>
            Start Date:
            <input type="date" name="startDate"/>
        </label>
        <label>
            End Date (If still there, put today's date):
            <input type="date" name="endDate"/>
        </label>
        <EditButton/>
        <SubmitButton/>
    </fieldset>
    )
}

