const parseInput = function(args) {
  let firstArg = args[0];
  if (hasOption(args)) {
    return parseWithOptions(args);
  }
  let files = firstArg;
  return { options: ["line", "word", "character"], files };
};
const hasOption = arguments => arguments[0].startsWith("-");

const parseWithOptions = function(args) {
  let optionsGiven = args[0].slice(1);
  let secondArg = args[1];
  const validOptions = {
    line: "l",
    word: "w",
    character: "c"
  };
  options = Object.keys(validOptions).filter(x =>
    optionsGiven.includes(validOptions[x])
  );
  return { options, files: secondArg };
};

module.exports = {
  parseInput
};
