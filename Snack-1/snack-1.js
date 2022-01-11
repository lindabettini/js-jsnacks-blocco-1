/*L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.*/

//ç Chiedo i numeri alll'utente 

const displayElement = document.getElementById(`display`);
const firstNumber = parseInt(prompt(`Inserisci un numero`));
const secondNumber = parseInt(prompt(`Inserisci un altro numero`));

let message = `Il numero maggiore è `;

//ç Validazione e valutazione
if (isNaN(firstNumber) || isNaN(secondNumber)) {
    message = `Uno dei valori inseriti non è valido`;
} else {
    if (firstNumber > secondNumber) {
        message += firstNumber;
    } else if (firstNumber < secondNumber) {
        message += secondNumber;
    } else {
        message = `I numeri sono uguali`;
    }
}

displayElement.innerText = message;