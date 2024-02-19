// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

  const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
  }
  
  const paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
  }
  
  const amy = {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
  }
  
  let prices = [34, 5, 2]
  const shippingCostSenzaSconto = 50
  let utenteCheEffettuaLAcquisto = amy //cambia il valore qui per provare se il tuo algoritmo funziona!
  
  // let utenti = []
  // utenti.push(marco, paul,amy)
  // console.log(utenti);

function costoCarrelloTotale (user, prices) {
    let costoTotale = 0;

  //costo tot del carrello
    for (let i = 0; i < prices.length; i++) {
    costoTotale = costoTotale + prices[i];
    }

    console.log("Costo totale degli articoli nel carrello: " + costoTotale);

  // caso: utene ambassador=true
    if (user.isAmbassador) {
      costoTotale *= 0.7;
      console.log(user.name +" "+ user.lastName + " sei Ambassador: hai lo sconto del 30%");
    } else {
      console.log(user.name +" "+ user.lastName + " non è Ambassador");
    }

  
  // costo spedizione
    if (costoTotale <= 100) {
      costoTotale = costoTotale + shippingCostSenzaSconto
    } else {
      console.log("spedizione gratuita");
    }

    console.log("Costo con spedizione: " + costoTotale);
}

costoCarrelloTotale (marco, prices)

//specifico se gli utenti sono o meno Ambassador

 let utenti = []
 utenti.push(marco, paul,amy)
 console.log(utenti);

 for (i = 0; i < utenti.length; i++) {
     let frase = utenti[i].name + " " + utenti[i].lastName;  

  if (utenti[i].isAmbassador) {
    frase += " è Ambassador"
  } else {
    frase += " non è Ambassador"
  }

  console.log(frase);

}

//Solo oggetti che contengono gli Ambassador

let soloAmbassador = []
for (i = 0; i < utenti.length; i++) {
  if (utenti[i].isAmbassador) {
  soloAmbassador.push(utenti[i])
  }
}

console.log(soloAmbassador);




