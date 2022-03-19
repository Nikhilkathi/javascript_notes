var a=[100,20,300,200]
if(a[0]>a[1] && a[0]>a[2] && a[0]>a[3]){
console.log(a[0]);
}else if (a[1]>a[0] && a[1]>a[2] && a[1]>a[3]) {
    console.log(a[1]);
}else if(a[2]>a[0] && a[2]>a[1] && a[2]>a[3]){
    console.log(a[2]);
}else{
console.log(a[3]);
}