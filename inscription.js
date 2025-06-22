// Exemple d'inscription (inscription.js)
function inscrireUtilisateur() {
  const nom = document.getElementById("nom").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  localStorage.setItem("utilisateurFJ", JSON.stringify({ nom, email, password }));
  alert("Inscription réussie !");
  window.location.href = "connexion.html";
}
