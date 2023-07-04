//  Random Arguments Function Challenge

function showInfo(name, age, duty) {
  n = "";
  a = 0;
  d = "";
  typeof age === "string"
    ? (n = age)
    : typeof duty === "string"
    ? (n = duty)
    : (n = name);

  typeof name === "number"
    ? (a = name)
    : typeof duty === "number"
    ? (a = duty)
    : (a = age);

  typeof name === "boolean"
    ? (d = name)
    : typeof age === "boolean"
    ? (d = age)
    : (d = duty);
  document.write(`<div>`);

  d == true
    ? document.write(
        `<h1>Hello ${n}, Your Age Is ${a}, You Are Available For Hire</h1>`
      )
    : document.write(
        `<h1>Hello ${n}, Your Age Is ${a}, You Are Not Available For Hire</h1>`
      );

  document.write(`</div>`);
}

showInfo("Osama", 38, true);
showInfo(38, "Osama", true);
showInfo(true, 38, "Osama");
showInfo(false, "Osama", 38);
