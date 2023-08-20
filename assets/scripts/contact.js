document.addEventListener("DOMContentLoaded", function () {
  let contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    alert("Message has been sent successfully!");
    // Clear the form fields after successful submission
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  });
});
