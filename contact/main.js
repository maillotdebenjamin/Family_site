function sendEmail_faq() {
  var email = document.getElementById("email").value;
  var name = document.getElementById("lname").value;
  var prenom = document.getElementById("fname").value
  var sujet = document.getElementById("country").value

  if (!email || !name || !prenom || !sujet) {
    alert("Veuillez remplir tout les champs");
    return;
  }
  Email.send({
      Host : "smtp.elasticemail.com",
      Username : "adopte.unefamille@gmail.com",
      Password : "9CE8E6A8FC92950B0523C6A569A88683CE51",
      From : "adopte.unefamille@gmail.com",
      To : email,
      Subject : "Adopte une famille - " + sujet + " .",
      Body :"Bonjour " + prenom + " " + name + " !" + "<br>" + "<br>" + "Nous accusons bonne réception de votre formulaire de contact à propos de [" + sujet + "]." + "<br>" + "Nous traiterons votre formulaire dans les plus bref délai et vous répondrons par la suite." + "<br>" + "N'hésitez pas à nous recontacter si vous avez d'autres questions." + "<br>" + "<br>" + "Cordialement," + "<br>" + "L'Équipe d'Adopte une famille."
  }).then(
    message => alert("Votre demande d'information à bien été envoyer !")
  );
}