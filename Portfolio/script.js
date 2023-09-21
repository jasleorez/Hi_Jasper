document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const confirmationMessage = document.createElement("p");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);

        // Send form data to Google Apps Script
        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
        })
        .then(response => response.text())
        .then(data => {
            // Display confirmation message
            confirmationMessage.textContent = data;
            contactForm.appendChild(confirmationMessage);
            // Optionally, clear the form fields
            contactForm.reset();
        })
        .catch(error => console.error("Error submitting form: " + error));
    });
});