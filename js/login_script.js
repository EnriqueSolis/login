/*
    @author: Cesar Enrique Solis Vazquez
    @date: 12/10/2021
*/

var userGeneral = "admin";
var passwordGeneral = "admin123";

document.getElementById("button-login").addEventListener("click", userPassword);
document.getElementById("forgot-password").addEventListener("click", showFile);

function userPassword(){
    var user = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (user === userGeneral && password === passwordGeneral){
        document.getElementsByClassName("login-title")[0].style.display = "none";
        document.getElementsByClassName("login-box")[0].style.display = "none";
        document.getElementsByClassName("home")[0].style.display = "block";
    }else{
        document.getElementsByClassName("password-incorrect")[0].style.display = "block";
        showFile();
    }
}

function showFile(){
    var tag = document.createElement("p");
    var text = document.createTextNode("Consulte el archivo instrucciones.txt");
    tag.appendChild(text);
    document.getElementsByClassName("password-incorrect")[0].appendChild(tag);
}