import { expect, it } from "@jest/globals";
import { englishToMorse, morseToEnglish } from "./translator";

// Test code for English To Morse Code

// valid inputs
it("should translate hello to .... . .-.. .-.. ---", () => {
    const result = englishToMorse("hello");
    expect(result).toBe(".... . .-.. .-.. ---");
});

it("should translate bye to -... -.-- .", () => {
    const result = englishToMorse("bye");
    expect(result).toBe("-... -.-- .");
});

it("should translate sos to ... --- ...", () => {
    const result = englishToMorse("sos");
    expect(result).toBe("... --- ...");
});

it("should translate hello how are you to .... . .-.. .-.. --- / .... --- .-- / .- .-. . / -.-- --- ..-", () => {
    const result = englishToMorse("hello how are you");
    expect(result).toBe(".... . .-.. .-.. --- / .... --- .-- / .- .-. . / -.-- --- ..-");
});

it("should translate 999 to ----. ----. ----.", () => {
    const result = englishToMorse("999");
    expect(result).toBe("----. ----. ----.");
});

// invalid inputs

it("should translate ~~~~ how are you to # # # #", () => {
    const result = englishToMorse("~~~~");
    expect(result).toBe("# # # #");
});

it("should translate a~b~ how are you to .- # -... #", () => {
    const result = englishToMorse("a~b~");
    expect(result).toBe(".- # -... #");
});


// -----------------------

// Test code for Morse Code To English 

// valid inputs
it("should translate .... . .-.. .-.. --- to hello", () => {
    const result = morseToEnglish(".... . .-.. .-.. ---");
    expect(result).toBe("hello");
});

it("should translate -... -.-- . to bye", () => {
    const result = morseToEnglish("-... -.-- .");
    expect(result).toBe("bye");
});

it("should translate sos to ... --- ...", () => {
    const result = morseToEnglish("... --- ...");
    expect(result).toBe("sos");
});

it("should translate .... . .-.. .-.. --- / .... --- .-- / .- .-. . / -.-- --- ..- to hello how are you", () => {
    const result = morseToEnglish(".... . .-.. .-.. --- / .... --- .-- / .- .-. . / -.-- --- ..-");
    expect(result).toBe("hello how are you");
});

it("should translate ----. ----. ----. to .999", () => {
    const result = morseToEnglish("----. ----. ----.");
    expect(result).toBe("999");
});

// invalid inputs

it("should translate .)))))( to # # # # # # #", () => {
    const result = englishToMorse(".)))))(");
    expect(result).toBe("# # # # # # #");
});

it("should translate # to #", () => {
    const result = englishToMorse("#");
    expect(result).toBe("#");
});