// If on mobile or desktop

 if (/Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
   document.getElementById("content").hidden = true;
   document.getElementById("error").hidden = false;

} else {
document.getElementById("error").hidden = true;
}



// Eye icon hidden or visible

function viewPS() {
  

var passwordInput = document.getElementById('password');
var eye = document.getElementById('eye');

  if (passwordInput.type == 'password') {
    passwordInput.type='text';
    eye.className = 'fa fa-eye-slash';
  } else {
    passwordInput.type = 'password';
    eye.className= "fa fa-eye";
  }

}







 
 


