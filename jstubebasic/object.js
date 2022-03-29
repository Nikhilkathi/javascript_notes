var bank={
    id:13420100012358,
    name:"Nikhil",
    location: [],
    getLocation: function (lacation){
        this.location.push(lacation);
    },
    street: [],
    getAdd: function (stree){
        this.street.push(stree);
    },
    getDetails: function (){
        return `${this.location} is the pesent location and ${this.street} is also matching` ;
    }
}
bank.getLocation("banglore");
bank.getAdd("phase 11")

console.log(bank.getDetails());