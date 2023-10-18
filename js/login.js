
let email = document.forms['form']['email'];
let password = document.forms['form']['password'];

let email_error = document.getElementById('email_error');
let password_error = document.getElementById('password_error');

email.addEventListener('input', email_Verify);
password.addEventListener('input', password_Verify);

function email_Verify(){
    //&& (email.value == 'gmail.com'))
    if (email.value.length >= 8){
        email.style.border = '1px solid silver';
        email_error.style.display = "none";
        return true;
    }
}

function password_Verify(){
    if (password.value.length >= 10){
        password.style.border = '1px solid silver';
        password_error. style.display = 'none';
        return false;
    }
}

function validated(){
    if(email.value.length < 8){
        email.style.border = '1px solid red';
        email_error.style.display = 'display';
        email.focus();
        email_Verify();
        return false;
        
    }
    if(password.value.length < 10){
        password.style.border = '1px solid red';
        password_error.style.display = 'display';
        password.focus();
        password_Verify();
        return false;
    }
}
 
function login(){
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    if (email == "" || pass == "" ){
        alert("Please enter a valid address");

    }else{
        let login_arr = [];
        login_arr.push({email: email});
        sessionStorage.setItem("login", JSON.stringify(login_arr));
        location.replace("index.html");
    }
}

