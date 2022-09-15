// Assignment Code

//var generateBtn stores locations
//document.querySelector will return the first element in the document that matches #generate
var generateBtn = document.querySelector("#generate");

var numericalValue = "0123456789".split('');
var lowerCase  = "abcdefghijklmnopqrstuvwxyz".split('');
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var specialCharacter = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split('');
var masterArray = [];

// console.log(numericalValue);
// console.log(lowerCase);
// console.log(upperCase);
// console.log(specialCharacter);

function generatePassword() {
  var passwordLength = window.prompt("Welcome! Please answer the following questions. How many characters would you like in your password? Password must contain at least 8 characters, but no more than 128 characters.");
  // console.log(passwordLength);

  var wantsLowercase = window.confirm("Do you want lowercase letters?");
  console.log(wantsLowercase);
  var wantsUppercase = window.confirm("Do you want uppercase letters?");
  var wantsNumerical = window.confirm("Do you want numbers?");
  var wantsSpecial = window.confirm("Do you want special characters?");

  if(wantsLowercase){
    masterArray  = masterArray.concat(lowerCase);
    console.log(masterArray);
  }
  if(wantsUppercase){
    masterArray = masterArray.concat(upperCase);
    console.log(masterArray);
  }
  if(wantsNumerical){
    masterArray = masterArray.concat(numericalValue);
    console.log(masterArray);
  }

  if(wantsSpecial){
    masterArray = masterArray.concat(specialCharacter);
    console.log(masterArray);
  }
}

// Write password to the #password input
//Functions "Encapsulate" a task (they combine many instructions into a single line of code). 
//The name of this function is writePassword.
//This function takes the 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
