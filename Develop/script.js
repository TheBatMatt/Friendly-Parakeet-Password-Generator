// Assignment code here


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

/* Arrays */

var alphaUp = ["A" , "B" , "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alphaLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "<" , ">", "?", "+", "-"];

/* Generate Password  */

function generatePassword (){
  var  passwordSize = prompt('How long do you want your password to be? Please choose between 8 and 128 characters.');
  var passwordCase = prompt('Do you want to include upper and lower case letters?')
  var passwordNum = prompt('Do you want to include numbers?');
  var passwordSymbols = prompt ('Do you want to include symbols?')
}