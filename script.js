import { englishToMorse, morseToEnglish } from "./translator.js";

const englishInput = document.querySelector("#englishInput");
const morseCodeInput = document.querySelector("#morseCodeInput");

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