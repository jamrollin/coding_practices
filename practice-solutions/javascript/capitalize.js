/**
 * Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
 * 
 * @param {string} str - Input string (e.g., "fOrTnItE")
 * @returns {string} - Capitalized string (e.g., "Fornite")
 */

// Function capitalize takes string parameter
function capitalize(str) {
// If input is empty/null/undefined return the string  
  if (!str || typeof str !== 'string') return str; 
// Takes the first letter of the string and turns it into Uppercase; remaining characters starting from index 1 are turned to lowercase 
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

// Test Cases
console.log(capitalize("fornite"));     // "Fornite"
console.log(capitalize("fOrTnItE"));    // "Fornite"
console.log(capitalize(420));           // 420
console.log(capitalize(""));            // empty