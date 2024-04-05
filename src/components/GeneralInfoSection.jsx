import '../styles/GeneralInfo.css'
import { useState } from 'react';

export default function GeneralInfoSection() {
    const [confirmed, toggleConfirmed] = useState(false);
    return (
        <fieldset>
            <legend>General Info</legend>
            <label>
                First Name:
                <input
                type="text"
                name="firstName"
                placeholder="John"
                required/>
            </label>

            <label>
                Last Name:
                <input
                type="text"
                name="lastName"
                placeholder="Henry"
                required/>
            </label>
            <label>
                Email:
                <input
                type="email"
                name="email"
                placeholder="JohnHenry@gmail.com"
                required/>
            </label>
            <label>
                Phone:
                <input
                type="tel"
                name="phone"
                placeholder="111-222-3333"
                required/>
            </label>
    
        </fieldset>
    )
}

