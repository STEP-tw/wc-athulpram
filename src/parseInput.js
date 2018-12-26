const parseInput = function(args) {
  if (isOption(args[0])) {
    args = mergeOptions(args);
    return parseWithOptions(args);
  }
  let files = args;
  return { options: ["line", "word", "character"], files };
};

const isOption = argument => argument.startsWith("-");

const mergeOptions = function(args) {
  let { options, fileNames } = args.reduce(
    ({ options, fileNames }, argument) => {
      if (isOption(argument)) {
        options += argument.slice(1);
      } else {
        fileNames.push(argument);
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
