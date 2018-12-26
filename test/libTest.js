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
    let actualOutput = wc(
      { options: ["line", "word", "character"], files: ["vowels"] },
      fs
    );
    let expectedOutput = [4, 5, 9].join("\t") + " vowels";
    assert.equal(actualOutput, expectedOutput);
  });

  it("should return number of lines and fileName", () => {
    let actualOutput = wc({ options: ["line"], files: ["vowels"] }, fs);
    assert.equal(actualOutput, "4 vowels");
  });

  it("should return number of words and filename", () => {
    let actualOutput = wc({ options: ["word"], files: ["vowels"] }, fs);
    assert.equal(actualOutput, "5 vowels");
  });

  it("should return number of characters and filename", () => {
    let actualOutput = wc({ options: ["character"], files: ["vowels"] }, fs);
    assert.equal(actualOutput, "9 vowels");
  });

  it("should return number of lines,words and filename", () => {
    let actualOutput = wc({ options: ["line", "word"], files: ["vowels"] }, fs);
    let expectedOutput = [4, 5].join("\t") + " vowels";
    assert.equal(actualOutput, expectedOutput);
  });

  it("should return number of lines,words and character and filename", () => {
    let actualOutput = wc(
      { options: ["line", "word", "character"], files: ["vowels"] },
      fs
    );
    let expectedOutput = [4, 5, 9].join("\t") + " vowels";
    assert.equal(actualOutput, expectedOutput);
  });

  it("should return number of lines number of words and number of characters for multiple files", () => {
    let actualOutput = wc(
      {
        options: ["line", "word", "character"],
        files: ["vowels", "tenNumbers"]
      },
      fs
    );
    let expectedOutput = [];
    expectedOutput.push([4, 5, 9].join("\t") + " vowels");
    expectedOutput.push([9, 10, 20].join("\t") + " tenNumbers");
    expectedOutput.push([13, 15, 29].join("\t") + " total");
    assert.equal(actualOutput, expectedOutput.join("\n"));
  });
});
