//Funzione per generare un numerorandom da 1 a 100

function createRandomNumber(min, max) {
  var randomNumber = Math.floor(Math.random() * max) + min
  return randomNumber;
}

//Funzione per controllare se un numero è presente in un array

function isMatchInArray(num, numArray) {
  for(var i = 0; i < numArray.length; i++){
    if ( num === numArray[i]){
      return true;
    }
  }
  return false;
}

//Funzione per gestire slide dei colori

function slideColors() {

  var squareEl = $('.opacity')

  if ( $('.last').hasClass('opacity') ){
    $('.first').addClass('opacity')
    $('.last').removeClass('opacity')
  } else{
    squareEl.removeClass('opacity')
    squareEl.siblings().removeClass('opacity')
    squareEl.next().addClass('opacity')
  }
}
