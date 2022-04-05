var data = function (firstName, count){
    this.firstName=firstName;
    this.count=count;
    this.getelement= function (){
        console.log(`${this.firstName} is a ${this.count} successful person in the world`); 
    }

}

data.prototype.lastName= function(){
    console.log(`${this.lastName} is a unique`);
}
var nikhil = new data ("K.Nikhil","1st");
nikhil.getelement();
//console.log(nikhil);
var chandu = new data ("P. Chandu","2nd");
chandu.getelement();
var zizu = new data ("Zedan","3rd");
zizu.getelement();
