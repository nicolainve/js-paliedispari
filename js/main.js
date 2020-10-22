// PALINDROMA

do {
    var userWord = prompt('Inserisci una parola. Oppure il titolo dell\'ultimo film di Christopher Nolan');
} while (userWord == '');

console.log('Parola: ', userWord);

var reverseUserWord = reverse(userWord);

if (userWord != reverseUserWord) {
    console.log('Inverso: ', reverseUserWord);
} else if (userWord == 'tenet') {
    console.log('Hai inserito una parola palindroma');
    document.getElementById('img').className = 'img'
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

// PARI E DISPARI


do {
    var choice = prompt('Pari o Dispari').trim();
} while (choice != 'pari' && choice != 'dispari');

console.log(choice);

do {
    var userNumber = parseInt( prompt('Inserisci un numero da 1 a 5') );
} while (userNumber < 1 || userNumber > 5);

console.log(userNumber);

var computerNumber = randomNumber();

console.log(computerNumber);

var sum = userNumber + computerNumber;

console.log(sum);

var result = evenOdd(userNumber, computerNumber);

if (choice == result) {
    console.log('Hai vinto!');
} else {
    console.log('Hai perso...');
}

function randomNumber() {
    var number = Math.floor(Math.random() * 5) + 1;

    return number;
}

function evenOdd(num1, num2) {
    var result = num1 + num2;
    if (result % 2 == 0) {
        console.log('pari');
        result = 'pari';
    } else {
        console.log('dispari');
        result = 'dispari';
    }

    return result;
}