// Fetch API #183

fetch("https://api.github.com/users/obaid-ba/repos")
  .then((result) => {
    console.log(result);
    let myData = result.json();
    console.log("-----------");
    console.log(myData);
    return myData;
  })
  .then((full) => {
    full.length = 10;
    return full;
  })
  .then((exe) => {
    console.log(exe[0].name);
    console.log(exe[1].name);
  });
