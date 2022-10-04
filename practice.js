var firebaseConfig = {
    apiKey: "AIzaSyC-rSv39E4ohmHP0iKpSSqeP-l88dnMnzY",
    authDomain: "kwitter-23318.firebaseapp.com",
    databaseURL: "https://kwitter-23318-default-rtdb.firebaseio.com",
    projectId: "kwitter-23318",
    storageBucket: "kwitter-23318.appspot.com",
    messagingSenderId: "500546491433",
    appId: "1:500546491433:web:c2ff8c1091566ce1f5f838",
    measurementId: "G-XD2CHRTCKG"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}