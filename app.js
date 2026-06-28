import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
}
from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

const firebaseConfig = {

    apiKey: "AIzaSyBTbC_K0OgWqZDRamr2cLIYVtG6Ih7q21E",
    authDomain: "palabradiaria-d1e95.firebaseapp.com",
    projectId: "palabradiaria-d1e95",
    storageBucket: "palabradiaria-d1e95.firebasestorage.app",
    messagingSenderId: "142735832072",
    appId: "1:142735832072:web:1579000a673683f09b4dbd"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const login=document.getElementById("login");

const appDiv=document.getElementById("app");

const usuario=document.getElementById("usuario");

const mensaje=document.getElementById("mensaje");

document
.getElementById("btnLogin")
.onclick=async()=>{

    try{

        await signInWithEmailAndPassword(

            auth,

            email.value,

            password.value

        );

    }

    catch(error){

        mensaje.innerHTML=error.message;

    }

};

document
.getElementById("btnLogout")
.onclick=()=>{

    signOut(auth);

};

onAuthStateChanged(auth,user=>{

    if(user){

        login.style.display="none";

        appDiv.style.display="block";

        usuario.innerHTML="Hola "+user.email;

    }

    else{

        login.style.display="block";

        appDiv.style.display="none";

    }

});
