window.addEventListener('load', function() {
    document.getElementById("contactForm").addEventListener("submit", function(event){
      event.preventDefault();
  
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let subject = document.getElementById("subject").value;
      let message = document.getElementById("message").value;
  
      if(name == "" || email == "" || subject == "" || message == ""){
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Todos los campos son obligatorios',
        });
        return false;
      }
  
      if(!validateEmail(email)){
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ingresa un email válido',
        });
        return false;
      }
  
      // Combina el nombre y el asunto con un espacio
      let mailSubject = name + ' ' + subject;
  
      // Crea un enlace mailto y haz clic en él
      let link = document.createElement('a');
      link.href = 'mailto:federalfm99.1@gmail.com?subject=' + encodeURIComponent(mailSubject) + '&body=' + encodeURIComponent(message) + '&cc=' + encodeURIComponent(email);
      link.click();
    });
})
  
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}