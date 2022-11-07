// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }

  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}
//returning random numbers to where they were called
function getRandomItem(list) {
    return list[randomInt(list.length)] 
}


function generatePassword() {

var userInput = window.prompt("How many characters would you like your password to have? Must be between 8 and 128.")

var passwordLength = parseInt(userInput)

if (isNaN(passwordLength)) {
    window.alert("That's not a number")
    return
} 

if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8 and 128 characters")
    return
}
//Criteria prompts - will log false if user clicks cancel
var userWantsNumbers = window.confirm("Would you like to include numbers in your password? Press 'Ok' for yes and 'Cancel' for no.")
var userWantsSymbols = window.confirm("Would you like to include symbols in your password? Press 'Ok' for yes and Cancel' for no.")
var userWantsLowercase = window.confirm("Would you like to include lowercase letters in your password? Press 'Ok' for yes and 'Cancel' for no.")
var userWantsUppercase = window.confirm("Would you like to include uppercase letters in your password? Press 'Ok' for yes and 'Cancel' for no.")

var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", ":", ";", "<", ">", "?", "/"]
var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseList = []
//based on true or false to the above
var optionsCart = []

for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase()
}

if (userWantsNumbers === true) {
    optionsCart.push(numberList)
}
if (userWantsSymbols === true) {
    optionsCart.push(symbolList)
}
if (userWantsLowercase === true) {
    optionsCart.push(lowercaseList)
}
if (userWantsUppercase === true) {
    optionsCart.push(uppercaseList)
}
if (optionsCart.length === 0) {
    optionsCart.push(lowercaseList)
}


var generatedPassword = ""

for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionsCart)
    var randomChar = getRandomItem(randomList)//console.log(randomChar) to ensure we are getting random charcacters when/if prompted
    generatedPassword += randomChar
}
//Returns the random characters to where they were called and displays written in box
return generatedPassword
//console.log(optionsCart) will show which arrays chosen/choose a list from lists of vars to choose from
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




