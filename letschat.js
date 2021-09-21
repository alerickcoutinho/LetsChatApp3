var firebaseConfig = {
    apiKey: "AIzaSyBnxTYw-GDPj8YDxJbWvJ2DwfavzJJiQLk",
    authDomain: "letschatapp-3da95.firebaseapp.com",
    databaseURL: "https://letschatapp-3da95-default-rtdb.firebaseio.com",
    projectId: "letschatapp-3da95",
    storageBucket: "letschatapp-3da95.appspot.com",
    messagingSenderId: "169107586300",
    appId: "1:169107586300:web:46b88f08d64f63adde6b79",
    measurementId: "G-WXCBH48387"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addUser()
{
    user_name = document.getElementById("user_name").value;

    
firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
});
    window.location = "letschat_room.html";
}