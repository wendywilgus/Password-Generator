// Assignment Code

var generateBtn = document.querySelector("#generate");
console.log("generate button", generateBtn);

var numericalValue = "0123456789".split('');
  
var lowerCase  = "abcdefghijklmnopqrstuvwxyz".split('');
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var specialCharacter = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split('');

// console.log(numericalValue);
// console.log(lowerCase);
// console.log(upperCase);
// console.log(specialCharacter);


function generatePassword() {
  console.log("starting generatePassword");
  var masterArray = [];
  var passwordLength = window.prompt("How many characters would you like in your password? Password must contain at least 8 characters, but no more than 128 characters.");
  // console.log(passwordLength);
  // //**must force the user to give a reply within this range 8-128 */
  // //add must return a number. Error message
 if (passwordLength >=8 && passwordLength <= 128 )  {
   alert("Your password will contain " + passwordLength + " characters.")
   //  console.log(passwordLength)
    //need to create a new variable that tells their passwordLength
      var wantsLowercase = confirm("Do you want lowercase letters?");
     // console.log(wantsLowercase);
     var wantsUppercase = confirm("Do you want uppercase letters?");
     // console.log(wantsUppercase);
     var wantsNumerical = confirm("Do you want numbers?");
     // console.log(wantsNumerical);
     var wantsSpecial = confirm("Do you want special characters?");
     // console.log(wantsSpecial);
   
     //need to validate the input.  At least one character type must be selected.
   
   
     if(wantsLowercase){
       masterArray  = masterArray.concat(lowerCase);
     }
     if(wantsUppercase){
       masterArray = masterArray.concat(upperCase);
     }
     if(wantsNumerical){
       masterArray = masterArray.concat(numericalValue);
     }
   
     if(wantsSpecial){
       masterArray = masterArray.concat(specialCharacter);
     }
   
     console.log("masterArray =", masterArray);
     writePassword(masterArray, passwordLength);    
 } else{
    alert("Password must contain at least 8 characters, but no more than 128 characters.");
    generatePassword();
  }
}

function writePassword(masterArray, passwordLength)  {
  var result = "";
  for ( i = 0; i < passwordLength; i++) {
    result += masterArray[Math.round(Math.random() * passwordLength)];
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = result;
} 

generateBtn.addEventListener("click", generatePassword);

//Now to create master function to pull randomly from the masterArray. Parse from line #19
//Use math.random and for loop with parameters from user to create the password.  For loop should run a number of times equal to the length of characters chosen for this password.


//THEN CALL the function

// Write password to the #password input
//Functions "Encapsulate" a task (they combine many instructions into a single line of code). 
//The name of this function is writePassword.
//there is no generatePassword function.  We need to make it. It's being called, but it's never been defined.  We have to define it. 
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
//   //need to connect this to the HTML  Looking for #password
//   return "the new password";
// }
// return "Generated password will go here!";
  //This will handle displaying it on the screen
//var generateBtn stores locations
//document.querySelector will return the first element in the document that matches #generate.  See Line 30 of HTML.


// Add event listener to generate button in HTML
//When user clicks "Generate" button, it will call the writePassword funtion above. 
// generateBtn.addEventListener("click", writePassword);
