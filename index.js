// Get the root div element from the HTML
const rootDiv = document.getElementById("root");

// myAudio.addEventListener(
//   "ended",
//   function () {
//     this.currentTime = 0;
//     this.play();
//   },
//   false
// );

let person = prompt("Warning ! What is your name?");

if (person !== "") {
  const nameEl = document.getElementById("name");
  nameEl.textContent = `${person} IS A SCARY NAME`.toUpperCase();
  //   nameEl.style.color = "red";

  //insering audio
  var myAudio = new Audio("./assets/audioscare.mp3");
  myAudio.play();

  // Set the position of the root div to relative
  rootDiv.style.position = "relative";

  // Function to create a new div element with random background color
  function createNewDiv() {
    // Create a new div element
    const newDiv = document.createElement("div");

    // Set the width and height of the div to 100px
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";

    // Set the position of the div to absolute and position it randomly on the screen
    newDiv.style.position = "absolute";
    const rootWidth = rootDiv.clientWidth;
    const rootHeight = rootDiv.clientHeight;
    const leftPosition = Math.floor(Math.random() * (rootWidth - 100));
    const bottomPosition = Math.floor(Math.random() * (rootHeight - 100));
    newDiv.style.left = `${leftPosition}px`;
    newDiv.style.bottom = `${bottomPosition}px`;
    newDiv.classList.add("divChild");
    // Set the background color of the div to a random color
    const randomColor = getRandomColor();
    newDiv.style.borderColor = `${randomColor}`;

    newDiv.style.backgroundColor = randomColor;

    // Add the new div element to the root div
    rootDiv.appendChild(newDiv);

    // Return the new div element
    return newDiv;
  }

  // Function to generate a random color
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Create 10 new div elements with random background colors
  for (let i = 0; i < 10; i++) {
    createNewDiv();
  }

  // Move the div elements upward infinitely
  setInterval(() => {
    // Get all the div elements inside the root div
    const divElements = rootDiv.getElementsByTagName("div");

    // Loop through each div element and move it upward by 100px
    for (let i = 0; i < divElements.length; i++) {
      const currentDiv = divElements[i];
      const currentTop = parseInt(currentDiv.style.bottom) || 0;
      currentDiv.style.bottom = `${currentTop - 100}px`;

      // If the div element has moved past the top of the root div, move it to the bottom
      if (currentTop < -100) {
        currentDiv.style.bottom = `${rootDiv.clientHeight}px`;

        // Set the left position randomly between 0 and the width of the root div minus the width of the new div
        const rootWidth = rootDiv.clientWidth;
        const newDivWidth = 100;
        const leftPosition = Math.floor(
          Math.random() * (rootWidth - newDivWidth)
        );
        currentDiv.style.left = `${leftPosition}px`;
      }
    }
  }, 60);

  // Change the background color of the entire screen randomly every second
  setInterval(() => {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
  }, 40);

  // Function to create a new scary image element
  function createScaryImage() {
    // Create a new img element
    const newImg = document.createElement("img");

    // Set the src of the image to a scary image
    newImg.src = `./assets/img${Math.floor(Math.random() * 26 + 1)}.jpg`;
    console.log(newImg.src);

    // Set the width and height of the image to a random value between 100 and 200 pixels
    const imageSize = Math.floor(Math.random() * 200) + 300;
    newImg.style.width = `${imageSize}px`;
    newImg.style.height = `${imageSize}px`;

    // Set the position of the image to absolute and position it randomly on the screen
    newImg.style.position = "absolute";
    const rootWidth = rootDiv.clientWidth;
    const rootHeight = rootDiv.clientHeight;
    const leftPosition = Math.floor(Math.random() * (rootWidth - imageSize));
    const topPosition = Math.floor(Math.random() * (rootHeight - imageSize));
    newImg.style.left = `${leftPosition}px`;
    newImg.style.top = `${topPosition}px`;

    // Add the new image element to the root div
    rootDiv.appendChild(newImg);

    // Remove the image element after 5 seconds
    setTimeout(() => {
      rootDiv.removeChild(newImg);
    }, 400);
  }

  // Create a new scary image every second
  setInterval(() => {
    createScaryImage();
  }, 100);
}
