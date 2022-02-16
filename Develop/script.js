// Assignment code here
// function to generate a random numeric value


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var confirmPassword 

/* Arrays */

var alphaUp = ["A" , "B" , "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alphaLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "<" , ">", "?", "+", "-"];

/* Variables */

var passwordSize 
var passwordCase 
var passwordNumber 
var passwordSymbols 

/* Generate Password  */

function getPasswordSize(){ 

  //Confirm Length
  var lengthPrompt = window.prompt('How long do you want your password to be? Please choose between 8 and 128 characters.');

  if (lengthPrompt === "" || lengthPrompt === "null" || isNaN(lengthPrompt) || lengthPrompt < 8 || lengthPrompt > 128 ) {
    window.alert("You need to provide a valid answer! Please try again.");
    return
  }
  
  return lengthPrompt;
}

// Password Upper and Lower Case

function getPasswordCase(){
  var casePrompt = window.prompt('Do you want to include upper and lower case letters? Default is uppercase.');

  if (casePrompt === "" || casePrompt === "null" || typeof casePrompt !== 'string' || (casePrompt.toLowerCase() !== 'yes' && casePrompt.toLowerCase() !== 'no')) {
    console.log(casePrompt);
    window.alert("You need to provide a valid answer! Please try again.");
    return;
  }

  return casePrompt.toLowerCase();
}

// Password Number

function getPasswordNumber(){
  var numberPrompt = window.prompt('Do you want to include numbers?');

  if (passwordNumber === "" || passwordNumber === "null") {
    window.alert("You need to provide a valid answer! Please try again.");
  }
}

// Password Symbol

function getPasswordSymbol(){
  var symbolPrompt = window.prompt ('Do you want to include symbols?')

  if (passwordSymbol === "" || passwordSymbol === "null") {
    window.alert("You need to provide a valid answer! Please try again.");
  }
}

// Password Generator

function generatePassword (){
  passwordSize = getPasswordSize();
  passwordCase = getPasswordCase();
}
