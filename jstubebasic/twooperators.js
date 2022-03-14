var listingPrice= 2099;
var sellingPrice= 599;

discountPrice= ((listingPrice - sellingPrice)/listingPrice)*100;

console.log("Discount price is " + discountPrice ," % off");

accurateDiscountPrice = Math.round(discountPrice);

console.log("Discount Price " + accurateDiscountPrice, "% off")