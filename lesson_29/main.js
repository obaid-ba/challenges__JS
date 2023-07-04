let myRequest = new XMLHttpRequest();
myRequest.open("GET", "./articles.json");
myRequest.send();
// console.log(myRequest);
/* myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
    setTimeout(() => {
      console.log("Data Loaded");
    }, 0);
  }
}; */

("====================================================================");
/* 
myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let mainData = JSON.parse(this.responseText);
    // console.log(mainData);
    for (value in mainData) {
      mainData[value].category = "All";
    }
    console.log(mainData);
    let updatedData = JSON.stringify(mainData);
    console.log(updatedData);
  }
}; 
*/

("====================================================================");

myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let mainData = JSON.parse(this.responseText);
    let mainDiv = document.createElement("div");
    mainDiv.id = "data";
    console.log(mainData);
    document.body.appendChild(mainDiv);
    for (value in mainData) {
      let secondDiv = document.createElement("div");
      let h2 = document.createElement("h2");
      let p = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      let textForh2 = document.createTextNode(mainData[value].title);
      let textForp = document.createTextNode(mainData[value].body);
      let textForp2 = document.createTextNode(
        `Author: ${mainData[value].author}`
      );
      let textForp3 = document.createTextNode(
        `Category: ${mainData[value].category}`
      );
      secondDiv.appendChild(h2);
      h2.appendChild(textForh2);
      secondDiv.appendChild(p);
      p.appendChild(textForp);
      secondDiv.appendChild(p2);
      p2.appendChild(textForp2);
      secondDiv.appendChild(p3);
      p3.appendChild(textForp3);
      mainDiv.appendChild(secondDiv);
    }
  }
};
