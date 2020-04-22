import { fizzBuzz } from "./main"

describe("fizzBuzz", () => {

  it("Returns a number in array", () => {
    expect(fizzBuzz([2])).toEqual("2")
  })

  it("Returns the the two numbers as strings", () => {
    expect(fizzBuzz([1,2])).toEqual("1,2")
  })
})