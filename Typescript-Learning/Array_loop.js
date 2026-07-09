"use strict";
let numbers = [10, 20, 30, 40, 50];
//For Loop 
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
//loop using for...of loop
for (let number of numbers) {
    console.log(number);
}
//Loop using forEach loop
numbers.forEach((num) => {
    console.log(num);
});
