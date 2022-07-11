import { expect, it } from "@jest/globals";
import { englishToMorse } from "./translator";

// valid inputs (positive tests)
it("should translate hello to ......-...-..---", () => {
    const result = englishToMorse("hello");
    expect(result).toBe("......-...-..---");
  });