//  If Condition Challenge

let a = 10;

a < 10
  ?console.log(10)
  :a >= 10 && a <= 40
  ?console.log("10 To 40")
  :a > 40
  ?console.log("> 40")
  :console.log("unknown")

console.log("___________________________");

// write with Ternary if syntax

let st = "Elzero Web School";

if(String(st.substr(7,4).length-1)+String(st.substr(7,4).length) === "34"){
  console.log("good");
}

console.log("___________________________");

let po =  st.indexOf("W");

if( st[po].toLowerCase()=== "w"){
  console.log("Good");
}

console.log("___________________________");

if(Number(st) !== "string"){
  console.log("Good");
}

console.log("___________________________");

if(typeof st.length === "number"){
  console.log("Good");
}

console.log("___________________________");

if(st.substring(0,6).repeat(2) === "ElzeroElzero"){
  console.log("Good");
}