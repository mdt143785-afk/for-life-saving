
import { auth } from "./firebase.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";


window.register = function(){

let email = document.getElementById("email").value.trim();
let password = document.getElementById("password").value.trim();


if(!email || !password){
document.getElementById("msg").innerHTML =
"Email এবং Password দিন";
return;
}


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
error.code;

});

}



window.login = function(){

let email = document.getElementById("email").value.trim();
let password = document.getElementById("password").value.trim();


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
error.code;

});

}
