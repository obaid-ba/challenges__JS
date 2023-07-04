// Array Challenge

let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

console.log(my.slice(zero, counter + true).reverse()); // ["Osama","Elham","Mazero","Ahmed"]

console.log("_____________________________");

console.log(my.slice(zero + true, -counter).reverse()); // ["Elham","Mazero"]

console.log("_____________________________");

console.log(
  my[counter - true].slice(zero, counter - true) +
    my[zero + true].slice(counter - true)
); //"Elzero"

console.log("_____________________________");

console.log(my[true - zero][counter + true] + zero); //"r0"
