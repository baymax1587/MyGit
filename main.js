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
	

 // Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');
  console.log(name);
  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  //document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  }).then(x=>{
  //document.getElementById('contactForm').reset();
  });
}
//function to get form values
function getInputVal(id){
	return document.getElementById(id).value;
}

//Save message to Firebase
function saveMessage(name,company,email,phone,message){
	var newMessageRef=messageRef.push();
	newmessageRef.set({
		name:name,
		company:company,
		email:email,
		phone:phone,
		message:message
	});
}