var counter= document.getElementById('number');
var followers= document.getElementById("foll");
let count = 1;
setInterval(() => {
    if (count<1000) {
        count++;
        counter.innerText= count;
    }
}, 1);