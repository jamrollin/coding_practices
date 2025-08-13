/**
 * @param {number} - input price and quantity for each item
 * @param {string} - display inventory information 
 */
// Question 2: Modify the code from the previous example.
// Assume that the prices of flowers will be constant. Declare and initialize the remaining variables in the same way as in the previous example. Display all the gathered information in the console. Now decrease the number of roses by 20 and lilies by 30.
// Display all the collected information in the console again.

const rosePrice = 8;
const lilyPrice = 10;
const tulipPrice = 2;

let roseQuantity = 70; 
let lilyQuantity = 50; 
let tulipQuantity = 120;

let rosesValue = rosePrice * roseQuantity;
let liliesValue = lilyPrice * lilyQuantity;
let tulipsValue = tulipPrice * tulipQuantity;
let total = rosesValue + liliesValue + tulipsValue;

console.log (`Rose - unit price: ${rosePrice}, quantity: ${roseQuantity}, value: ${rosesValue}`);
console.log (`Lily - unit price: ${lilyPrice}, quantity: ${lilyQuantity}, value: ${liliesValue}`);
console.log (`Tulip - unit price: ${tulipPrice} quantity: ${tulipQuantity}, value: ${tulipsValue}`);
console.log (`Total: ${total}`);

roseQuantity -= 20; // roseQuantity = roseQuantity - 20
lilyQuantity -= 30; // lilyQuantity = lilyQuantity - 20

rosesValue = rosePrice * roseQuantity;
liliesValue = lilyPrice * lilyQuantity;
tulipsValue = tulipPrice * tulipQuantity;
total = rosesValue + liliesValue + tulipsValue;

console.log (`Rose - unit price: ${rosePrice}, quantity: ${roseQuantity}, value: ${rosesValue}`);
console.log (`Lily - unit price: ${lilyPrice}, quantity: ${lilyQuantity}, value: ${liliesValue}`);
console.log (`Tulip - unit price: ${tulipPrice} quantity: ${tulipQuantity}, value: ${tulipsValue}`);
console.log (`Total: ${total}`);
