// Loop - Challenge

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Obaid",
];

let s = 1;
myAdmins.length = myAdmins.indexOf("Stop");

document.write(`<div>We Have ${myAdmins.length} Admins </div>`);
document.write("<hr>");

for (let i = 0; i < myAdmins.length; i++) {
  document.write(`<h1>The Admin For Team ${i + 1} is ${myAdmins[i]} </h1>`);
  document.write(`<h3>Team Members:</h3>`);

  for (let j = 0; j < myEmployees.length; j++) {
    if (myEmployees[j][0] === myAdmins[i][0])
      document.write(`<h4>- ${s++} ${myEmployees[j]}</h4>`);
  }
  s = 1;
}
