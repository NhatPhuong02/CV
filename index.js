function copyEmail() {
    // Get the text field
    var copyEmail = document.getElementById("Email");

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyEmail.value);

    // Alert the copied text
    alert("Copied the text: " + copyEmail.value);
}

function copyPhone() {
    // Get the text field
    copyPhone = document.getElementById("Phone");

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyPhone.value);

    // Alert the copied text
    alert("Copied the text: " + copyPhone.value);
}