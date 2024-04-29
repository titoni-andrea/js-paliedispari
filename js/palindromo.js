let parola = prompt("Inserisci una parola");


function ParolaPalindroma ( nome ) {
    let parolaReverse = ""

    for (let i = (nome.length - 1); i > -1 ; i--) {
    //  console.log(parola[i]);
     parolaReverse = parolaReverse + nome[i]
        
    }
    console.log(parolaReverse)

    if (parolaReverse == nome) {
        return alert("La parola che hai scelto è palindroma!")
    }

    else {
        alert("La parola che hai scelto NON è palindroma")
    }
}

ParolaPalindroma(parola)