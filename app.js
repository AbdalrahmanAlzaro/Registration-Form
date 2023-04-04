// // Function to validate form inputs
// function validateForm(username, password, email, phone) {
//     let isValid = true;
    
//     // Check username for spaces
//     if (/\s/.test(username)) {
//       alert("Username cannot contain spaces");
//       isValid = false;
//     }
    
//     // Check password length and complexity&& password.length < 8
//     if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W){8,}$/.test(password) ) {
//       alert("Password must be at least 8 characters long and contain at least 1 number, uppercase letter, and special character");
//       isValid = false;
//     }
    
//     // Check email format
//     if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/.test(email)) {
//       alert("Invalid email format");
//       isValid = false;
//     }
    
//     // Check phone format
//     if (!/^07\d{8}$/.test(phone)) {
//       alert("Phone number must be 10 digits starting with 07");
//       isValid = false;
//     }
    
//     return isValid;
//   }
  
//   // Function to check if username exists in session storage
//   function checkUsername(username) {
//     const users = JSON.parse(sessionStorage.getItem("users")) || [];                            
//     return users.some(user => user.username === username);
//   }


// //   let arrData=[];
// // if(localStorage.arrData != null){
// //     arrData=JSON.parse(localStorage.arrData);
// //   }
  
//   // Function to save form data into session storage
//   function saveFormData(event) {
//     event.preventDefault();
    
//     // Get form inputs
//     const username = document.getElementById("username").value.trim();
//     const password = document.getElementById("password").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const phone = document.getElementById("phone").value.trim();
    
//     // Check if username already exists in session storage
//     if (checkUsername(username)) {
//       alert("Username already exists");
//       return;
//     }
    
//     // Validate form inputs
//     if (!validateForm(username, password, email, phone)) {
//       return;
//     }
    
//     // Save form data into session storage
//     const user = { username, password, email, phone };
//     const users = JSON.parse(sessionStorage.getItem("users")) || [];
//     users.push(user);
//     sessionStorage.setItem("users", JSON.stringify(users));
    
//     alert("Form data saved successfully");
    
//     // Clear form inputs
//     document.getElementById("username").value = "";
//     document.getElementById("password").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("phone").value = "";
//   }
  
//   // Attach submit event listener to form
//   const form = document.getElementById("registration-form");
//   form.addEventListener("submit", saveFormData);
  












let arrData=[];

if(sessionStorage.arrData != null){
    arrData=JSON.parse(sessionStorage.arrData);
  }
 
let userName;
let userPassword;
let userEmail;
let userNumber;

let DataCollected=document.getElementById("registration-form");

DataCollected.addEventListener("submit",function(event){
event.preventDefault();

  userName=event.target.username.value;
  userPassword=event.target.password.value;
  userEmail=event.target.email.value;
  userNumber=event.target.phone.value;
 
  if( validateName() &&  validatePassword() && validateEmail() && validateNumber()){
		arrData.push(userName);
		sessionStorage.setItem('arrData',JSON.stringify(arrData) );
		// DataCollected.reset(); 
  }

 
  
});


function validateName() {
	let Name = username.toLowerCase();
	if (Name == "") {
	  alert("Name must be filled out");
	  return false;

	}else if(Name.includes(" ")){
		alert("Name must be filled with no spaces");
		return false;	
	} else if(arrData.includes(userName)){

		alert("Username already exists. welcome "+userName);
		return false;
	}
	
return true;

  }


  function validatePassword(){
	let iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";
	let password = password;
	if (password.length<8) {
		alert ("The password length must be more than 8 characters");
		return false;
			}
	for (let i = 0; i < password.length; i++) {
		if (iChars.indexOf(password.charAt(i)) != -1) {
		alert ("The password has special characters. \nThese are not allowed.\n");
		return false;
			}
		}	
		return true;
	}   

	function validateEmail(){
		let iChars = "!#$%^&*()+=-[]\\\';,/{}|\":<>?";
		let Email = email.toLowerCase();
		 if(!Email.includes("@")  || !Email.includes(".com") ){
			alert("Please enter a valid Email EX.. majdi@gamil.com");
			return false;
		}
		for (let i = 0; i < Email.length; i++) {
			if (iChars.indexOf(Email.charAt(i)) != -1) {
			alert ("The Email has special characters. \nThese are not allowed.\n");
			return false;
				}
			}
			return true;
		}   

		function validateNumber(){
			let iChars = "!#$%^&*()+=-[]\\\';,/{}|\":<>?@.";
			let Number = phone;
  
			 if( !(Number.includes("07"))    || !(Number.length ==10)  ){
				alert("Please enter a valid number ex. 0799855850");
				return false;
			}
			
			for (let i = 0; i < Number.length; i++) {
				if (iChars.indexOf(Number.charAt(i)) != -1) {
				alert ("The Number has special characters. \nThese are not allowed.\n");
				return false;
					}
				}
		return true;
			}   


































