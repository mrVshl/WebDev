//  First Example: Sum numbers

 const calculateSumButtonElement = document.querySelector('#calculator button');


function calculateSum() {
    const userNumberInputElement = document.getElementById('user-number');
    const enteredNumber = userNumberInputElement.value;

    let sumUpToNumber = 0;

    for(let i = 0; i <= enteredNumber; i++){
        sumUpToNumber = sumUpToNumber + i;
    }

    const outputResultElement = document.getElementById('calculated-sum');
    
    outputResultElement.textContent = sumUpToNumber;
    outputResultElement.style.display = 'block';
}


 calculateSumButtonElement.addEventListener('click', calculateSum);


 //  Second Example: Highlight links


 const highlightLinksButtonElement = document.querySelector('#highlight-links button');

function highLightLinks() {
    const anchorElements = document.querySelectorAll('#highlight-links a');

    for(const anchorElement of anchorElements){
        anchorElement.classList.add('highlight');
    }
}

 highlightLinksButtonElement.addEventListener('click', highLightLinks);


 //  Third Example: Display User Data

 const myData = {
    firstName : 'Vishal',
    lastName : 'Kumar',
    age : 22
 };

 const displayUserDataElement = document.querySelector('#user-data button');

 function displayUserData() {

     const outputDataElement = document.getElementById('output-user-data');
     outputDataElement.innerHTML = '';

    for(const key in myData){
        const newUserDataListElement = document.createElement('li');
        const outputText = key.toUpperCase() + ': ' + myData[key];

        newUserDataListElement.textContent = outputText;
        outputDataElement.append(newUserDataListElement);
    }

 }

 displayUserDataElement.addEventListener('click', displayUserData);

 // Fourth Example : Statistics / roll the dice

 const rollDiceButtonElement = document.querySelector('#statistics button');

 function rollDice() {
     
 }
function driveNumberOfDiceRolls() {

}
 rollDiceButtonElement.addEventListener('click', driveNumberOfDiceRolls);
