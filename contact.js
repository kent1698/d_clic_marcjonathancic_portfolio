// Validation du formulaire de contact

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Empêche l'envoi automatique

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const responseMessage = document.getElementById("responseMessage");

  // Vérifie si tous les champs sont remplis
  if (!name || !email || !subject || !message) {
    responseMessage.textContent = "⚠️ Veuillez remplir tous les champs.";
    responseMessage.style.color = "red";
    return;
  }

  // Vérifie la validité de l'adresse e-mail
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    responseMessage.textContent = "❌ Adresse e-mail invalide.";
    responseMessage.style.color = "red";
    return;
  }

  // Si tout est correct
  responseMessage.textContent = "✅ Merci " + name + "! Votre message a été envoyé avec succès.";
  responseMessage.style.color = "green";

  // Réinitialiser le formulaire
  document.getElementById("contactForm").reset();
});
