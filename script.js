const arrHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btnColor = document.querySelector("#btn-color");
const strColorDisplay = document.querySelector("#color-display");

btnColor.addEventListener("click", function () {
    let strHexColor = "#";

    for (let i = 0; i < 6; i++) {
        strHexColor += arrHex[getRandomNumber()];
    }

    strColorDisplay.textContent = strHexColor;
    document.body.style.backgroundColor = strHexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * arrHex.length);
}