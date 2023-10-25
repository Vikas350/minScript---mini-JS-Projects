const passwordBox = document.getElementById('password');
const length = 12;

const genBtn = document.querySelector('.btn');
const copyClick = document.querySelector('.copy');

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_-+={!}[]|</~>?";

const allChars = upperCase + lowerCase + number + symbol; 

//Logic
/*
Math.random() -> generate random number in decimal
Math.random() * upperCase.length -> generate random number between 0 to max length(26)
Math.floor(Math.random() * upperCase.length) -> conert in the integer form between 0-26
upperCase[Math.floor(Math.random() * upperCase.length)] -> get the letter at that index number -> it is random
*/

const createPassword = () => {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    // console.log(password);

    while(password.length < length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
}

genBtn.addEventListener('click', createPassword);

// createPassword();

//copy button code
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}

copyClick.addEventListener('click', copyPassword);