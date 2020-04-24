

export function posSum(input){
  var a = 0 
  for(let i = 0; i < input.length; i++){
    if(input[i] > 0){
      a += input[i]
    } else { a += 0 }
  }
  return a
}