// Assignment Code

var generateBtn = document.querySelector("#generate");
<<<<<<< HEAD
console.log("generate button", generateBtn);
=======
//need to connect this to the HTML.  Looking for #generate
>>>>>>> 11707f285bd226bbdd82abb6191e3dbd75815d13

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
  console.log("Hey, you clicked the button!");
  var passwordLength = window.prompt("How many characters would you like in your password? Password must contain at least 8 characters, but no more than 128 characters.");
  // console.log(passwordLength);
<<<<<<< HEAD
  // //**must force the user to give a reply within this range 8-128 */
  // //add must return a number. Error message
 if (passwordLength >=8 && passwordLength <= 128 )  {
   alert("Your password will contain " + passwordLength + " characters.")
=======
  //add must return a number
>>>>>>> 11707f285bd226bbdd82abb6191e3dbd75815d13

 } else{
    alert("Password must contain at least 8 characters, but no more than 128 characters.");
    generatePassword()
 }
//  console.log(passwordLength)
 //need to create a new variable that tells their passwordLength
   var wantsLowercase = window.confirm("Do you want lowercase letters?");
  // console.log(wantsLowercase);
  var wantsUppercase = window.confirm("Do you want uppercase letters?");
  // console.log(wantsUppercase);
  var wantsNumerical = window.confirm("Do you want numbers?");
  // console.log(wantsNumerical);
  var wantsSpecial = window.confirm("Do you want special characters?");
  // console.log(wantsSpecial);

  //need to validate the input.  At least one character type must be selected.

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
<<<<<<< HEAD
  

//Now to create master function to pull randomly from the masterArray. Parse from line #19
//Use math.random and for loop with parameters from user to create the password.  For loop should run a number of times equal to the length of characters chosen for this password.
function writeMasterArray() {

}
=======
//Now to create master function to pull randomly from the masterArray. Parse from line #19
//Use math.random and for loop with parameters from user to create the password.  For loop should run a number of times equal to the length of characters chosen for this password.
>>>>>>> 11707f285bd226bbdd82abb6191e3dbd75815d13

//THEN CALL the function

// Write password to the #password input
//Functions "Encapsulate" a task (they combine many instructions into a single line of code). 
//The name of this function is writePassword.
//there is no generatePassword function.  We need to make it. It's being called, but it's never been defined.  We have to define it. 
function writePassword() {
  console.log("writePassword", writePassword);
  
  var password = generatePassword(passwordLength);
  var passwordText = document.querySelector("#password");
<<<<<<< HEAD
=======
  //need to connect this to the HTML  Looking for #password

>>>>>>> 11707f285bd226bbdd82abb6191e3dbd75815d13
  passwordText.value = password;
  //need to connect this to the HTML  Looking for #password
  return "the new password";
}
// return "Generated password will go here!";
  //This will handle displaying it on the screen
//var generateBtn stores locations
//document.querySelector will return the first element in the document that matches #generate.  See Line 30 of HTML.

<<<<<<< HEAD
=======
// Add event listener to generate button in HTML
>>>>>>> 11707f285bd226bbdd82abb6191e3dbd75815d13

// Add event listener to generate button in HTML
//When user clicks "Generate" button, it will call the writePassword funtion above. 
generateBtn.addEventListener("click", writePassword);

