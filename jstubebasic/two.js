var result=[2,8,4,6].every((a)=>(a%2===0))
console.log(result)

var a=["nikhil","sweety","love",55];
a.push(22);
console.log(a);
a.shift()
console.log(a.indexOf("sweety"));
let sya= a[Symbol.iterator]();
console.log(sya);