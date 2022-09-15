// Assignment Code

//var generateBtn stores locations
//document.querySelector will return the first element in the document that matches #generate.  See Line 30 of HTML.
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
  // console.log("Hey, you clicked the button!");
  // var passwordLength = window.prompt("Welcome! Please answer the following questions. How many characters would you like in your password? Password must contain at least 8 characters, but no more than 128 characters.");
  // console.log(passwordLength);
  // //**must force the user to give a reply within this range */
  // //add must return a number. Error message


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
//Now to create master function to pull randomly from the masterArray. Parse from line #19
//Use math.random and for loop with parameters from user to create the password.  For loop should run a number of times equal to the length of characters chosen for this password.

//THEN CALL the function

// Write password to the #password input
//Functions "Encapsulate" a task (they combine many instructions into a single line of code). 
//The name of this function is writePassword.
//there is no generatePassword function.  We need to make it. It's being called, but it's never been defined.  We have to define it. 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //need to connect this to the HTML  Looking for #password

  passwordText.value = password;

}

// Add event listener to generate button in HTML
//When user clicks "Generate" button, it will call the writePassword funtion above. 
generateBtn.addEventListener("click", writePassword);

