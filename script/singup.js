var firstName;
var lastName;
var userName;
var phoneNumber;
var email;
var password;


document.getElementById("signup_btn").onclick = function(e) {
    alert("Please enter")
    firstName = document.getElementById("firstName_txt").value;
    lastName = document.getElementById("lastName_txt").value;
    userName = document.getElementById("username_txt").value;
    phoneNumber = document.getElementById("phoneNumber_txt").value;
    email = document.getElementById("address_txt").value;
    password = document.getElementById("password_txt").value;

    localStorage.setItem('userName', userName);
    localStorage.setItem('password', password);
    console.log(userName);
    alert("Account Successfully created you can log in now");
}