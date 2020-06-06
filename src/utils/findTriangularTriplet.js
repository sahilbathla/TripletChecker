const hasNumbersOnly = (value) => Number.isInteger(value);

const hasTriangularTriplet = (array = []) => {
  array = array.map((e) => parseInt(e));
  if (!array) throw "Cannot be null";
  if (!Array.isArray(array)) throw "Invalid Input";
  if (array.length < 3) return 0;
  if(!array.every(hasNumbersOnly)) throw "Array contains non-integer/null values";

  const sortedArray = array.sort((x, y)=> x - y);

  for (let i = 0; i < array.length - 2; i++) {
    if (sortedArray[i] + sortedArray[i + 2] > sortedArray[i + 1]
      && sortedArray[i + 1] + sortedArray[i + 2] > sortedArray[i]
      && sortedArray[i] + sortedArray[i + 1] > sortedArray[i + 2]
    ) {
      return 1;
    }
  }
  return 0;
};

export const helpers = { hasTriangularTriplet };
