const { getWordList } = require("./utils/string");

const countLines = function(fileContent) {
  return fileContent.split("\n").length - 1;
};

const countWords = function(fileContent) {
  fileContent = fileContent.trim();
  return getWordList(fileContent).length;
};

const countCharacters = function(fileContent) {
  return fileContent.split("").length;
};

const wc = function(filePath, fs) {
  let fileContent = fs.readFileSync(filePath, "utf-8");
  let noOfLines = countLines(fileContent);
  let noOfWords = countWords(fileContent);
  let noOfCharacters = countCharacters(fileContent);
  return [noOfLines, noOfWords, noOfCharacters].join("\t") + " " + filePath;
};

module.exports = {
  wc
};
