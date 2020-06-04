const hasNumbersOnly = (value) => Number.isInteger(value);

const hasTriangularTriplet = (array = []) => {
  if (!array) return "Cannot be null"
  if (!Array.isArray(array)) return "Invalid Input";
  if (array.length < 3) return 0;
  if(!array.every(hasNumbersOnly)) return "Array contains non-integer/null values"

  const sortedArray = array.sort((x, y)=> x - y);

  for (let i = 0; i < array.length - 2; i++) {
    if (sortedArray[i] >= 0 && sortedArray[i] > sortedArray[i + 2] - sortedArray[i + 1]) {
      return 1;
    }
  }
  return 0;
}

export const helpers = { hasTriangularTriplet }
