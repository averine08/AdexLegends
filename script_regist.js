function validasi(){
    let email = document.getElementById('email').value;
    let fullname = document.getElementById('fullname').value;
    let username = document.getElementById('username').value;
    let country = document.getElementById('country');
    let myCountry = country.options[country.selectedIndex].value;
    let male = document.getElementById('male').checked;
    let female = document.getElementById('female').checked;
    let none = document.getElementById('none').checked;
    let password = document.getElementById('password').value;
    let terms = document.getElementById('terms').checked;
    let error = document.getElementById('error');

    let checkEmail = email.substring(email.indexOf("@"), email.length);

    let checkFullname = true;
    for(let i = 0; i < fullname.length; i++){
        if(!isNaN(fullname[i])){
            checkFullname = false;
            break;
        }
    }

    let checkGender = false;
    if(male == true || female == true || none == true){
        checkGender = true;
    }

    let checkTerms = false;
    if(terms == true){
        checkTerms = true;
    }

    if(email == "" || fullname == "" || username == "" || myCountry == "" || checkGender == false || password == "" || checkTerms == false){
        error.innerText = "You need to fill all the box "
        return false;
    }

    else if(checkEmail != "@gmail.com"){
        error.innerText = "Email must end with @gmail.com";
        return false;
    }

    else if(fullname.length < 6){
        error.innerText = "Full name must be 6 character long or more";
        return false;
    }

    else if(checkFullname == false){
        error.innerText = "Full name must not include number";
        return false;
    }

    else if(username.length < 4){
        error.innerText = "User name must be 4 character long or more";
        return false;
    }

    else if(password.length < 6){
        error.innerText = "Password must be 6 character long or more";
        return false;
    }
}