/*Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.*/

const displayElement = document.getElementById(`display`);

// Inizializzo una variabile per sommare 
let sum = 0; 
let isValid = true; 

// Chiedo numero 10 volte all'utente
for (let i = 0; i < 10; i++) {
    const number = parseInt(prompt(`Inserisci un numero`));
    if (isNaN(number)) {
        isValid = false;
    } else {
        sum += number;
    }
}    
    
if (isValid) {
    displayElement.innerText = `somma finale: ` + sum; 
} else {
    displayElement.innerText = `Errore: hai inserito elementi non validi`; 
}