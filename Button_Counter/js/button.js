// Get template from index.html and append it
const template = document.getElementById("template-container");
const clone = template.content.cloneNode(true);

// Get both buttons from the template clone
const buttonIncrement = clone.querySelector("#incrementButton"); // querySelector("#incrementButton") --> references id (#)
const buttonDecrement = clone.querySelector("#decrementButton");

// Get <p> Element from template clone
const counterContainer = clone.querySelector(".counter-display"); // querySelector(".counter-display") --> references css-class (.)

// Get DropDown Menu
const dropdownMenu = clone.querySelector("#dropdownStepSelector");


// Append the template to the index.html <div> with ID = "counterComplex"
document.getElementById("counterComplex").appendChild(clone);



/// Increment Button ///
buttonIncrement.onclick = function() {
    let counter = Number(counterContainer.innerHTML);
    let stepConfig = Number(dropdownMenu.value);
    counter += stepConfig;
    counterContainer.innerHTML = counter; // innerHTML is a property, not a function
}

/// Decrement Button ///
buttonDecrement.onclick = function() {
    let counter = Number(counterContainer.innerHTML);
    let stepConfig = Number(dropdownMenu.value);
    counter -= stepConfig;
    counterContainer.innerHTML = counter;
}
