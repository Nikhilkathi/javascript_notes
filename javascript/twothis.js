class Savings_Account{
    constructor(nm,ag){
        this.myname=nm;
        this.myage=ag;
   }
   fun1(){
      console.log(this.myname+' '+this.myage+'parent') 
   }
}
class Update_Account extends Savings_Account{
   constructor(name,age){
        super(name,age)
        this.name=name;
        this.age=age;
   }
   fun(){
      console.log( this.name + ' '+this.age+'child')
   }
    
}
let c1 = new Update_Account('karthik',23);
c1.fun()
c1.fun1()