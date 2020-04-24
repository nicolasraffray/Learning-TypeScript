

export function posSum(arr:number[]):number{
  return arr.filter((a) => a >= 0).reduce((acc, b) => acc + b, 0)
}