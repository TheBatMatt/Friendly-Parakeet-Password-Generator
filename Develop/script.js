/* Arrays */

var alphaUp = ["A" , "B" , "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alphaLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "<" , ">", "?", "+", "-"];
var allArrays = [alphaUp, alphaLow, numbers, symbols]

console.log(allArrays);

/* Variables */

var userChoice
var passwordSize 
var passwordCase 
var passwordNumber 
var passwordSymbols 

var passLength
var passCase
var passNumber
var passSymbol

/* Generate Password  */

function getPasswordSize(){ 
  var lengthPrompt = window.prompt('How long do you want your password to be? Please choose between 8 and 128 characters.');
  if (lengthPrompt === "" || lengthPrompt === "null" || isNaN(lengthPrompt) || lengthPrompt < 8 || lengthPrompt > 128 ) {
    window.alert("You need to provide a valid answer! Please try again.");
    return getPasswordSize();
  }
  return lengthPrompt;
}

// Password Upper and Lower Case

function getPasswordCase(){
  var casePrompt = window.prompt('Do you want to include upper and lower case letters? Default is UPPERCASE. Please answer "Yes" or "No".');
  if (casePrompt === "" || casePrompt === "null" || typeof casePrompt !== 'string' || (casePrompt.toLowerCase() !== 'yes' && casePrompt.toLowerCase() !== 'no')) {
    window.alert("You need to provide a valid answer! Please try again.");
    return getPasswordCase();
  }
  return casePrompt.toLowerCase();
};

// Password Number

function getPasswordNumber(){
  var numberPrompt = window.prompt('Do you want to include numbers? Please answer "Yes" or "No".');
  if (numberPrompt  === "" || numberPrompt  === "null" || typeof numberPrompt  !== 'string' || (numberPrompt.toLowerCase() !== 'yes' && numberPrompt.toLowerCase() !== 'no')) {
    window.alert("You need to provide a valid answer! Please try again.");
    return getPasswordNumber();
  }
  return numberPrompt.toLowerCase();
};

// Password Symbol

function getPasswordSymbol(){
  var symbolPrompt = window.prompt ('Do you want to include symbols? Please answer "Yes" or "No".')
  if (symbolPrompt  === "" || symbolPrompt  === "null" || typeof symbolPrompt  !== 'string' || (symbolPrompt.toLowerCase() !== 'yes' && symbolPrompt.toLowerCase() !== 'no')) {
    window.alert("You need to provide a valid answer! Please try again.");
    return getPasswordSymbol();
  }
  return symbolPrompt.toLowerCase();
};


// Password Generator

function generatePassword (){

  passwordSize = getPasswordSize(); {
    console.log(passwordSize);
  }

      // Upper and Lower Case Generation
  passwordCase = getPasswordCase();{
    console.log(passwordCase)

}

      //Password Numbers
  passwordNumber = getPasswordNumber();{
    console.log(passwordNumber);
  }

  passwordSymbol = getPasswordSymbol();{
    console.log(passwordSymbol);
  };

}





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