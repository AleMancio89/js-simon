/*
Un alert espone 5 numeri casuali diversi.
Dopo 30 secondi l'utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
*/

var NUMPCNUMBERS = 5;

//Creo 5 numeri random (da 1 a 100), li mostro all'utente e li salvo in un array

$('.centralBtn').click(function(){

  var pcNumbers = [];

  while (pcNumbers.length < NUMPCNUMBERS){
    var number = createRandomNumber(1, 100);
    if (!isMatchInArray(number, pcNumbers)){
      pcNumbers.push(number);
    }
  }

  alert(pcNumbers.join(' - '));

  //Attiva l'animazione del cambio colore

  var slider = setInterval(slideColors, 1000);

  //Dopo 30 secondi richiedo 5 numeri all'utente e li salvo in un array
  var userNumbers= [];
  var numRightAnswer = 0;
  var rightAnswer = [];

  setTimeout(

    //Chiedo 5 numeri all'utente, verifico che non ci siano doppi inserimenti e li salvo in un array
    function(){
      while (userNumbers.length < 5) {
        var userInput = parseInt(prompt('Inserisci il numero'));
        if (isMatchInArray(userInput, userNumbers)){
          alert('Hai già inserito questo numero!')
        } else {
          userNumbers.push(userInput);
        }
      }

    //Verifico quanti numeri siano corretti
      for(var i = 0; i < pcNumbers.length;i++) {
        if (isMatchInArray(userNumbers[i], pcNumbers)){
          rightAnswer.push(pcNumbers[i]);
        }
      }

    //Mostro il numero di risposte corrette, il dettaglio e blocca animazione colore
      clearInterval(slider);
      alert('Hai indovinato ' + rightAnswer.length + ' numeri');
      if (rightAnswer.length != 0){
        alert('I numeri che hai indovinato sono: ' + rightAnswer.join(' - '));
      }
    },
    30000
  )

})
