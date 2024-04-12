import '../styles/Experience.css'

export default function ExperienceSection() {
    return (
        <fieldset>
        <legend>Relevant Experience</legend>
        <label>
            Company Name:
            <input
            type="text"
            name="companyNameInput"
            placeholder="Great Product Inc."
            value="Great Product Inc."
            required/>
        </label>
        <label>
            Position Title:
            <input
            type="text"
            name="positionTitleInput"
            placeholder="Software Developer"
            value="Software Developer"
            required />
        </label>
        <label>
            Main Responsibilities:
            <input
            type="text"
            name="responsibilitiesInput"
            placeholder="Slapping keyboard keys"
            value="Slapping keyboard keys"
            required />
        </label>
        <label>
            Start Date:
            <input
            type="date"
            name="startDate"
            value="1991-04-05"
            required/>
        </label>
        <label>
            End Date (If still there, put today's date):
            <input
            type="date"
            name="endDate"
            value="2024-04-05"
            required/>
        </label>
    </fieldset>
    )
}

