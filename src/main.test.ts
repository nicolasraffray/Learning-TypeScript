import { fizzBuzz } from "./main"

describe("fizzBuzz", () => {

  it("Returns a number in array", () => {
    expect(fizzBuzz([2])).toEqual("2")
  })
})