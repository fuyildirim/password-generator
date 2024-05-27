const passwordLength = document.querySelector("#passwordLength");
const passwordIncludeUppercase = document.querySelector("#passwordIncludeUppercase");
const passwordIncludeLowercase = document.querySelector("#passwordIncludeLowercase");
const passwordIncludeNumbers = document.querySelector("#passwordIncludeNumbers");
const passwordIncludeSymbols = document.querySelector("#passwordIncludeSymbols");
const btn = document.querySelector("button");
const p = document.querySelector("p");

btn.addEventListener("click", () => generatePassword(passwordLength, passwordIncludeUppercase, passwordIncludeLowercase, passwordIncludeNumbers, passwordIncludeSymbols));

function generatePassword(passwordLength, passwordIncludeUppercase, passwordIncludeLowercase, passwordIncludeNumbers, passwordIncludeSymbols) {
    let password = "";
    let randomString = "";

    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "@#%&/=-<>+";

    if (!passwordIncludeUppercase.checked && !passwordIncludeLowercase.checked && !passwordIncludeNumbers.checked && !passwordIncludeSymbols.checked) {
        alert("You need to include something!");
        return;
    }

    if (passwordIncludeUppercase.checked) {
        randomString += uppercase;
    }
    if (passwordIncludeLowercase.checked) {
        randomString += lowercase;
    }
    if (passwordIncludeNumbers.checked) {
        randomString += numbers;
    }
    if (passwordIncludeSymbols.checked) {
        randomString += symbols;
    }

    for (let i = 0; i < passwordLength.value; i++) {
        password += randomString[(Math.floor(Math.random() * randomString.length))];
    }
    showPassword(password);
}

function showPassword(password) {
    p.innerHTML = "Generated password: " + password;
    p.style.display = "block";
}
