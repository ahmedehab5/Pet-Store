var username;
var password;
var localUserName;
var localUserPassword;

document.getElementById("login_btn").onclick = function(e) {
    username = document.getElementById("username_txt").value;
    password = document.getElementById("password_txt").value;
    localUserName = localStorage.getItem('userName');
    localUserPassword = localStorage.getItem('email');

    if (username == "admin" && password == "admin") {
        window.location.href = ("admin.html");
    } else if (username == "user" && password == "user") {
        window.location.href = ("intro.html");
    } else
        alert("invalid login");

}