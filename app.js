//this is because so we could keep track of num of colors
var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init() {
    //mode buttons event listeners
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpSquares() {

    for (var i = 0; i < squares.length; i++) {

        //add click listeners to squares

        squares[i].addEventListener("click", function () {
            //grab color of a picked square
            var clickedColor = this.style.backgroundColor;
            //compare the color to picked color
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?"

            } else {
                this.style.backgroundColor = "#232323"
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}
function setUpModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === "Easy") {
                numSquares = 3;
            } else {
                numSquares = 6;
            }
            reset();
        });
    }
}

function reset() {
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors"
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick new random colors
    pickedColor = pickColor();
    //change color display to match new color
    colorDisplay.textContent = pickedColor;
    //change colors of the square
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue"

}

// easyBtn.addEventListener("click", function () {

//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }

// });
// hardBtn.addEventListener("click", function () {

//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {

//         squares[i].style.backgroundColor = colors[i];

//         squares[i].style.display = "block";

//     }
// });

resetButton.addEventListener("click", function () {
    reset();
});



function changeColors(color) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    //change each color to match the give color

}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //add num random color to an array
    for (var i = 0; i < num; i++) {
        arr.push(randomColors());
    }
    //return that array
    return arr;
}

function randomColors() {
    // pick a red 0 to 255
    var r = Math.floor(Math.random() * 256);
    // pick a green 0 to 255
    var g = Math.floor(Math.random() * 256);
    // pick a blue 0 to 255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}