const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInupt = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

var msg = '';

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(nameInput.value === ""){
         msg = 'Por favor, preencha o seu nome!';
         alert(msg);
         return false;
    }

    if(emailInupt.value === "" || !isEmailValid(emailInupt.value)){
         msg = 'Por favor, preencha o seu email!';
         alert(msg);
         return false;
    }
 
    if(!validatePassword(passwordInput.value,6)){
        msg = 'A senha deve conter no minimo 6 digito.';
        alert(msg);
        return false;
   }
    if(jobSelect.value === ""){
        msg = 'Por favor, selecione sua situação';
        alert(msg);
        return false;
   }
    if(messageTextarea.value === ""){
        msg = 'Por favor, preencha com sua mensagem!'
        alert(msg);
        return false;
   }

    form.submit();
});

function isEmailValid(email){
    //cria um regex para validar email
    const emailRegex = new RegExp(
        /^[a-zA-Z._-]+@[a-zA-Z._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)){
        return true;
    }

    return false;
};

function validatePassword(password,minDigits) {
    if (password.length >= minDigits) {
        return true;
    }
    return false;            
}