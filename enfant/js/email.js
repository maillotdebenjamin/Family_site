function openForm() {
  document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}

function sendEmail() {
  var email = document.getElementById("email").value;
  var name = document.getElementById("NOM").value;
  var prenom = document.getElementById("Prénom").value

  if (!email || !name || !prenom) {
    alert("Veuillez remplir tout les champs");
    return;
  }
  Email.send({
      Host : "smtp.elasticemail.com",
      Username : "adopte.unefamille@gmail.com",
      Password : "9CE8E6A8FC92950B0523C6A569A88683CE51",
      From : "adopte.unefamille@gmail.com",
      To : email,
      Subject : "Adopte une famille - Formulaire de contact",
      Body :"Bonjour " + prenom + " !" + "<br>" + "<br>" + "Nous vous remercions d'avoir soumis un formulaire de contact sur notre site Adopte Une famille." + "<br>" + "Nous apprécions votre fort interêt pour ce projet. Nous traiterons votre demande dans les plus bref délai et vous renverrons un mail pour pouvoir vous mettre en relation avec l'enfant." + "<br>" + "N'hésitez pas à nous recontacter si vous avez de plus amples questions." + "<br>" + "<br>" + "Cordialement," + "<br>" + "L'Équipe d'Adopte une famille."
  }).then(
  message => alert("Votre formulaire à bien été envoyé.")
  );
}