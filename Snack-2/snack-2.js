/* L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.*/

const firstWord = prompt(`Inserisci una parola`).trim();
const secondWord = prompt("Inserisci un' altra parola").trim();
let message;

//Validation
if (firstWord.length === 0 || secondWord === 0) {
    message = `Devi inserire due parole`;
} else {
    // Controllo quale parola è più lunga
    if (firstWord.length > secondWord.length) {
        message = secondWord + ` ` + firstWord;
    } else if (firstWord.length < secondWord.length) {
        message = firstWord + ` ` + secondWord;
    } else {
        message = `Le due parole hanno uguale lunghezza`;
    }
}

console.log(message);
document.getElementById(`display`).innerText = message;
