// Exemple de connexion (connexion.js)
function connecterUtilisateur() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const compte = JSON.parse(localStorage.getItem("utilisateurFJ"));

  if (compte && compte.email === email && compte.password === password) {
    sessionStorage.setItem("connecteFJ", compte.nom);
    window.location.href = "tableau-de-bord.html";
  } else {
    alert("Email ou mot de passe incorrect.");
  }
}
