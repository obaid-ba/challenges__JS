// String Challenge

let a = "Elzero Web School";

console.log((a.charAt(2).toUpperCase()) +(a.slice(3,6)));//Zero

console.log("_________________");

console.log(a.charAt(13).toUpperCase().repeat(8));

console.log("_________________");

console.log(a.split(" ",1));

console.log("_________________");

console.log(a.substr(0,6)+" "+a.substr(11));//Elzero School

console.log("_________________");

console.log(a.charAt(0).toLowerCase() + a.substr(1,a.length-2).toUpperCase() + a.substr(-1).toLowerCase());