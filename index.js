function copyEmail() {
    // Get the text field
    let copyEmail = document.getElementById('Email');

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyEmail.textContent);

    // Alert the copied text
    alert("Copied the text: " + copyEmail.textContent);
}

function copyPhone() {
    // Get the text field
    let copyPhone = document.getElementById('Phone');

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyPhone.textContent);

    // Alert the copied text
    alert("Copied the text: " + copyPhone.textContent);
}