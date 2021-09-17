let inputText = document.querySelector("#input-text");
let submitEl = document.querySelector("#submit-el");
let displayedText = document.querySelector("#output-text");

function handleClick(event) {
    event.preventDefault();
    let returnedText = spongebobify(inputText.value);
    displayedText.textContent = returnedText;
    // returnedText.select();
    // returnedText.setSelectionRange(0,99999);
    navigator.clipboard.writeText(returnedText);
}


function spongebobify(input) {
    let output = "";
    for ( let i = 0 ; i < input.length ; i++ ) {
        let caseState = (Math.floor(Math.random() * 2) == 0);
        if (caseState == 0) {
            output = output.concat(input[i].toUpperCase());
        } else {
            output = output.concat(input[i].toLowerCase());
        }
    };
    return output
};

submitEl.addEventListener("click", handleClick)