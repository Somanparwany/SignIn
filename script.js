
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
    alert ("please fill in your name");
    } valid = false;
    
    if (password.value === "") {
    alert ('please fill in your password');
    } valid = false;


});

// When username and password is filled in, it should redirect to Programmads Toolbox
function whenClicked() {
  var myBtn = document.getElementById('myButton');
  
  if (myBtn.clicked) {
    
  }
}


// if (screen.width < 960) { 

// document.write('<link href="error.css" type="text/css" rel="stylesheet"/>');

// } else { 

// document.write('<link href="stylesheet.css" type="text/css" rel="stylesheet"/>');

// } 


// const mq = window.matchMedia( "(min-width: 1200px)" );

// if (mq.matches) {
 //      alert("window width >= 1200px");
// } else {
   //  document.write('<link href="error.css" type="text/css" rel="stylesheet"/>');
 // }



//function mobileLayout() {
  // var browserWidth = getBrowserWidth();
  
  
//}


//function detectmob() { 
  //var errorSignIn = document.getElementsByClass('cardMobile');
//  var contentSignIn = document.getElementById('content');
// if( navigator.userAgent.match(/Android/i)
 //|| navigator.userAgent.match(/webOS/i)
//  || navigator.userAgent.match(/iPhone/i)
  //|| navigator.userAgent.match(/iPad/i)
//  || navigator.userAgent.match(/iPod/i)
  //) {
//    errorSignIn = true;
   //}
  //else {
//     errorSignIn = false;
    // contentSignIn = true;
  //}
 //}
 
 
 
 if (/Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
   document.getElementById("content").hidden = true;
   document.getElementById("error").hidden = false;

} else {
document.getElementById("error").hidden = true;
}


//var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
//if (isMobile) {
  //var errorSignIn = document.getElementById('cardMobile');
//  var contentSignIn = document.getElementById('content');
  
  //errorSignIn.style.visibility = 'visible';
  
//}else {
  //errorSignIn.style.visibility = 'hidden';
    // contentSignIn.style.visibility = 'visible';
//}

// function detectmob() {
  
//  var errorSignIn = document.getElementById('error');
  //var contentSignIn = docuemnt.getElementById('content');
  
// if (navigator.userAgent.match(/iPad/i))
//{
//  errorSignIn.style.visibility = 'visible';
//} else if(navigator.userAgent.match(/Android|webOS|iPhone|iPod|Blackberry/i) )
//{
  //errorSignIn.style.visibility = 'visible';
//} else {
  //  contentSignIn.style.visibility = 'hidden';
//}}


// function myFunction() {
  //var x = document.getElementById("myDIV");
  //if (x.style.display === "none") {
  //  x.style.display = "block";
//  } else {
  //  x.style.display = "none";
//  }
// }
