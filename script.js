const form = document.getElementById("contact-form");
const confirmation = document.getElementById("confirmation");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission
  confirmation.style.display = "block"; // Show confirmation message
  form.reset(); // Clear the form
});
