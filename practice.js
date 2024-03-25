const config = {
    apiKey: "AIzaSyCP05hvFhCLMYOWS3X0cA9hh8KsGhJdBVo",
    authDomain: "practica-84dc3.firebaseapp.com",
    projectId: "practica-84dc3",
    storageBucket: "practica-84dc3.appspot.com",
    messagingSenderId: "405904037058",
    appId: "1:405904037058:web:1f835a3f5acfedda14175b",
    measurementId: "G-226KV92JWY"
  };

firebase.initializeApp(config);

//AÑADE LOS ENLACES FIREBASE
function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding User"
    });
}