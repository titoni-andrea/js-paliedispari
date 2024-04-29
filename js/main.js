let parola = prompt("Inserisci una parola");


function ParolaPalindroma ( parola ) {
    let parolaReverse = ""

    for (let i = (parola.length - 1); i > -1 ; i--) {
     console.log(parola[i]);
     parolaReverse = parolaReverse + parola[i]
     console.log(parolaReverse)
        
    }
}

ParolaPalindroma(parola)