const inputField = document.getElementById("changeColorText");
const submitInputButton = document.getElementById("submitSelectedColorChange").addEventListener('click', submitColorChange);
const randomInputButton = document.getElementById("submitRandomColor").addEventListener('click', submitRandomColor);

/**
 * Triggers when the 'Submit Selected' Button is pressed. It does a check whether the input is valid (see: <input pattern>).
 */
function submitColorChange() {
    if (inputField.checkValidity()) {
        changeBackgroundColor(inputField.value);
    }
    else {
        alert("Input Color is Invalid");
    }
}

/**
 * Randomly generate a 6-digit long String, representing a color for the changeBackgroundColor functions.
 */
function submitRandomColor() {
    let hexContainer = [];
    for (let i = 0; i < 6; i++) { 
        let randomHex = (Math.random() * 15); // Random number between 0 - 15
        hexContainer[i] = Math.floor(randomHex);
    }

    let hexValue = "";
    for (let i = 6; i > 0; i--) {
        let index = Math.floor((Math.random() * i));
        hexValue += hexContainer[index].toString(16);

        hexContainer.splice(index, 1); // Remove picked element from Container
    }

    changeBackgroundColor(hexValue);
}

/**
 * Contains the logic to change the windows background color if input is provided. Else display plain boring white. :(
 * @param {String} changeColorTo - Hex Value to change to background Color to.
 */
function changeBackgroundColor(changeColorTo) {
    let body = document.body
    
    if (changeColorTo !== "") {
        body.style.backgroundColor = "#" + changeColorTo; 
    }
    else {
        body.style.backgroundColor = "#FFFFFF"; // Fallback when input is empty
    }  

    console.log("Change Color To: ", changeColorTo);
}
    
