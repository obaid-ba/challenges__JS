let myRequest = new XMLHttpRequest();
myRequest.open("GET", "./articles.json");
myRequest.send();

myRequest.onload = function () {
  console.log(myRequest.status);
  console.log(myRequest.readyState);
  const code = new Promise((res, rej) => {
    if (myRequest.readyState === 4 && myRequest.status === 200) {
      res(JSON.parse(myRequest.responseText));
    } else {
      rej(Error("No Request"));
    }
  })
    .then((res) => {
      res.length = 5;
      return res;
    })
    .then((res) => {
      for (value in res) {
        let div = document.createElement("div");
        let h3 = document.createElement("h3");
        let p = document.createElement("p");
        div.appendChild(h3);
        h3.appendChild(document.createTextNode(res[value].title));
        p.appendChild(document.createTextNode(res[value].description));
        div.appendChild(p);
        document.body.appendChild(div);
      }
    })
    .catch((rej) => console.log(rej));
};
async function mainfetch() {
  try {
    let myData = await fetch("./articles.json");
    console.log(myData);
    let data = await myData.json();
    console.log(data);
    data.length = 5;
    for (value in data) {
      let div = document.createElement("div");
      let h3 = document.createElement("h3");
      let p = document.createElement("p");
      div.appendChild(h3);
      h3.appendChild(document.createTextNode(data[value].title));
      p.appendChild(document.createTextNode(data[value].description));
      div.appendChild(p);
      document.body.appendChild(div);
    }
  } catch (error) {
    console.log("No Data Found");
  }
}

console.log(mainfetch());
