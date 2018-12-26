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

const singleFileFormater = function(fileCounts) {
  return (
    fileCounts.slice(0, fileCounts.length - 1).join("\t") +
    " " +
    fileCounts[fileCounts.length - 1]
  );
};

const multipleFileFormater = function(fileDetails) {
  let total = fileDetails.reduce((total, fileDetail) =>
    addTwoArrays(total, fileDetail)
  );
  total[total.length - 1] = "total";
  fileDetails.push(total);
  return fileDetails.map(singleFileFormater).join("\n");
};

const addTwoArrays = function(array1, array2) {
  sumArray = [];
  for (let index = 0; index < array1.length; index++) {
    sumArray[index] = array1[index] + array2[index];
  }
  return sumArray;
};

const wc = function(wcOptions, fs) {
  let formater = multipleFileFormater;
  let fileCounts = wcOptions.files.map(file => {
    return getFileCounts(file, wcOptions.options, fs);
  });
  if (wcOptions.files.length == 1) {
    formater = singleFileFormater;
    fileCounts = fileCounts[0];
  }
  return formater(fileCounts);
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
