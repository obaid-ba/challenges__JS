//#39 Switch And If Condition Challenge


let job = "Designer";
let salary = 0;

switch (job) {
  case "Manager":
    salary =8000;
    break;
  case "IT":
  case "Designer":
    salary =7000;
    break;
  default:
    salary = 4000;
    break;
}

console.log(salary)

console.log("_______________________")
// If Challenge 

let holidays = 0;
let money = 0;

if (holidays == 0){
  money = 5000;
  console.log(`My Money is ${money}`);
}else if(holidays == 1 ||holidays == 2 ){
  money = 3000;
  console.log(`My Money is ${money}`);
}else if(holidays == 3){
  money = 2000;
  console.log(`My Money is ${money}`);
}else if(holidays == 3){
  money = 1000;
  console.log(`My Money is ${money}`);
}else if(holidays == 5){
  money = 2000;
  console.log(`My Money is ${money}`);
}else{
  money = 0;
  console.log(`My Money is ${money}`);
}