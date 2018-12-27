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

const wc = function(wcOptions, fs) {
  let formatter = wcOptions.formatter;
  let fileCounts = wcOptions.files.map(file => {
    return getFileCounts(file, wcOptions.options, fs);
  });
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
