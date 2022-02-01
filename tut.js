// Normal Function in JS
export default function doSomething() {
  // function body
}

// Arrow Function in JS
export const doSomething = () => {
  // function body
};

const MyComponent = () => {
  return <div></div>;
};

<button
  onClick={() => {
    console.log("hello world");
  }}
></button>;

let age = 10;
let name = "Pedro";

if (age > 10) {
  name = "Pedro";
} else {
  name = "Jack";
}

name = age > 10 && "Pedro"; // if true then name = "Pedro"
name = age > 10 || "Pedro"; // if false then name = "Pedro"
name = age > 10 ? "Pedro" : "Jack";

const MyComponent = () => {
  return age > 10 ? <div>Pedro</div> : <div>Jack</div>;
};
