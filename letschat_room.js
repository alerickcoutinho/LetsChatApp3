var firebaseConfig = {
      apiKey: "AIzaSyBNqet7k5zVYBy2_0PcHWnEYOMYENnM1KQ",
      authDomain: "kwitter-a38f1.firebaseapp.com",
      databaseURL: "https://kwitter-a38f1-default-rtdb.firebaseio.com",
      projectId: "kwitter-a38f1",
      storageBucket: "kwitter-a38f1.appspot.com",
      messagingSenderId: "605365925314",
      appId: "1:605365925314:web:6bc0c6bd3ee34dc5f0d25b",
      measurementId: "G-66MLHXFNC6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      rome_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(rome_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", rome_name);
      window.location = "letschat_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "letschat_page.html";
}
