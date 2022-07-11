const englishInput = document.querySelector("#englishInput");
const morseCodeInput = document.querySelector("#morseCodeInput");

// Following code refers to the translation of English to Morse
const translateSingleWordEnglishToMorse = (word, dictionary) => {

    let translatedWord = "";

    for (let i=0; i<word.length; i++) {
        //use hashtag for unrecognised characters
        if (!dictionary[word[i].toLowerCase()]) {
            translatedWord += "#";
        }
        else {
            translatedWord += dictionary[word[i].toLowerCase()];
        }
        //seperate letters by space for morse code
        if (i != word.length-1) {
            translatedWord += " ";
        }
    }

    return translatedWord;
}

const englishToMorse = (phrase) => {
    const morseDict = {
        'a': '.-',    'b': '-...',  'c': '-.-.', 'd': '-..',
        'e': '.',     'f': '..-.',  'g': '--.',  'h': '....',
        'i': '..',    'j': '.---',  'k': '-.-',  'l': '.-..',
        'm': '--',    'n': '-.',    'o': '---',  'p': '.--.',
        'q': '--.-',  'r': '.-.',   's': '...',  't': '-',
        'u': '..-',   'v': '...-',  'w': '.--',  'x': '-..-',
        'y': '-.--',  'z': '--..',  ' ': '/',
        '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
        '5': '.....', '6': '-....', '7': '--...', '8': '---..', 
        '9': '----.', '0': '-----', 
    };

    const splitPhrase = phrase.split(" ");

    let translatedPhrase = "";

    splitPhrase.forEach((word, index) => {
        translatedPhrase += translateSingleWordEnglishToMorse(word, morseDict);

        //seperate words by space for morse code
        if (index != splitPhrase.length-1) {
            translatedPhrase += " / ";
        }
    });

    return translatedPhrase;
}

// ----------------------------------------------------------------

// Following code refers to the translation of Morse code to English

const translateSingleWordMorseToEnglish = (morse, dictionary) => {

    let translated = "";
    const morseArray = morse.split(" ");

    morseArray.forEach(morseElement => {
        if (!dictionary[morseElement]) {
            //add hashtag for invalid morse code
            translated = "#";
        }
        else {
            translated += dictionary[morseElement];
        }
    })

    return translated;
}

const morseToEnglish = (phrase) => {
    const englishDict = { 
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

    const splitPhrase = phrase.split(" / ");

    let translatedPhrase = "";

    splitPhrase.forEach((morse, index) => {
        translatedPhrase += translateSingleWordMorseToEnglish(morse, englishDict);
        if (index != splitPhrase.length-1) {
            translatedPhrase += " ";
        }
    });

    return translatedPhrase;
}

const handleEnglishToMorseInput = (event) => {
    const phrase = englishToMorse(event.target.value);
    morseCodeInput.value = phrase;
}

const handleMorseToEnglish = (event) => {
    const phrase = morseToEnglish(event.target.value);
    englishInput.value = phrase;
}

englishInput.addEventListener("input", handleEnglishToMorseInput);
morseCodeInput.addEventListener("input", handleMorseToEnglish);