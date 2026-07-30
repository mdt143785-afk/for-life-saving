import { auth } from "./firebase.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";


window.register = function(){

let email =
document.getElementById("email").value;

let password =
document.getElementById("password").value;
console.log("Email:", email);
console.log("Password length:", password.length);

createUserWithEmailAndPassword(
auth,
email,
password
)

.then(()=>{

document.getElementById("msg").innerHTML =
"✅ Account তৈরি হয়েছে";

})

.catch((error)=>{

document.getElementById("msg").innerHTML =
error.message;

});

}



window.login = function(){

let email =
document.getElementById("email").value;

let password =
document.getElementById("password").value;


signInWithEmailAndPassword(
auth,
email,
password
)

.then(()=>{

window.location.href="index.html";

})

.catch((error)=>{

document.getElementById("msg").innerHTML =
error.message;

});

}
