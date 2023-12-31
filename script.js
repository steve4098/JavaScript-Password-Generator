// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

  //variable to store user choice of password length
  let length=parseInt(
    prompt("How many characters would you like your password to contain (between 10 and 64)?")
  )
  if (isNaN(length) === true){
    alert("Password length must be a number between 10 and 64")
    return;
  }  
  
  if (length<10) {
    alert("Password is too short")
  return;
  }

  if (length>64){ 
    alert("Password is too long")
  return;
  }

  let hasSpecial = confirm(
    "Click OK to include special characters (cancel to exclude them)"
  )

  let hasUpper = confirm(
    "Click OK to include upper case characters (cancel to exclude them)"
  )

  let hasLower = confirm(
    "Click OK to include lower case characters (cancel to exclude them)"
  )

  let hasNumber = confirm(
    "Click OK to include numerical characters (cancel to exclude them)"
  )

  if (hasNumber === false && 
    hasLower === false && 
    hasUpper === false && 
    hasSpecial === false) {
    alert("You must select at least one character type")
  return;
  }

  let passwordOptions = {
    length: length,
    hasSpecial: hasSpecial,
    hasUpper: hasUpper,
    hasLower: hasLower,
    hasNumber: hasNumber
  }

  return passwordOptions;

}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomValue = Math.floor(Math.random()*arr.length)
  let randomElement = arr[randomValue]

  return randomElement;
}


// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();

let result = []

let possChar = []

let mustChar = []

if (options.hasSpecial) {
  possChar = possChar.concat(specialCharacters);
  mustChar.push(getRandom(specialCharacters))
}

if(options.hasUpper) {
  possChar = possChar.concat(upperCasedCharacters);
  mustChar.push(getRandom(upperCasedCharacters))
}

if(options.hasLower) {
  possChar = possChar.concat(lowerCasedCharacters);
  mustChar.push(getRandom(lowerCasedCharacters))
}

if(options.hasNumber) {
  possChar = possChar.concat(numericCharacters);
  mustChar.push(getRandom(numericCharacters))
}

for (let i = 0; i < options.length; i++) {
  var generated = getRandom(possChar);
  result.push(generated);

}


console.log(result);
 return result
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);