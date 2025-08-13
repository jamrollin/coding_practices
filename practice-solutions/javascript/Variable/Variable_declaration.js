/**
 * @param {number} - input price and quantity for each item
 * @param {string} - display inventory information 
 */

// Question 1: Declare variables: 
// the price of a single rose (8) and the number of roses you have (70)
// the price of a single lily (10) and the number of lilies you have (50)
// the price of a single tulip (2) and the number of tulips you have (120)

// Get total price for each iteam and display the inventory information
// Output
// Rose – unit price: 8 , quantity: 70 , value: 560
// Lily – unit price: 10 , quantity: 50 , value: 500
// Tulip – unit price: 2 , quantity: 120 , value: 240
// Total: 1300 


let rosePrice = 8;
let roseQuantity = 70; 

let lilyPrice = 10;
let lilyQuantity = 50; 

let tulipPrice = 2;
let tulipQuantity = 120;

let rosesValue = rosePrice * roseQuantity;
let liliesValue = lilyPrice * lilyQuantity;
let tulipsValue = tulipPrice * tulipQuantity;
let total = rosesValue + liliesValue + tulipsValue;

console.log (`Rose - unit price: ${rosePrice}, quantity: ${roseQuantity}, value: ${rosesValue}`);
console.log (`Lily - unit price: ${lilyPrice}, quantity: ${lilyQuantity}, value: ${liliesValue}`);
console.log (`Tulip - unit price: ${tulipPrice} quantity: ${tulipQuantity}, value: ${tulipsValue}`);
console.log (`Total: ${total}`);


