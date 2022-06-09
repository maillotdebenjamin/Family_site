var nodemailer = require('nodemailer');

function send_mail() {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'adopte.unefamille@gmail.com',
          pass: 'kvwkygpzuldbfkoz'
        }
      });
      var mailOptions = {
        from: 'adopte.unefamille@gmail.com',
        to: 'etheve123@gmail.com',
        subject: 'Formulaire - Adopte une Famille',
        text: "Nous vous remercions d'avoir soumis un formluaire de contact sur notre site Adopte Une famille.\n \nNous apprecions votre fort interet pour ce projet. Nous traiterons votre demande dans les plus bref délai et vous renverrons un mail par la suite.\n\nN'hésitez pas a nous recontacter si vous avez de plus amples questions.\nCordialement,\nL'Équipe d'Adopte une famille."
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}
