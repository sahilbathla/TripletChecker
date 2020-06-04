import  {helpers} from '../findTriangularTriplet';

it("Empty Array",() => {
  const result = helpers.hasTriangularTriplet([])
  expect(result).toBe(0)
})

it("Array with length less than 3",() => {
  const result = helpers.hasTriangularTriplet([43,1])
  expect(result).toBe(0)
})

it("Not an array but a string",() => {
  const result = helpers.hasTriangularTriplet("String")
  expect(result).toBe('Invalid Input')
})

it("Null is passed explicitly",() => {
  const result = helpers.hasTriangularTriplet(null)
  expect(result).toBe('Cannot be null')
})

it("Array contains null/non-integer values",() => {
  const result = helpers.hasTriangularTriplet([3,42,12,66,1,null])
  expect(result).toBe('Array contains non-integer/null values')
})

it("Undefined is passed explicitly",() => {
  const result = helpers.hasTriangularTriplet(undefined)
  expect(result).toBe(0)
})

it("Triangular Triplet exist",() => {
  const result = helpers.hasTriangularTriplet([10,2,5,1,8,20])
  expect(result).toBe(1)
})

it("Triangular Triplet doesn't exist",() => {
  const result = helpers.hasTriangularTriplet([10,50,5,1])
  expect(result).toBe(0)
})
