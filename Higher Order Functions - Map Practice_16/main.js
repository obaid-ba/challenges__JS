let swappingCases = "elZERo";
let invertedNumber = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";

let sw = swappingCases
  .split("")
  .map(function (ele) {
    return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
  })
  .join("");
console.log(sw);
console.log("_".repeat(18));

let inv = invertedNumber.map(function (ele) {
  return -ele;
});

console.log(inv);
console.log("_".repeat(18));

let slm = ignoreNumbers
  .split("")
  .map(function (ele) {
    return isNaN(ele) === false ? ele.slice(ele) : ele;
  })
  .join("");
console.log(slm);
