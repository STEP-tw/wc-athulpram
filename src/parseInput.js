const { singleFileFormatter, multipleFileFormatter } = require("./formatter");
const HYPHEN = "-";
const parseInput = function(args) {
  let wcOptions = { options: ["line", "word", "character"], files: args };
  if (isOption(args[0])) {
    args = getMergedOptionsAndFiles(args);
    wcOptions = parseWithOptions(args);
  }
  wcOptions.formatter = singleFileFormatter;
  if (wcOptions.files.length > 1) {
    wcOptions.formatter = multipleFileFormatter;
  }
  return wcOptions;
};

const isOption = argument => argument.startsWith(HYPHEN);

const getMergedOptionsAndFiles = function(args) {
  let firstFileIndex = args.findIndex(arg => !isOption(arg));
  let fileNames = args.slice(firstFileIndex);
  let options = args.slice(0, firstFileIndex);
  return [options.join("")].concat(fileNames);
};

const parseWithOptions = function(args) {
  let optionsGiven = args[0].slice(1);
  let files = args.slice(1);
  const validOptions = {
    line: "l",
    word: "w",
    character: "c"
  };
  let options = Object.keys(validOptions).filter(x =>
    optionsGiven.includes(validOptions[x])
  );
  return { options, files };
};

module.exports = {
  parseInput
};
