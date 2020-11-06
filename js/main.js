/*
Un alert espone 5 numeri casuali diversi.
Dopo 30 secondi l'utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
*/

//Creo 5 numeri random (da 1 a 100), li mostro all'utente e li salvo in un array
var NUMPCNUMBERS = 5;
var pcNumbers = [];

while (pcNumbers.length < NUMPCNUMBERS){
  var number = createRandomNumber1to100();
  if (!isMatchInArray(number, pcNumbers)){
    pcNumbers.push(number);
  }
}
alert(pcNumbers.join(' - '));


//Dopo 30 secondi richiedo 5 numeri all'utente e li salvo in un array
var userNumbers= [];
var numRightAnswer = 0;
var rightAnswer = [];

setTimeout(

  //Chiedo 5 numeri all'utente e li salvo in un array
  function(){
    while (userNumbers.length < 5) {
      var userInput = parseInt(prompt('Inserisci il numero'));
      userNumbers.push(userInput);
    }
  //Verifico quanti numeri siano corretti
    for(var i = 0; i < pcNumbers.length;i++) {
      if (pcNumbers[i] === userNumbers[i]){
        numRightAnswer++;
        rightAnswer.push(pcNumbers[i]);
      }
    }

  //Mostro il numero di risposte corrette e il dettaglio
    alert('Hai indovinato ' + numRightAnswer + ' numeri');
    if (rightAnswer.length != 0){
        alert('I numeri che hai indovinato sono: ' + rightAnswer)
    }

  },
  30000
)
