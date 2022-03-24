function value() {
    var username =document.getElementById('email').value;
    var passWord= document.getElementById('password').value;
    if (username == "admin" && passWord == "user") {
        alert("Login successful");
        return false;
    } else {
        alert("please enter correct details");
    }
}