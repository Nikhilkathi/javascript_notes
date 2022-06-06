var a = [1, 2, 3, 4];
result1 = a[1] * a[2] * a[3];
result2 = a[0] * a[2] * a[3];
result3 = a[0] * a[1] * a[3];
result4 = a[0] * a[1] * a[2];

var finalResult = [result1, result2, result3, result4];
console.log(finalResult);
