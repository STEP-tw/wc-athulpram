const assert = require("assert");
const { parseInput } = require("./../src/parseInput");

describe("parseInput", () => {
  it("should return an object with options with all three elements and file name in files", () => {
    let actualOutput = parseInput(["file"]);
    let expOut = { options: ["line", "word", "character"], files: "file" };
    assert.deepEqual(actualOutput, expOut);
  });

  it("should return an object with options with line element and file name in files", () => {
    let actualOutput = parseInput(["-l", "file"]);
    let expOut = { options: ["line"], files: "file" };
    assert.deepEqual(actualOutput, expOut);
  });
});