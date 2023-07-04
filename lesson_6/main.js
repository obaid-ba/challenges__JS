/* Number challenge */



let a = 1_00;
let b =2_00.5;
let c = 1e2;
let d = 2.4;

console.log(Math.trunc(Math.min(a,b,c,d)));

console.log("____________")
console.log(a*c)//10000

console.log("____________")
console.log(Math.trunc(d))
console.log(d.toFixed())
console.log(Math.round(d))
console.log(Math.floor(d))

console.log("____________")
console.log((parseInt(b) / Math.ceil(d)).toFixed(2))//66.67
console.log(Math.round(parseInt(b)/Math.ceil(d)))//67






