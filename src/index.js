// Add javascript code to Party Parrot Clicker such that:

// 1. A click on the Party Parrot increases the counter by 1
let count = 0;

const button = document.getElementById("addPartyParrots");
const clickCount = document.getElementById("clickCount");
const resetButton = document.getElementById("reset")

// 2. Add the click event listener
button.addEventListener("click", () => {
    count+=1;
    clickCount.textContent = `Click: ${count}`;
    if(count == 10) {
      document.body.style.backgroundColor = "blue";
    }

});


// 2. Add a button called ‘reset’ that will reset the
//    click count to ‘0’.

resetButton.addEventListener("click", () => {
    count = 0;
    clickCount.textContent = `Click: ${count}`;
    document.body.style.backgroundColor = "white";
});


// 3. Add an effect whenever the clickCount
//    reaches a specific number.
//    (Ex: make parrot bigger, smaller, change the text/emoji,
//    etc.)


// Extra:
// // Box 1: When the mouse hovers over Box 1, switch the background to pink

const boxOne = document.getElementById("box-one")
boxOne.addEventListener("mouseenter", () => {
    document.body.style.backgroundColor = "pink";
});

// Triggers when the mouse moves away from the element
boxOne.addEventListener("mouseleave", () => {
    document.body.style.backgroundColor = ""; // Resets back to the original color
});
// Box 2: When the spacebar is pressed down, make the text in Box 2 turn into a flan emoji

const boxTwo = document.getElementById("box-two")
const boxTwoText = document.getElementById("box-two-text")
document.addEventListener("keydown", (event) => {
  if (event.key === " " || event.code === "Space") {
    // Prevent the default behavior (like scrolling down the webpage)
    event.preventDefault(); 
    
    boxTwoText.textContent = "🍮"
    // Add your code here
  }
});

// Box 3: When Box 3 is clicked on, make Party Parrot appear and disappear
const boxThree = document.getElementById("box-three")
const partyParrot = document.getElementById("party-parrot")
boxThree.addEventListener("click", (event) => {
    // Check if the parrot is currently visible (not hidden)
    if (partyParrot.style.display !== "none") {
        partyParrot.style.display = "none";    // Hide it
    } else {
        partyParrot.style.display = "block";   // Show it
    }
});
// Box 4: When Box 4 is double clicked, an alert shows up
const boxFour = document.getElementById("box-four")
boxFour.addEventListener("dblclick", (event) => {
    // Check if the parrot is currently visible (not hidden)
    alert('hello!');
});
