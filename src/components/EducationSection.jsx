import '../styles/Education.css'

export default function EducationSection({formData, setFormData}) {
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
          ...prevFormData,
          [name]: value
        }));
    }
    return (
        <fieldset>
            <legend>Education</legend>
            <label>
                School Name:
                <input
                type="text"
                name="schoolName"
                placeholder="Your alma mater"
                value={formData.schoolName}
                onChange={handleInputChange}
                required />
            </label>
            <label>
                Title of Study:
                <input
                type="text"
                name="studyTitle"
                placeholder="Your fancy degree"
                value={formData.studyTitle}
                onChange={handleInputChange}
                required />
            </label>
            <label>
                Date of Completion:
                <input
                type="date"
                name="studyDate"
                value={formData.studyDate}
                onChange={handleInputChange}
                required/>
            </label>
        </fieldset>
    )
}

