
export function fizzBuzz(input) {
  if(input.length === 1 && input[0] % 3 === 0){
    var output:string = "Fizz"
  } else {
    var output:string = input.toString()
  }
  return output
}