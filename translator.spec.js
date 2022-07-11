import { expect, it } from "@jest/globals";
import { englishToMorse } from "./translator";

// valid inputs (positive tests)
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

