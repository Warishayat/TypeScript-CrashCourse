//public can acess outside the class and you can change it 
// outside from the class and even you can use inside the class

class Headphone{
    public price:number
    constructor(price:number){
        this.price = price
    }

    PrintKardo(){
        console.log("price of the earphone is:",this.price);
    }
}

// example 2 
class User {
    balance = 12000

}

let u1 = new User()
u1.balance =190000;
console.log(u1.balance)



// lets talk about private modifer
//private can't access outside the class you can only use inside the class.
// evny you cant use private variable with the instance outside
//  the class
class User2{
    private balance = 12000;
    getBalance(){
        console.log(this.balance);
    }
}
let u2 = new User2()
u2.getBalance()
// u2.balance = 12232; //it gave error you cnat change the value of private acess specifier
// we will make getter function to get the value


// lets dicuss about the protected
// protected variable can only use in the extended class
// it can be use in child class and paraent class too. protexted 
// cant use outisde the class .its common like private you cant use it
// outside the class but you can use it in the child class 

class User3{
    protected balance = 1200;

}

class admin extends User3{
    private isadmin = true

    getBalance(){
        console.log("Calling inside the child class of User3")
        console.log(this.balance);
        console.log(this.isadmin);
    }
}


let admin01 = new admin()
admin01.getBalance()