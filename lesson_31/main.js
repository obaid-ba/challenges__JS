let date = document.getElementById("date");

date.onblur = function () {
  date_1 = new Date();
  dateNew = new Date(date.value);
  HBD = date_1 - dateNew;
  console.log(Math.floor(HBD / 1000 / 60 / 60 / 24 / 365));
};
