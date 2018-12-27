const { singleFileFormatter, multipleFileFormatter } = require("./formatter");
const parseInput = function(args) {
  wcOptions = { options: ["line", "word", "character"], files: args };
  if (isOption(args[0])) {
    args = mergeOptions(args);
    wcOptions = parseWithOptions(args);
  }
  wcOptions.formatter = singleFileFormatter;
  if (wcOptions.files.length > 1) {
    wcOptions.formatter = multipleFileFormatter;
  }
  return wcOptions;
};

const isOption = argument => argument.startsWith("-");

const mergeOptions = function(args) {
  let { options, fileNames } = args.reduce(
    ({ options, fileNames }, argument) => {
      fileNames.push(argument);
      if (isOption(argument)) {
        options += argument.slice(1);
        fileNames.pop();
      }
      return { options, fileNames };
    },
    { options: "-", fileNames: [] }
  );
  op = [options].concat(fileNames);
  return op;
};

const parseWithOptions = function(args) {
  let optionsGiven = args[0].slice(1);
  let files = args.slice(1);
  const validOptions = {
    line: "l",
    word: "w",
    character: "c"
  };
  options = Object.keys(validOptions).filter(x =>
    optionsGiven.includes(validOptions[x])
  );
  return { options, files };
};

module.exports = {
  parseInput
};
