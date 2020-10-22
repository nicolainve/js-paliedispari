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
    var wordReverse = "";

    for (var i = word.length - 1; i >= 0; i--) {
        wordReverse += word[i];   
    }
    
    return wordReverse;
}