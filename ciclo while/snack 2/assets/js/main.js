/*
Ciclo While
snack 2
genera un numero casuale tra 1 e 100 e poi chiedi all'utente di indovinare il numero. Il programma poi deve far comparire un messaggio "il numero è troppo alto" oppure "il numero è troppo basso" nel momento in cui il numero detto dall'utente non è perfettamente uguale al numero estratto in modo casuale
*/

let secretNumber = Math.floor(Math.random() * 100) + 1;
console.log("da indovinare:", secretNumber);
let guess;

do {
    guess = Number(prompt("Inserisci un numero da 1 a 100:"));
    if (guess > secretNumber) {
        alert("il numero " + guess + " è troppo alto");
    } else if (guess < secretNumber) {
        alert("il numero " + guess + " è troppo basso");
    }
} while (guess !== secretNumber);

alert("HAI INDOVINATO!! Il numero era " + secretNumber);