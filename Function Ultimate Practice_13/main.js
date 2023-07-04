/*
function Advanced Practice 
  -Parameters 
  -Default
  -Rest
  -condition 
*/

function showInfo(
  us = "Not Found",
  ag = "Not Found",
  rt = 0,
  show = "yes",
  ...sk
) {
  document.write(`<div>`);
  document.write(`<h2>Welcome, ${us}</h2>`);
  document.write(`<p>Age: ${ag}</p>`);
  document.write(`<p>Hour Rate: $${rt}</p>`);
  if (show === "yes") {
    if (sk.length > 1) {
      document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
    } else if (sk.length == 1) {
      document.write(`<p>Skills: ${sk}</p>`);
    } else {
      document.write(`<p>Skills Is Hidden</p>`);
    }
  }
  document.write(`</div>`);
}

showInfo("Osama", 38, 20, "yes", "Html", "CSS");
