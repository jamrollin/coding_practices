/**
 * Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
 * 
 * @param {string} str - Input string (e.g., "fOrTnItE")
 * @returns {string} - Capitalized string (e.g., "Fornite")
 */
function capitalize(str) {
  if (!str || typeof str !== 'string') return str; // Handle empty/null/undefined inputs
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

// Test Cases
console.log(capitalize("fornite"));     // "Fornite"
console.log(capitalize("fOrTnItE"));    // "Fornite"
console.log(capitalize(420));           // 420
console.log(capitalize(""));            // empty