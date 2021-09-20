let heroImg = document.querySelector('#hero-img');
let inputText = document.querySelector("#input-text");
let submitEl = document.querySelector("#submit-el");
let displayedText = document.querySelector("#output-text");
let clipboardAlert = document.querySelector("#clipboard-alert");

function handleClick(event) {
    event.preventDefault();
    let returnedText = spongebobify(inputText.value);
    displayedText.textContent = returnedText;
    navigator.clipboard.writeText(returnedText);
    hideShowAlert();
}

function hideShowAlert() {
    clipboardAlert.classList.add('show');
    setTimeout( () => {
        clipboardAlert.classList.remove('show');
    },2000);
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
function reloadPage() {
    location.reload();
    return false();
}

submitEl.addEventListener("click", handleClick);
heroImg.addEventListener("click", reloadPage);