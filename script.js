document.addEventListener("DOMContentLoaded", function() {
    alert("Bienvenue sur mon site !");
});
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector('.fade-in').classList.add('show');
    }, 500);
});
window.addEventListener("scroll", function() {
    let elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
        let position = el.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            el.classList.add('show');
        }
    });
});
document.querySelector("form").addEventListener("submit", function(event) {
    let nom = document.querySelector("[name='nom']").value;
    let email = document.querySelector("[name='email']").value;
    let message = document.querySelector("[name='message']").value;

    if (nom === "" || email === "" || message === "") {
        alert("Veuillez remplir tous les champs !");
        event.preventDefault();
    } else {
        alert("Message envoyé avec succès !");
    }
});
window.onload = function() {
    document.querySelector(".loader").classList.add("hidden");
};
document.querySelector(".menu-btn").addEventListener("click", function() {
    let menu = document.querySelector(".mobile-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
});
async function envoyerMessageIA(message) {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer TON_CLE_API"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: message }]
        })
    });

    const data = await response.json();
    console.log("Réponse IA :", data.choices[0].message.content);
}
const express = require("express");
const app = express();
const fetch = require("node-fetch");

app.post("/ia", async (req, res) => {
    let userMessage = req.body.message;
    let response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: { "Authorization": "Bearer TON_CLE_API" },
        body: JSON.stringify({ model: "gpt-3.5-turbo", messages: [{ role: "user", content: userMessage }] })
    });

    let data = await response.json();
    res.json({ message: data.choices[0].message.content });
});

app.listen(3000, () => console.log("Serveur IA démarré sur http://localhost:3000"));
function alignVideos(selectedVideo) {
    document.querySelectorAll(".video-item").forEach(video => {
        video.classList.remove("clicked");
    });
    selectedVideo.parentElement.classList.add("clicked");
}
// Script de déclenchement lors du scroll
window.addEventListener("scroll", function () {
    document.querySelectorAll(".animate-on-scroll").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("visible");
        }
    });
});
window.addEventListener("load", function () {
    document.getElementById("loader").style.display = "none";
});
function toggleVideo(id) {
  const block = document.getElementById(id);
  block.style.display = block.style.display === "none" ? "block" : "none";
}
// Exemple d'inscription (inscription.js)
function inscrireUtilisateur() {
  const nom = document.getElementById("nom").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  localStorage.setItem("utilisateurFJ", JSON.stringify({ nom, email, password }));
  alert("Inscription réussie !");
  window.location.href = "connexion.html";
}
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
    const nom = sessionStorage.getItem("connecteFJ");
    if (!nom) {
      window.location.href = "connexion.html";
    } else {
      document.getElementById("bienvenue").innerText = "Bienvenue, " + nom + " 👋";
    }

    function deconnexion() {
      sessionStorage.clear();
      window.location.href = "connexion.html";
    }


