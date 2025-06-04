/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

console.log("ESERCIZIO 1");

const n1 = 35;
const n2 = 27;

if (n1 > n2) {
  console.log(n1 + " è più grande di " + n2);
} else if (n1 === n2) {
  console.log("I due numeri sono uguali");
} else {
  console.log(n2 + " è più grande di " + n1);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

console.log("\nESERCIZIO 2");

if (n1 !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

console.log("\nESERCIZIO 3");

if (n1 % 5 === 0) {
  console.log(n1 + " è divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

console.log("\nESERCIZIO 4");

if (n1 === 8 || n2 === 8 || n1 - n2 === 8 || n2 - n1 === 8 || n1 + n2 === 8) {
  console.log(
    "Almeno uno dei due numeri scelti ha una relazione con il numero 8"
  );
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

console.log("\nESERCIZIO 5");

var totalShoppingCart = 68;
if (totalShoppingCart > 50) {
  console.log(
    "La sua spesa è superiore a 50€, per cui la spedizione è gratuita! L'ammontare della spesa è pari a " +
      totalShoppingCart +
      "€"
  );
} else {
  totalShoppingCart += 10;
  console.log("L'ammontare della spesa è pari a " + totalShoppingCart + "€");
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

console.log("\nESERCIZIO 6");

totalShoppingCart -= totalShoppingCart / 5;
if (totalShoppingCart > 50) {
  console.log(
    "Oggi è il Black Friday, le faremo uno sconto del 20%. Inoltre, la sua spesa è superiore a 50€, per cui la spedizione è gratuita! L'ammontare della spesa è pari a " +
      totalShoppingCart +
      "€"
  );
} else {
  totalShoppingCart += 10;
  console.log(
    "Oggi è il Black Friday, le faremo uno sconto del 20%. L'ammontare della spesa è pari a " +
      totalShoppingCart +
      "€"
  );
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

console.log("\nESERCIZIO 7");

const num1 = 10;
const num2 = 10;
const num3 = 0;

if (num1 <= num2 && num1 <= num3) {
  console.log("Il numero più piccolo dei tre è " + num1);
  if (num2 <= num3) {
    console.log("Il secondo numero più piccolo è " + num2);
    console.log("L'ultimo numero è " + num3);
  } else {
    console.log("Il secondo numero più piccolo è " + num3);
    console.log("L'ultimo numero è " + num2);
  }
} else if (num2 <= num1 && num2 <= num3) {
  console.log("Il numero più piccolo dei tre è " + num2);
  if (num1 <= num3) {
    console.log("Il secondo numero più piccolo è " + num1);
    console.log("L'ultimo numero è " + num3);
  } else {
    console.log("Il secondo numero più piccolo è " + num3);
    console.log("L'ultimo numero è " + num1);
  }
} else {
  console.log("Il numero più piccolo dei tre è " + num3);
  if (num2 <= num1) {
    console.log("Il secondo numero più piccolo è " + num2);
    console.log("L'ultimo numero è " + num1);
  } else {
    console.log("Il secondo numero più piccolo è " + num1);
    console.log("L'ultimo numero è " + num2);
  }
}

// oppure

const sort = [];

sort.push(num1);
sort.push(num2);
sort.push(num3);

console.log(
  "L'ordine dei tre numeri è il seguente (con metodo): " +
    sort.sort((a, b) => a - b)
);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

console.log("\nESERCIZIO 8");

const elem = "Stringa";

if (typeof elem === "number") {
  console.log("Il valore fornito è un numero");
} else {
  console.log("Il valore fornito non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

console.log("\nESERCIZIO 9");

if (num1 % 2 === 0) {
  console.log(num1 + " è pari");
} else {
  console.log(num1 + " è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

console.log("\nESERCIZIO 10");

let val = 10;
if (val <= 5) {
  console.log("Uguale a 5 o minore");
} else if (val < 10) {
  console.log("Meno di 10, ma più di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

console.log("\nESERCIZIO 11");

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";
console.log(me);

//oppure

me["city"] = "Philadelphia";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

console.log("\nESERCIZIO 12");

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

console.log("\nESERCIZIO 13");

me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

console.log("\nESERCIZIO 14");

const array = [];
array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.push(5);
array.push(6);
array.push(7);
array.push(8);
array.push(9);
array.push(10);
console.log(array);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

console.log("\nESERCIZIO 15");

array.splice(9, 1, 100);
console.log(array);
