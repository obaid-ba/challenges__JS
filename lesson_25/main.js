let btn = document.getElementById("btn");

document.getElementById("register").onsubmit = function () {
  let phoneInput = document.getElementById("phone").value;
  let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
  let validation = phoneRe.test(phoneInput);
  if (validation === false) {
    return false;
  }
  return true;
};
