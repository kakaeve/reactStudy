let age: number;

age = 123;

let userName: string;

userName = "성호";

let isInstructor: boolean;
isInstructor = true;

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

type Person = { name: string; age: number };

let person: Person;

person = {
  name: userName,
  age: age,
};

let people: Person[];

let course: string | number = "리액트 가이드";
course = 1234;

function add(a: number, b: number): number {
  return a + b;
}

function printing(val: any) {
  console.log(val);
}

function insertAtBeginning<T>(arr: T[], val: T) {
  const newArr = [val, ...arr];
  return newArr;
}

const demo = [1, 2, 3];
const update = insertAtBeginning(demo, -1);

const stringArr = insertAtBeginning(["a", "b", "c"], "d");

stringArr[0].split(" ");

// update[0].split(" ");
