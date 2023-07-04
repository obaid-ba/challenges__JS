// Higher Order Functions - Challenge

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString
  .split("")
  .map(function (ele) {
    // d = ele == "_" ? (ele = " ") : ele;
    f = ele.replace("_", " ");
    return f;
  })
  .filter(function (ele) {
    return ele !== "," && !Number(ele);
  })
  .reduce(function (acu, curr) {
    return acu === curr ? acu.slice(acu) : acu + curr;
  });

console.log(solution.slice(false, solution.length - (true + !false)));
