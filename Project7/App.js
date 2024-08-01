let productNameInputElement = document.getElementById('product-name');
let remainingCharsElement = document.getElementById('remaining-chars');

let maxAllowedCharacters = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;

    let remainingCharacters = maxAllowedCharacters - enteredTextLength;

    remainingCharsElement.textContent = remainingCharacters;
};


productNameInputElement.addEventListener('input', updateRemainingCharacters);
