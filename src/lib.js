const { getWordList } = require("./utils/string");
const { singleFileFormatter, multipleFileFormatter } = require("./formatter");

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

const wc = function(wcOptions, fs) {
  let formatter = multipleFileFormatter;
  let fileCounts = wcOptions.files.map(file => {
    return getFileCounts(file, wcOptions.options, fs);
  });
  if (wcOptions.files.length == 1) {
    formatter = singleFileFormatter;
  }
  return formatter(fileCounts);
};

const getFileCounts = function(filePath, options, fs) {
  let fileContent = fs.readFileSync(filePath, "utf-8");
  const optionCounter = {
    line: countLines,
    word: countWords,
    character: countCharacters
  };
  let contentCounts = options.map(option => optionCounter[option](fileContent));
  contentCounts.push(filePath);
  return contentCounts;
};

module.exports = {
  wc
};
