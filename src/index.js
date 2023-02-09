const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let arr = [];
    let phrase = [];
    for (let i = 0; i < expr.length; i = i+10) {
        let letter = expr.slice(i, i + 10);
            arr.push(letter);
    }
    for (let i = 0; i < arr.length; i++) {
        while (arr[i].startsWith('0')) {
            arr[i] = arr[i].substring(1);
        }
        while (arr[i].includes('0')) {
            arr[i] = arr[i].replace('10', '.')
        }
        while (arr[i].includes('11')) {
            arr[i] = arr[i].replace('11', '-')
        }
       if (MORSE_TABLE[arr[i]]) {
        phrase.push(MORSE_TABLE[arr[i]])}
        else { phrase.push(' ')}
    }
    return phrase.join('')
}

module.exports = {
    decode
}
