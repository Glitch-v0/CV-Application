export default function EducationSection({formData, setFormData}) {
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
          ...prevFormData,
          [name]: value
        }));
    }
    return (
        <div id='education section' className='section-container'>
            <hr />
            <div id='education-title-container' className='form-section-title-container'>
                <h2 id='education-title' className='form-section-title'>Education</h2>
            </div>
            <div className='label-container'>
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
            </div>
        </div>
    )
}

