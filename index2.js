// const root = document.getElementById("root");
// let id = 0;

// function randomColor() {
//   const arr = ["a", "b", "c", "d", "e", "f", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color = color + arr[Math.floor(Math.random() * arr.length)];
//   }
//   console.log(color);
//   return color;
// }

// Array(20)
//   .fill("")
//   .forEach(() => {
//     const randomColor1 = randomColor();
//     const childNode = document.createElement("div");
//     childNode.classList.add("divChild");
//     childNode.setAttribute("id", Math.floor(Math.random() * 20 + 1));
//     childNode.style.backgroundColor = `${randomColor1}`;
//     childNode.style.position = "relative";
//     childNode.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;
//     childNode.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`;
//     root.appendChild(childNode);
//   });

// function movDiv() {
//   const element = document.getElementById(Math.floor(Math.random() * 20 + 1));
//   element.style.position = "relative";
//   element.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;

//   element.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`;
// }

// setInterval(movDiv, 100);
const root = document.getElementById("root");
let id = 0;
const divChildren = [];

function randomColor() {
  const arr = ["a", "b", "c", "d", "e", "f", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + arr[Math.floor(Math.random() * arr.length)];
  }
  console.log(color);
  return color;
}

Array(10)
  .fill("")
  .forEach(() => {
    const randomColor1 = randomColor();
    const childNode = document.createElement("div");
    childNode.classList.add("divChild");
    const childId = Math.floor(Math.random() * 20 + 1);
    childNode.setAttribute("id", childId);
    childNode.style.backgroundColor = `${randomColor1}`;
    childNode.style.position = "absolute";
    childNode.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;
    childNode.style.bottom = "0px"; // set initial position to bottom of the screen
    root.appendChild(childNode);
    divChildren.push(childNode);
  });

// function animateDivs() {
//   divChildren.forEach((divChild) => {
//     const currentBottom = parseInt(divChild.style.bottom || 0);
//     const delay = Math.random() * 2000; // add random delay to each element
//     divChild.style.transition = "none"; // disable transition for initial position
//     divChild.style.bottom = `${currentBottom}px`; // set initial position
//     setTimeout(() => {
//       divChild.style.transition = "bottom 1s linear"; // enable transition for smooth movement
//       divChild.style.bottom = `${
//         currentBottom + Math.floor(Math.random() * 200 + 100)
//       }px`; // move the element
//     }, delay);
//   });
//   requestAnimationFrame(animateDivs); // call this function recursively
// }

// animateDivs(); // start the animation
