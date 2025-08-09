const generatorButton = document.querySelector("div.button-container button")
const quoteText = document.getElementById("quoteText");
const authorText = document.getElementById("authorText");

let quotesJSON = [];
loadJSON();

let currentSelectedQuote = "";

/**
 * Picks a random quote/author from the quotes.json file and changes both <p> Elements to display their respective text.
 */
function generateQuote() {
    let index;

    do {
        index = Math.floor(Math.random() * quotesJSON.quotes.length);
        currentSelectedQuote = quotesJSON.quotes[index].quote;
    }
    while (quoteText.innerHTML === currentSelectedQuote);

    quoteText.innerHTML = currentSelectedQuote;
    authorText.innerHTML = quotesJSON.quotes[index].author;
}

/**
 * Load the quotes.json file asynchronously. Attach EventListener to Button after json has been loaded
 */
async function loadJSON() {
    let response = await fetch("Quotes.json") // Path is relative to the HTML file that loads the JSON --> index.html
    quotesJSON = await response.json();
    console.log(quotesJSON);

    generatorButton.addEventListener('click', generateQuote);
}