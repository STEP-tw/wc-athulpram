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

const formatOutput = function(fileCounts, filePath) {
  return fileCounts.join("\t") + " " + filePath;
};

const wc = function(wcOptions, fs) {
  let filePath = wcOptions.files;
  let fileContent = fs.readFileSync(filePath, "utf-8");
  const optionCounter = {
    line: countLines,
    word: countWords,
    character: countCharacters
  };
  let contentCounts = wcOptions.options.map(option =>
    optionCounter[option](fileContent)
  );
  return formatOutput(contentCounts, filePath);
};

module.exports = {
  wc
};
