var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count = 1;
setInterval(() => {
  if (count < 1000) {
    count++;
    counter.innerText = count;
  } else {
  }
}, 1);
setTimeout(() => {
  followers.innerHTML = "Followers in Facebook!";
}, 5000);
