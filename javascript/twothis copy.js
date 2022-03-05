class Savings_Account{
    min_Bal='500';
    constructor(Id, Name, Deposit){
        this.Id= Id;
        this.Name= Name;
        this.Deposit= Deposit;
    }
    get_Details(){
        console.log('Your details are up-to-date');
    }
    get_Balance(){
        return this.Deposit-this.min_Bal
    }
    Deposite(){
        console.log('your amount has been deposited successfully');
    }
}
class Update_Account extends Savings_Account{
    constructor(){
        super(Deposite());
    }
}
let c1 = new Update_Account(101,"Nikhil", 20000,'savvings coustomer','nikhilsonu', 25-2-3);
let c2 = new Update_Account(102, "Chandu", 25000,'savvings coustomer','chandhuchinnu', 25-6-153);
let c3 = new Update_Account(103, "Zedan", 34000,'current coustomer','zizu', 25-4-100);
module.exports={min_Bal,Id,Name,Deposit}