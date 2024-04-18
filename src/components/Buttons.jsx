export function EditButton({ onClick }) {
    return (
        <div>
            <button id="editButton" onClick={onClick}>Edit Form</button>
        </div>
    )
}

export function SubmitButton() {
    return (
        <div>
            <button id="submitButton">Submit Form</button>
        </div>
    )
}