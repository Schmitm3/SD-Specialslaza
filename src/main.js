function validate () {
    var userName=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if (userName == "admin" && password == "admin")
    {
        window.location = "./pages/specialsmap.html"
        return false;
    }
    else
    {
        alert("Login failed, please verify Username and Password...")
    }
}