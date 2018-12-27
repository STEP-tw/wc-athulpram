const formatFileCounts = function(fileCounts) {
  return (
    fileCounts.slice(0, fileCounts.length - 1).join("\t") +
    " " +
    fileCounts[fileCounts.length - 1]
  );
};

const multipleFileFormatter = function(fileDetails) {
  let total = fileDetails.reduce((total, fileDetail) =>
    addTwoArrays(total, fileDetail)
  );
  total[total.length - 1] = "total";
  fileDetails.push(total);
  return fileDetails.map(formatFileCounts).join("\n");
};

const singleFileFormatter = function(fileDetails) {
  return formatFileCounts(fileDetails[0]);
};

const addTwoArrays = function(array1, array2) {
  sumArray = [];
  for (let index = 0; index < array1.length; index++) {
    sumArray[index] = array1[index] + array2[index];
  }
  return sumArray;
};

module.exports = {
  singleFileFormatter,
  multipleFileFormatter
};
