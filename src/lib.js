const removeMultipleSpaces = function(fileContents) {
  return splitByNewlineOrSpace(fileContents).filter(x => x);
};

const countLines = function(fileContent) {
  return fileContent.split("\n").length - 1;
};

const countWords = function(fileContent) {
  fileContent = fileContent.trim();
  return removeMultipleSpaces(fileContent).length;
};

const splitByNewlineOrSpace = function(fileContent) {
  return fileContent
    .split(" ")
    .join("\n")
    .split("\n");
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
