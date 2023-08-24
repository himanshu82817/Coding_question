let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]




let sol = []
let sum = arr[0];

let currSum  = arr[0];
let currArr = []

arr.forEach(x=>{
  if(x>0){
    currSum += x;
    currArr.push(x)
  }else{
    if(currSum>sum){
      sum = currSum
      sol = [...currArr]
    }
    if(currSum+x<0){
      currSum = 0
      currArr = []
    }else{
      currSum+=x
      currArr.push(x)
    }
  }
})

console.log(sum)
console.log(sol)
