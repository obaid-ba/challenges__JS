let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
//210

console.log(new Set([...n1]).size * [...n1, ...n2].length * Math.min(...n1));
