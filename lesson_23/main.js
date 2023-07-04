/*
  Destructuring
  - Challenge
*/

let chosen = 2;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

let main = ([
  {
    title: n1,
    age: a1,
    available: bol1,
    skills: [, sk1],
  },
  {
    title: n2,
    age: a2,
    available: bol2,
    skills: [, sk2],
  },
  {
    title: n3,
    age: a3,
    available: bol3,
    skills: [, sk3],
  },
] = myFriends);

if (chosen == 1) {
  console.log(n1);
  console.log(a1);
  bol1 ? console.log("available") : console.log("Not available");
  console.log(sk1);
} else if (chosen == 2) {
  console.log(n2);
  console.log(a2);
  bol2 ? console.log("available") : console.log("Not available");
  console.log(sk2);
} else {
  console.log(n3);
  console.log(a3);
  bol3 ? console.log("available") : console.log("Not available");
  console.log(sk3);
}
