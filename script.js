document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const confirmation = document.getElementById("confirmation");
  const error = document.getElementById("error");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Überprüfen Sie die Eingaben
    if (!name || !email || !message) {
      alert("Bitte füllen Sie alle Felder aus.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      return;
    }

    // Simulieren Sie die Serverkommunikation
    simulateServerCommunication(name, email, message);
  });

  function isValidEmail(email) {
    // Einfache Überprüfung der E-Mail-Adresse
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  function simulateServerCommunication(name, email, message) {
    // Simulieren Sie die Serverkommunikation (z.B. mit einer Verzögerung)
    setTimeout(function () {
      const success = Math.random() < 0.8; // Simuliere Erfolg in 80% der Fälle
      if (success) {
        contactForm.reset();
        confirmation.style.display = "block";
        error.style.display = "none";
      } else {
        confirmation.style.display = "none";
        error.style.display = "block";
      }
    }, 1000); // Hier könnte eine tatsächliche Serveranfrage erfolgen
  }
});
