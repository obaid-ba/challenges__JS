let list = document.querySelectorAll("ul li");
let change = document.querySelector("div");

if (window.localStorage.getItem("color")) {
  // if found  color in localStorage
  // -1- Add color to div
  change.style.backgroundColor = window.localStorage.getItem("color");
  // -2- Remove Active Class From All li(s)
  list.forEach((li) => {
    li.classList.remove("active");
  });
  // -3- Add Active Class To current Color
  document
    .querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
    .classList.add("active");
}

list.forEach((li) => {
  li.addEventListener("click", (e) => {
    // console.log(e.currentTarget.dataset.color);
    //Remove Active Class From All li(s)
    list.forEach((li) => {
      li.classList.remove("active");
    });
    // Add Active Class to Current Element
    e.currentTarget.classList.add("active");
    // Add current Color To Local storage
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    // change div background-color
    change.style.backgroundColor = e.currentTarget.dataset.color;
  });
});
