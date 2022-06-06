let num = [1, 2, 3, 4];
var number = num.slice(1);
var number1 = num.slice(2);
var number2 = num.slice(3);
var number3 = num.slice(4);
// console.log(number);
if (number) {
  result1 = num[1] * num[2] * num[3];
  console.log(result1);
}
if (number1) {
  result2 = num[0] * num[2] * num[3];
  console.log(result2);
}
if (number2) {
  result3 = num[0] * num[1] * num[3];
  console.log(result3);
}
if (number3) {
  result4 = num[0] * num[1] * num[2];
  console.log(result4);
}
var result = [result1, result2, result3, result4];
console.log(result);
