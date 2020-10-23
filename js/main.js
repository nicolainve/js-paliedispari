// PALINDROMA

do {
    var userWord = prompt('Inserisci una parola. Oppure il titolo dell\'ultimo film di Christopher Nolan');
} while (userWord == '');

document.getElementById('userword').innerHTML = 'Parola: ' + userWord;

var reverseUserWord = reverse(userWord);

if (userWord != reverseUserWord) {
    document.getElementById('reverse-userword').innerHTML = 'Inverso: ' + reverseUserWord;
} else {
    document.getElementById('reverse-userword').innerHTML = 'Hai inserito una parola palindroma';
}

if (userWord == 'tenet') {
    document.getElementById('img').className = 'img';
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

document.getElementById('choice').innerHTML = choice;

do {
    var userNumber = parseInt( prompt('Inserisci un numero da 1 a 5') );
} while (userNumber < 1 || userNumber > 5);

document.getElementById('user-number').innerHTML = userNumber;

var computerNumber = randomNumber();

document.getElementById('computer-number').innerHTML = computerNumber;

var sum = userNumber + computerNumber;

document.getElementById('sum').innerHTML = sum;

var result = evenOdd(userNumber, computerNumber);

if (choice == result) {
    document.getElementById('feedback').innerHTML = 'Hai vinto!';
} else {
    document.getElementById('feedback').innerHTML = 'Hai perso...';
}

function randomNumber() {
    var number = Math.floor(Math.random() * 5) + 1;

    return number;
}

function evenOdd(num1, num2) {
    var result = num1 + num2;
    if (result % 2 == 0) {
        document.getElementById('result').innerHTML = 'pari';
        result = 'pari';
    } else {
        document.getElementById('result').innerHTML = 'dispari';
        result = 'dispari';
    }

    return result;
}