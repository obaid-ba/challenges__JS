// DOM Challenge
// #23a96e
// #ececec

let header = document.createElement("header");
let mytitle = document.createElement("h2");
let titlecont = document.createTextNode("Obaid");
mytitle.appendChild(titlecont);
header.appendChild(mytitle);

let menu = document.createElement("div");
let h1 = document.createElement("h3");
let h2 = document.createElement("h3");
let h3 = document.createElement("h3");
let h4 = document.createElement("h3");
let titleh1 = document.createTextNode("Home");
let titleh2 = document.createTextNode("About");
let titleh3 = document.createTextNode("Service");
let titleh4 = document.createTextNode("Contact");
let ul = document.createElement("ul");
let li = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");
// content => h3
h1.appendChild(titleh1);
h2.appendChild(titleh2);
h3.appendChild(titleh3);
h4.appendChild(titleh4);
// h3 => li
li.appendChild(h1);
li2.appendChild(h2);
li3.appendChild(h3);
li4.appendChild(h4);
// li => ul
ul.appendChild(li);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);

menu.appendChild(ul);
menu.className = "menu";
header.appendChild(menu);

let cont = document.createElement("div");

for (let i = 0; i < 15; i++) {
  let pro = document.createElement("div");
  let span = document.createElement("span");
  let number = document.createTextNode(`${i + 1}`);
  let protext = document.createTextNode("Product");
  cont.className = "content";
  pro.className = `product`;
  cont.appendChild(pro);
  pro.appendChild(span);
  pro.appendChild(protext);
  span.appendChild(number);
  pro.style.cssText =
    "  padding: 10px;background-color: rgb(255,255,255);border: 1px solid rgb(255, 255, 255);    display: grid;grid-template-columns: repeat(auto-fill,minmax(450px,1fr));;box-sizing: border-box;text-align: center;color: rgb(136,136,136);border-radius: 6px;";
  span.style.cssText =
    "font-size: 40px;color:black;font-weight: normal;display: block;margin-bottom: 10px;margin-top: 10px;";
}

let footer = document.createElement("footer");
let textfot = document.createTextNode("Copyright 2021");
footer.className = "footer";
footer.appendChild(textfot);

header.className = "website-head";
document.body.appendChild(header);
document.body.appendChild(cont);
document.body.appendChild(footer);

// style

document.body.style.cssText =
  "background-color:#ececec;box-sizing: border-box;margin:0;";
header.style.cssText =
  "background-color: white;display: flex;justify-content: space-between;align-items: center;";
mytitle.style.cssText = "color:#23a96e;padding:10px 20px;font-size:bold;";

ul.style.cssText = "list-style: none;margin: 0;padding: 0;display: flex;";
li.style.cssText = "padding-left: 15px;color: #777;";
li2.style.cssText = "padding-left: 15px;color: #777;";
li3.style.cssText = "padding-left: 15px;color: #777;";
li4.style.cssText = "padding: 0 15px;color: #777;";

cont.style.cssText =
  "  display: flex;padding: 20px;flex-wrap: wrap;justify-content: center;gap: 20px;min-height: calc(100vh-142px);box-sizing: border-box;";

footer.style.cssText =
  "color:white;background-color: #23a96e;  width: 100%;height: 141px;  font-size: 30px;font-weight: bold;display: flex;justify-content: center;align-items: center;";
