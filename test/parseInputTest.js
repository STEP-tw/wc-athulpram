const assert = require("assert");
const { parseInput } = require("./../src/parseInput");
const {
  singleFileFormatter,
  multipleFileFormatter
} = require("./../src/formatter");

describe("parseInput", () => {
  it("should return an object with options with all three elements and file name in files", () => {
    let actualOutput = parseInput(["file"]);
    let expOut = {
      options: ["line", "word", "character"],
      files: ["file"],
      formatter: singleFileFormatter
    };
    assert.deepEqual(actualOutput, expOut);
  });

  it("should return an object with options array with line element and file name in files", () => {
    let actualOutput = parseInput(["-l", "file"]);
    let expOut = {
      options: ["line"],
      files: ["file"],
      formatter: singleFileFormatter
    };
    assert.deepEqual(actualOutput, expOut);
  });

  it("should return an object with options array with word element and file name in files", () => {
    let actualOutput = parseInput(["-w", "file"]);
    let expOut = {
      options: ["word"],
      files: ["file"],
      formatter: singleFileFormatter
    };
    assert.deepEqual(actualOutput, expOut);
  });

  it("should return an object with options array with word element and file name in files", () => {
    let actualOutput = parseInput(["-c", "file"]);
    let expOut = {
      options: ["character"],
      files: ["file"],
      formatter: singleFileFormatter
    };
    assert.deepEqual(actualOutput, expOut);
  });

  it("should return an object with options array with word element and file name in files", () => {
    let actualOutput = parseInput(["-cw", "file"]);
    let expOut = {
      options: ["word", "character"],
      files: ["file"],
      formatter: singleFileFormatter
    };
    assert.deepEqual(actualOutput, expOut);
  });

  it("should return an object with options array with word element and file name in files", () => {
    let actualOutput = parseInput(["-lcw", "file"]);
    let expOut = {
      options: ["line", "word", "character"],
      files: ["file"],
      formatter: singleFileFormatter
    };
    assert.deepEqual(actualOutput, expOut);
  });

  it("should return an object with options with all three elements and file name in files", () => {
    let actualOutput = parseInput(["file", "file1"]);
    let expOut = {
      options: ["line", "word", "character"],
      files: ["file", "file1"],
      formatter: multipleFileFormatter
    };
    assert.deepEqual(actualOutput, expOut);
  });

  it("should return an object with options array with word element and file name in files options as multiple args", () => {
    let actualOutput = parseInput(["-c", "-w", "file"]);
    let expOut = {
      options: ["word", "character"],
      files: ["file"],
      formatter: singleFileFormatter
    };
    assert.deepEqual(actualOutput, expOut);
  });

  it("should return an object with options array with word element and file name in files options as multiple args", () => {
    let actualOutput = parseInput(["-l", "-c", "-w", "file"]);
    let expOut = {
      options: ["line", "word", "character"],
      files: ["file"],
      formatter: singleFileFormatter
    };
    assert.deepEqual(actualOutput, expOut);
  });
});
