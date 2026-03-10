// Array containing all possible Hex values
const arrHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Selecting DOM elements
const btnColor = document.querySelector("#btn-color");
const strColorDisplay = document.querySelector("#color-display");
const section = document.querySelector("#main-section");

// Event listener for the button click
btnColor.addEventListener("click", () => {
    let strHexColor = "#";

    // Loop 6 times to generate a valid random hex code
    for (let i = 0; i < 6; i++) {
        strHexColor += arrHex[getRandomNumber()];
    }

    // Display the generated hex code on screen
    strColorDisplay.innerText = strHexColor;
    
    // Apply the color as the background of the <section> element
    section.style.backgroundColor = strHexColor;
});

// Helper function to get a random index from the array
function getRandomNumber() {
    return Math.floor(Math.random() * arrHex.length);
}