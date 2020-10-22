// PALINDROMA

var userWord = prompt('Inserisci una parola');
console.log('Parola: ', userWord);

var reverseUserWord = reverse(userWord);

if (userWord != reverseUserWord) {
    console.log('Inverso: ', reverseUserWord);
} else {
    console.log('Hai inserito una parola palindroma');
}

function reverse(word) {
    var reverse = "";

    for (var i = word.length - 1; i >= 0; i--) {
        reverse += word[i];   
    }

    /*
    OR var reverse = word.split('').reverse().join('');
    */
    
    return reverse;
}