// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input.  Write code here for the logic of choose the code.
function prompt() {
  var generateBtn = prompt{"Please choose the criteria you would like to include in your password."}
}


//This part is going to put out the password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
