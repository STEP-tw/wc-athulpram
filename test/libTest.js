const assert = require("assert");
const { wc } = require("./../src/lib");

const directory = {
  vowels: ["a", "e", "i", "o", "u"].join("\n"),
  tenNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].join("\n")
};

const fs = {
  readFileSync: (filePath, encoding) => {
    return directory[filePath];
  }
};

describe("wc", () => {
  it("should return number of lines number of words and number of characters and fileName", () => {
    actualOutput = wc("vowels", fs);
    expectedOutput = [4, 5, 9].join("\t") + " vowels";
    assert.equal(actualOutput, expectedOutput);
  });
});
