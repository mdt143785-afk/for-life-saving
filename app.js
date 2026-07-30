import { auth, db } from "./firebase.js";

import {
onAuthStateChanged,
signOut
}
from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

import {
doc,
setDoc,
getDoc
}
from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";


let userId="";


onAuthStateChanged(auth,(user)=>{

if(user){

userId=user.uid;

loadData();

}else{

window.location.href="login.html";

}

});



async function loadData(){

let ref=doc(db,"users",userId);

let snap=await getDoc(ref);


if(snap.exists()){

let data=snap.data();

total=data.total || 0;

target=data.target || 0;

history=data.history || [];

update();

}

}



async function saveFirebase(){

let ref=doc(db,"users",userId);


await setDoc(ref,{

total:total,

target:target,

history:history

});

}



function save(){

localStorage.setItem("total",total);

localStorage.setItem("target",target);

localStorage.setItem(
"history",
JSON.stringify(history)
);

saveFirebase();

update();

}



window.logout=function(){

signOut(auth)

.then(()=>{

window.location.href="login.html";

});

}
