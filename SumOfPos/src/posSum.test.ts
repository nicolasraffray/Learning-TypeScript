import {posSum} from "./posSum"
import { idText } from "typescript"

describe("PosSum", () => {

  it("returns a positive number", () => {
    expect(posSum([5])).toEqual(5)
  }) 

  it("takes a negative number and does not return it", () => {
    expect(posSum([-1])).toEqual(0)
  })

  it("takes two positive numbers and sums them", () => {
    expect(posSum([2,5])).toEqual(7)
  })

  it("takes multiple positive and negative numbers but does not add negatives", () => {
    expect(posSum([1,2,5,-2,-4])).toEqual(8)
  })
})