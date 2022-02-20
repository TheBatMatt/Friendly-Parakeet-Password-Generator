/* Password Length  */

function getPasswordSize(){ 
  var defaultLength = 8;
  var lengthPrompt = window.prompt('How long do you want your password to be? Please choose between 8 and 128 characters.');

  if(lengthPrompt === null) {
    return defaultLength;
  }

  if (lengthPrompt === "" || isNaN(lengthPrompt) || lengthPrompt < 8 || lengthPrompt > 128 ) {
    window.alert("You need to provide a valid answer! Please try again.");
    return getPasswordSize();
  }

  return Number(lengthPrompt);
}

// Password Upper and Lower Case

function getPasswordCase(){
  var defaultCase = 'no';
  var casePrompt = window.prompt('Do you want to include upper and lower case letters? Default is UPPERCASE. Please answer "Yes" or "No".');
  
  if(casePrompt === null) {
    return defaultCase;
  }

  if (casePrompt === "" || (casePrompt.toLowerCase() !== 'yes' && casePrompt.toLowerCase() !== 'no')) {
    window.alert("You need to provide a valid answer! Please try again.");
    return getPasswordCase();
  }

  return casePrompt.toLowerCase();
};

// Password Number

function getPasswordNumber(){
  var defaultNumber = 'no';
  var numberPrompt = window.prompt('Do you want to include numbers? Please answer "Yes" or "No".');

  if(numberPrompt === null) {
    return defaultNumber;
  }

  if (numberPrompt  === "" || (numberPrompt.toLowerCase() !== 'yes' && numberPrompt.toLowerCase() !== 'no')) {
    window.alert("You need to provide a valid answer! Please try again.");
    return getPasswordNumber();
  }

  return numberPrompt.toLowerCase();
};

// Password Symbol

function getPasswordSymbol(){
  var defaultSymbol = 'no';
  var symbolPrompt = window.prompt ('Do you want to include symbols? Please answer "Yes" or "No".')

  if(symbolPrompt === null) {
    return defaultSymbol;
  }

  if (symbolPrompt  === "" || (symbolPrompt.toLowerCase() !== 'yes' && symbolPrompt.toLowerCase() !== 'no')) {
    window.alert("You need to provide a valid answer! Please try again.");
    return getPasswordSymbol();
  }

  return symbolPrompt.toLowerCase();
};


// Password Generator

function generatePassword (){

  /* Arrays */

  var alphaUp = ["A" , "B" , "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var alphaLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbols = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "<" , ">", "?", "+", "-"]

  /* Variables */

  var passwordChars = "";
  var passwordSize;
  var passwordCase;
  var passwordNumber;
  var passwordSymbol;


  passwordChars += alphaUp.join("");

      // Password Length

  passwordSize = getPasswordSize(); 


      // Upper and Lower Case Generation

  passwordCase = getPasswordCase();
    
  if(passwordCase === 'yes') {
    passwordChars += alphaLow.join("");
  }

      // Password Numbers

  passwordNumber = getPasswordNumber();

  if(passwordNumber === 'yes') {
    passwordChars += numbers.join("");
  }
  
      // Symbol Generation

  passwordSymbol = getPasswordSymbol();

  if(passwordSymbol === 'yes') {
    passwordChars += symbols.join("");
  }

  var password = "";

  for (var i = 0; i < passwordSize; i++) {
    password += passwordChars.charAt(Math.floor(Math.random() * passwordChars.length));
  }  

  return password;
}

// Assignment code here
// function to generate a random numeric value


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);