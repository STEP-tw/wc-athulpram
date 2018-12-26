const splitByNewlineOrSpace = function(content) {
  content = splitBySpace(content).join("\n");
  return splitByNewline(content);
};

const splitBySpace = function(content) {
  return content.split(" ");
};

const splitByNewline = function(content) {
  return content.split("\n");
};

const getWordList = function(fileContents) {
  return splitByNewlineOrSpace(fileContents).filter(x => x);
};

module.exports = {
  getWordList
};
