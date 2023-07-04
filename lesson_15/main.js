// Arrow Function Challenge

// let names = function (...names) {
// return `String [${names.join("], [")}] => Done !`;
// };
// console.log(names("obaid", "Osama", "Ali"));

let names = (...names) => `String [${names.join("], [")}] => Done !`;

console.log(names("obaid", "Osama", "Ali"));

let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => one + two + nums[0];

let calc = function (one, two, ...nums) {
  return one + two + nums[0];
};

console.log(calc(10, 20, 50)); //80
