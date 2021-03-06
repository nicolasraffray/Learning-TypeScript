import { fizzBuzz } from "./fizzBuzz"

describe("fizzBuzz", () => {

  it("Returns a number in array", () => {
    expect(fizzBuzz([2])).toEqual("2")
  })

  it("Returns the the two numbers as strings", () => {
    expect(fizzBuzz([1,2])).toEqual("1,2")
  })

  it("Returns a Fizz if number is multiple of 3", () => {
    expect(fizzBuzz([3])).toEqual("Fizz")
  })

  it("Returns a Buzz if number is multiple of 5", () => {
    expect(fizzBuzz([5])).toEqual("Buzz")
  })

  it('Returns a FizzBuzz if number is a multiple of 3 and 5', () => {
    expect(fizzBuzz([15])).toEqual("FizzBuzz")
  })

  it('Takes an array with one multiple of 3', () => {
    expect(fizzBuzz([1,2,3,6,7])).toEqual("1,2,Fizz,Fizz,7")
  })

  it('Takes an array with one multiple of 5', () => {
    expect(fizzBuzz([1,2,5,7,10])).toEqual("1,2,Buzz,7,Buzz")
  })

  it('Takes an array with multiples of both 3 and 5', () => {
    expect(fizzBuzz([15,3,5,2,1,8,7])).toEqual("FizzBuzz,Fizz,Buzz,2,1,8,7")
  })
})