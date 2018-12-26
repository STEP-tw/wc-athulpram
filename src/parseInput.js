const parseInput = function(args) {
  let firstArg = args[0];
  let secondArg = args[1];
  if (isOption(firstArg)) {
    if (firstArg == "-l") {
      return { options: ["line"], files: secondArg };
    }
  }
  let files = firstArg;
  return { options: ["line", "word", "character"], files };
};
const isOption = argument => argument.startsWith("-");

module.exports = {
  parseInput
};
