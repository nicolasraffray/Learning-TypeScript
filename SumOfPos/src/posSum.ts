

export function posSum(arr:number[]):number{
  var a = 0
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      a += arr[i]
    } else { a += 0 }
  }
  return a
}