import '../styles/GeneralInfo.css'

export default function GeneralInfoSection({formData, setFormData}) {
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
          ...prevFormData,
          [name]: value
        }));
    }
    return (
        <fieldset>
            <legend>General Info</legend>
            <label>
                First Name:
                <input
                type="text"
                name="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={handleInputChange}
                required/>
            </label>

            <label>
                Last Name:
                <input
                type="text"
                name="lastName"
                placeholder="Henry"
                value={formData.lastName}
                onChange={handleInputChange}
                required/>
            </label>
            <label>
                Email:
                <input
                type="email"
                name="email"
                placeholder="JohnHenry@gmail.com"
                value={formData.email}
                onChange={handleInputChange}
                required/>
            </label>
            <label>
                Phone:
                <input
                type="tel"
                name="phone"
                placeholder="111-222-3333"
                value={formData.phone}
                onChange={handleInputChange}
                required/>
            </label>
    
        </fieldset>
    )
}

