import '../styles/Experience.css'

export default function ExperienceSection({formData, setFormData} ) {
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
          ...prevFormData,
          [name]: value
        }));
    }
    return (
        <fieldset>
        <legend>Relevant Experience</legend>
        <label>
            Company Name:
            <input
            type="text"
            name="companyName"
            placeholder="Great Product Inc."
            value={formData.companyName}
            onChange={handleInputChange}
            required/>
        </label>
        <label>
            Position Title:
            <input
            type="text"
            name="positionTitle"
            placeholder="Software Developer"
            value={formData.positionTitle}
            onChange={handleInputChange}
            required />
        </label>
        <label>
            Main Responsibilities:
            <input
            type="text"
            name="responsibilities"
            placeholder="Slapping keyboard keys"
            value={formData.responsibilities}
            onChange={handleInputChange}
            required />
        </label>
        <label>
            Start Date:
            <input
            type="date"
            name="jobStartDate"
            value={formData.jobStartDate}
            onChange={handleInputChange}
            required/>
        </label>
        <label>
            End Date (If current, put today's date):
            <input
            type="date"
            name="jobEndDate"
            value={formData.jobEndDate}
            onChange={handleInputChange}
            required/>
        </label>
    </fieldset>
    )
}

