
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyC9iJlqMej8ieRhMqUcpN4Y-yShEwjhaSo",
      authDomain: "kwitter-b781f.firebaseapp.com",
      databaseURL: "https://kwitter-b781f-default-rtdb.firebaseio.com",
      projectId: "kwitter-b781f",
      storageBucket: "kwitter-b781f.appspot.com",
      messagingSenderId: "1009850887490",
      appId: "1:1009850887490:web:47dbd983a67ccee792acdb",
      measurementId: "G-0NCNWF99MW"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
