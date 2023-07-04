let input = document.querySelector(".input");
let btn = document.querySelector(".add");
let task = document.querySelector(".tasks");

btn.onclick = function () {
  if (!input.value) {
    return;
  }
  let span = document.createElement("span");
  let btnDelete = document.createElement("button");

  btnDelete.innerText = "delete";

  btnDelete.onclick = function () {
    span.remove();
    window.localStorage.removeItem(`spann${span.dataset.index}`);
  };

  span.innerText = input.value;
  span.dataset.index = task.childElementCount;
  span.append(btnDelete);
  task.appendChild(span);
  input.value = "";
  window.localStorage.setItem(
    `span ${span.dataset.index}`,
    span.innerText.substr(0, span.innerText.indexOf("delete"))
  );
  btnDelete.onclick = function () {
    span.remove();
    window.localStorage.removeItem(`span ${span.dataset.index}`);
  };
};
