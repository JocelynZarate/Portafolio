const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_2tgx1ke';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send';
      swal('Email Sent!', 'Message sent successfully', "success");
    }, (err) => {
      btn.value = 'Send';
      alert(JSON.stringify(err));
    });
});