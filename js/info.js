// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCzHZQzm88GplaLiaNAFlX3XW6_JuVwEFM",
    authDomain: "blanca-fe2b0.firebaseapp.com",
    databaseURL: "https://blanca-fe2b0.firebaseio.com",
    projectId: "blanca-fe2b0",
    storageBucket: "blanca-fe2b0.appspot.com",
    messagingSenderId: "999383782150",
    appId: "1:999383782150:web:6be340c7147a4e922b0487",
    measurementId: "G-HZ6915PPL7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function createTable() {
  var table = document.getElementById('table_body');

  var refEmail = "messages";
  var emailsRef = firebase.database().ref(refEmail);
  emailsRef.on('value', data => {
    var alldata = data.val();
    var keys = Object.keys(alldata);
    
    for (var i = 0; i < keys.length; i++) {
      var index = keys[i];
	  
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = alldata[index].name;
        cell2.innerHTML = alldata[index].company;
        cell3.innerHTML = alldata[index].email;
		cell4.innerHTML = alldata[index].message;
    }
  }, errEmailsData);
}

function errEmailsData(err) {
  console.log("Error!! id: ");
  console.log(err);
}

createTable();
