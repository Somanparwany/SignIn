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


// Username or Password = not filled in 

var button = document.getElementById('myButton');

  button.addEventListener('click', function validateInput() {
    
    var password = document.getElementById('password');
    var username = document.getElementById('username');
    
    if (username.value === "") {
   //   username.style.background = "white";
    alert ("Please fill in your name");
     //username.innerHTML = "Empty Mail o Username";
    } valid = false;
    
    if (password.value === "") {
    alert ('Please fill in your password');
    } valid = false;


});

// When username and password is filled in, it should redirect to Programmads Toolbox
function whenClicked() {
  var myBtn = document.getElementById('myButton');
  
  if (myBtn.clicked) {
    
  }
}


 
 


