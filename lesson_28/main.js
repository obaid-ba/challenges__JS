/* 
  Promise #184
  - All
  - All Settled
  - Race 
*/
const myfirstpromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Iam The First Promise");
  }, 5000);
});

const mysecondpromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Iam The second Promise");
  }, 1000);
});

const mythirdpromise = new Promise((res, rej) => {
  setTimeout(() => {
    rej("Iam The third Promise");
  }, 2000);
});

Promise.all([myfirstpromise, mysecondpromise, mythirdpromise]).then(
  (res) => {
    console.log(res);
  },
  (rej) => {
    console.log(rej);
  }
);

Promise.allSettled([myfirstpromise, mysecondpromise, mythirdpromise]).then(
  (res) => console.log(res),
  (rej) => console.log(rej)
);
Promise.race([myfirstpromise, mysecondpromise, mythirdpromise]).then(
  (res) => console.log(res),
  (rej) => console.log(rej)
);
