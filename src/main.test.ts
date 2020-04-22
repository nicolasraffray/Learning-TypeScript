import { fizzBuzz } from "./main"

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
})