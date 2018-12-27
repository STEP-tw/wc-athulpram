const assert = require("assert");
const {
  singleFileFormatter,
  multipleFileFormatter
} = require("./../src/formatter");

describe("singleFileFormatter", () => {
  it("should return a formatted string of one file data", () => {
    let actualOutput = singleFileFormatter([[1, 5, 34, "fileName"]]);
    let expectedOutput = [1, 5, 34].join("\t") + " fileName";
    assert.equal(actualOutput, expectedOutput);
  });

  it("should return a formatted string with 2 counts of one file data", () => {
    let actualOutput = singleFileFormatter([[5, 34, "fileName"]]);
    let expectedOutput = [5, 34].join("\t") + " fileName";
    assert.equal(actualOutput, expectedOutput);
  });
});

describe("multipleFileFormatter", () => {
  it("should return a formatted string of output for multiple file data along with total", () => {
    let actualOutput = multipleFileFormatter([
      [2, 3, 7, "file1"],
      [5, 6, 18, "file2"],
      [3, 3, 6, "file3"]
    ]);
    let expectedOutput = [2, 3, 7].join("\t") + " file1\n";
    expectedOutput += [5, 6, 18].join("\t") + " file2\n";
    expectedOutput += [3, 3, 6].join("\t") + " file3\n";
    expectedOutput += [10, 12, 31].join("\t") + " total";
    assert.equal(actualOutput, expectedOutput);
  });

  it("should return a formatted string of output for multiple file data only for 2 counts along with total", () => {
    let actualOutput = multipleFileFormatter([
      [3, 7, "file1"],
      [6, 18, "file2"],
      [3, 6, "file3"]
    ]);
    let expectedOutput = [3, 7].join("\t") + " file1\n";
    expectedOutput += [6, 18].join("\t") + " file2\n";
    expectedOutput += [3, 6].join("\t") + " file3\n";
    expectedOutput += [12, 31].join("\t") + " total";
    assert.equal(actualOutput, expectedOutput);
  });
});
