// Simple form submission handler for contact form
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const response = document.getElementById("form-response");

  if (form) {
      form.addEventListener("submit", (e) => {
          e.preventDefault();

          // Simple validation (already required in HTML)
          const name = form.name.value.trim();
          const email = form.email.value.trim();
          const message = form.message.value.trim();

          if (!name || !email || !message) {
              response.textContent = "Please fill in all fields.";
              response.style.color = "red";
              return;
          }

          // Here you would normally send the form data to a backend or service
          // Since GitHub Pages is static, we just simulate success
          response.textContent = "Thank you for your message! I will get back to you soon.";
          response.style.color = "green";
          form.reset();
      });
  }
});