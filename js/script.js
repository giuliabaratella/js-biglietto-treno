// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


let nKm = parseInt(prompt ('Quanti chilometri devi percorrere?'));

let age = parseInt(prompt ('Quanti anni hai?'));

let result = (document.getElementById('ticket-result'));

const priceKm = 0.21;
const discountUnder18 = 20 / 100;
const discountOver65 = 40 / 100;

let price = (nKm * priceKm);

if(isNaN(nKm) || isNaN(age)) {
    location.reload ();
}

if (age < 18) {
    price  = price - (price * discountUnder18);
} else if (age > 65) {
    price  = price - (price * discountOver65);
}

let n = price.toFixed(2);

result.innerHTML = n;


