function generatePassword() {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#${}[]()";
    var passwordLength = 16;
    var password = "";
     for (var i=0; i <=passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber,randomNumber + 1)
    }
    var passwordTwo = "";
     for (var i=0; i <=passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        passwordTwo += chars.substring(randomNumber,randomNumber + 1)
    }
    document.getElementById("passOne").value = password
    document.getElementById("passTwo").value = passwordTwo

}
function copyPassword(){
    passOne.select();
    document.execCommand("copy")
}
function copyPassword2(){
    passTwo.select();
    document.execCommand("copy")
}
