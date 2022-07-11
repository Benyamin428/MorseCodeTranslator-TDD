const translateSingleWord = (word) => {
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

    let translatedWord = "";

    for (let i=0; i<word.length; i++) {
        //use hashtag for unrecognised characters
        if (!morseDict[word[i].toLowerCase()]) {
            translatedWord += "#";
        }
        else {
            translatedWord += morseDict[word[i].toLowerCase()];
        }
        //seperate letters by space for morse code
        if (i != word.length-1) {
            translatedWord += " ";
        }
    }

    return translatedWord;
}

export const englishToMorse = (phrase) => {

    const splitPhrase = phrase.split(" ");

    let translatedPhrase = "";

    splitPhrase.forEach((word, index) => {
        translatedPhrase += translateSingleWord(word);

        //seperate words by space for morse code
        if (index != splitPhrase.length-1) {
            translatedPhrase += " / ";
        }
    });

    return translatedPhrase;
}
