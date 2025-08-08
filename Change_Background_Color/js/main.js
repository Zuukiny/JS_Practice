const button = document.querySelector('button');
const body = document.querySelector('body');

const colors = [
    'red',
    'blue',
    'green',
    'yellow',
    'purple',
    'orange',
    'pink',
    'cyan',
    'white',
    'black',
]

body.style.backgroundColor = colors[parseInt(Math.random() * colors.length)];
button.addEventListener('click', changeBackgroundColor);

/**
 * Changes the background Color when the button is pressed. 
 * Simple logic was added that hinders the same color to be picked successively.
 */
function changeBackgroundColor() {
    currentColor = body.style.backgroundColor;
    let colorIndex = parseInt(Math.random() * colors.length);

    // colorIndex is the current selected bg-color
    while(currentColor === colors[colorIndex]) {
        colorIndex = parseInt(Math.random() * colors.length);
    }
    
    body.style.backgroundColor = colors[colorIndex];
    console.log(`Background Color changed to: ${colors[colorIndex]}`);
}