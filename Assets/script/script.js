// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// generatePassword function declaration
generatePassword = () => {
  
  /* Initializes finishedString variable */
  var finishedString = "";

  // Initial window prompt to determine password length
  var passwordLength = window.prompt("Enter how long you would like your password: 8-128 characters.");
  
  // User hits "Cancel" on password length prompt
  if (!passwordLength) {
    window.alert("No number entered! Please try again.");
    passwordText.setAttribute("placeholder", "Try again!");

  } else {
    // Removes spaces from input
    passwordLength = passwordLength.replace(/\s+/g, '');

    /* Regular expression to exclude passwordLength strings that contain letters or special characters */
    if (/^[A-Za-z!"#$%&'()*+,\-./:;<=>?@[\\\]^_\`{|}~]+$/.test(passwordLength)) {
      window.alert("Only numbers accepted in this box! Please try again.");
      passwordText.setAttribute("placeholder", "Try again!");

    // User enters number outside of 8-128 range
    } else if (
        (Number(passwordLength) < 8) ||
        (Number(passwordLength) > 128)
      ) {
      window.alert("Number out of range! Please try again.");
      passwordText.setAttribute("placeholder", "Try again!");

    // Ensures passwordLength is within 8-128 range before proceeding
    } else if (
        (Number(passwordLength) >= 8) &&
        (Number(passwordLength) <= 128)
    ) {
      /* Converts passwordLength string to number*/
      passwordLength = Number(passwordLength);

      /* characterLibrary object to contain base character sets */
      var characterLibrary = {
        numbers: `0123456789`,
        lowercaseLetters: `abcdefghiklmnopqrstuvwxyz`,
        uppercaseLetters: `ABCDEFGHIJKLMNOPQRSTUVWXTZ`,
        specialCharacters: `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`
      };
  
      /* Variable declarations to create strings based off character combinations */
      var fullCharacters = (characterLibrary.numbers + characterLibrary.lowercaseLetters + characterLibrary.uppercaseLetters + characterLibrary.specialCharacters).split("");
  
      var noSpecials = (characterLibrary.numbers + characterLibrary.lowercaseLetters + characterLibrary.uppercaseLetters).split("");
  
      var noLowercase = (characterLibrary.numbers + characterLibrary.uppercaseLetters + characterLibrary.specialCharacters).split("");
  
      var noUppercase = (characterLibrary.numbers + characterLibrary.lowercaseLetters + characterLibrary.specialCharacters).split("");
  
      var noNumbers = (characterLibrary.lowercaseLetters + characterLibrary.uppercaseLetters + characterLibrary.specialCharacters).split("");
  
      var specialsAndLowercase = (characterLibrary.specialCharacters + characterLibrary.lowercaseLetters).split("");
  
      var specialsAndUppercase = (characterLibrary.specialCharacters + characterLibrary.uppercaseLetters).split("");
  
      var specialsAndNumbers = (characterLibrary.specialCharacters + characterLibrary.numbers).split("");
  
      var lowercaseAndUppercase = (characterLibrary.lowercaseLetters + characterLibrary.uppercaseLetters).split("");
  
      var lowercaseAndNumbers = (characterLibrary.lowercaseLetters + characterLibrary.numbers).split("");
  
      var uppercaseAndNumbers = (characterLibrary.uppercaseLetters + characterLibrary.numbers).split("");
  
      var specialsOnly = characterLibrary.specialCharacters.split("");
  
      var lowercaseOnly = characterLibrary.lowercaseLetters.split("");
  
      var uppercaseOnly = characterLibrary.uppercaseLetters.split("");
  
      var numbersOnly = characterLibrary.numbers.split("");
      // END variable declarations
  
      /* characterArray declaration to contain different combinations for simple index access after evaluations */
      var characterArray = [fullCharacters /* Index: 0 */, noSpecials /* 1 */, noLowercase /* 2 */, noUppercase /* 3 */, noNumbers /* 4 */, specialsAndLowercase /* 5 */, specialsAndUppercase /* 6 */, specialsAndNumbers /* 7 */, lowercaseAndUppercase /* 8 */, lowercaseAndNumbers /* 9 */, uppercaseAndNumbers /* 10 */, specialsOnly /* 11 */, lowercaseOnly /* 12 */, uppercaseOnly /* 13 */, numbersOnly /* 14 */];
  
      var passwordIterator = (array, inputLength) => {
        for (var i = 0; i < inputLength; i++) {
          var randomIndex = Math.floor(Math.random() * array.length);
          finishedString += array[randomIndex].toString();
        }
      }
  
      // Window confirm if numbers are used
      var useNumbers = window.confirm(`Would you like to include numbers? (e.g. 1 2 3)`);
  
      // Window confirm if uppercase letters are used
      var useUpperCase = window.confirm(`Would you like to include upper case letters? (e.g. A B C)`);
  
      // Window confirm if lowercase letters are used
      var useLowerCase = window.confirm(`Would you like to include lower case letters? (e.g. a b c)`);
  
      // Window confirm if special characters are used
      var useSpecialCharacters = window.confirm(`Would you like to include special characters? (e.g. ^ * $)`);
  
      // Use ALL characters to create finishedString (fullCharacters)
      if (useNumbers && 
        useUpperCase && 
        useLowerCase && 
        useSpecialCharacters) {
        passwordIterator(characterArray[0], passwordLength);
  
      // Use all characters BUT special to create finishedString (noSpecials)
      } else if (useNumbers && 
        useUpperCase && 
        useLowerCase && 
        !useSpecialCharacters) {
        passwordIterator(characterArray[1], passwordLength);
  
      // Use all characters BUT lowercase to create finishedString (noLowercase)
      } else if (useNumbers && 
        useUpperCase && 
        !useLowerCase && 
        useSpecialCharacters) {
        passwordIterator(characterArray[2], passwordLength);
  
      // Use all characters BUT uppercase to create finishedString (noUppercase) 
      } else if (useNumbers && 
        !useUpperCase && 
        useLowerCase && 
        useSpecialCharacters) {
        passwordIterator(characterArray[3], passwordLength);
  
      // Use all characters BUT numbers to create finishedString (noNumbers)
      } else if (!useNumbers && 
        useUpperCase && 
        useLowerCase && 
        useSpecialCharacters) {
        passwordIterator(characterArray[4], passwordLength);
  
      // Use special + lowercase characters to create finishedString (specialsAndLowercase)
      } else if (!useNumbers && 
        !useUpperCase && 
        useLowerCase && 
        useSpecialCharacters) {
        passwordIterator(characterArray[5], passwordLength);
  
      // Use special + uppercase characters to create finishedString (specialsAndUppercase)
      } else if (!useNumbers && 
        useUpperCase && 
        !useLowerCase && 
        useSpecialCharacters) {
        passwordIterator(characterArray[6], passwordLength);
  
      // Use special + number characters to create finishedString (specialsAndNumbers)
      } else if (useNumbers && 
        !useUpperCase && 
        !useLowerCase && 
        useSpecialCharacters) {
        passwordIterator(characterArray[7], passwordLength);
  
      // Use lowercase + uppercase characters to create finishedString (lowercaseAndUppercase)
      } else if (!useNumbers && 
        useUpperCase && 
        useLowerCase && 
        !useSpecialCharacters) {
        passwordIterator(characterArray[8], passwordLength);
  
      // Use special + number characters to create finishedString (lowercaseAndNumbers)
      } else if (useNumbers && 
        !useUpperCase && 
        useLowerCase && 
        !useSpecialCharacters) {
        passwordIterator(characterArray[9], passwordLength);
  
      // Use uppercase + number characters to create finishedString (uppercaseAndNumbers)
      } else if (useNumbers && 
        useUpperCase && 
        !useLowerCase && 
        !useSpecialCharacters) {
        passwordIterator(characterArray[10], passwordLength);
  
      // Use special characters ONLY to create finishedString (specialsOnly)
      } else if (!useNumbers && 
        !useUpperCase && 
        !useLowerCase && 
        useSpecialCharacters) {
        passwordIterator(characterArray[11], passwordLength);
  
      // Use lowercase characters ONLY to create finishedString (lowercaseOnly)
      } else if (!useNumbers && 
        !useUpperCase && 
        useLowerCase && 
        !useSpecialCharacters) {
        passwordIterator(characterArray[12], passwordLength);
  
      // Use uppercase characters ONLY to create finishedString (uppercaseOnly)
      } else if (!useNumbers && 
        useUpperCase && 
        !useLowerCase && 
        !useSpecialCharacters) {
        passwordIterator(characterArray[13], passwordLength);
  
      // Use number characters ONLY to create finishedString (numbersOnly)
      } else if (useNumbers && 
        !useUpperCase && 
        !useLowerCase && 
        !useSpecialCharacters) {
        passwordIterator(characterArray[14], passwordLength);
  
      /* Catch all in case user says "no" to ALL parameters */
      } else {
        window.alert("No parameters specified! Please try again.");
        passwordText.setAttribute("placeholder", "Try again!");
      }
  
    }
  }

  /* Ensures password variable under writePassword() is returned finishedString value to display on page */
  return finishedString;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
