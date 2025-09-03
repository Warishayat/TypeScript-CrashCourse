// # lets dicuss getter and setter


class abcd{
    constructor(public name:String){
        this.name = name;
    }
    get NameLelo()
    {
        return this.name;
    }
    set NameDedo(value:string){
        this.name = value;
    }
}

let abc = new abcd("Helloworld");
console.log(abc.name);
abc.NameDedo = "warishayatabbasi"
console.log(abc.name);


// class 2

class Animal{
    public name:string
    constructor(name:string){
        this.name=name
    }

    get animalName(){          ///it us used to get the values
        return this.name
    }

   set setanimalName(name:string){   //it will only set the values
        this.name = name;
   }
}

let v2 = new Animal("kuutay ki aulad");
console.log("getter function call hora hae");
console.log(v2.animalName)

console.log();
console.log("setter function call hora hae...");
v2.setanimalName = "Harami kutty ki aulad"
console.log(v2.animalName);



// Functions
function accd():void {
    console.log("kuch b nai karra")
}
accd();


// function that return string
function hello():string{
    return "Hello peps"
}
console.log("return rtpw is string")
console.log(hello());
console.log();


// function that will return boolean
function kuchkarbhiaya():boolean{
    return true;
}
console.log("return types is boolean")
console.log(kuchkarbhiaya())
console.log();


// return type is number
function numberkroreturn():number{
    return 1+12;
}

console.log("return type number hae baray bhai");
console.log(numberkroreturn())



function plus(a:number,b:number):number{
    return a+b;
}

console.log("plus kardu bhiaya kia?")
console.log(plus(2,4));



// arrow function ko bula kar le ao
const arrowfunction = (a:number,b:number):number =>{
    return a+b;
}

console.log("arrow function huty haen hum");
console.log(arrowfunction(2,3));


const function2 = (a:string,b:string):string =>{
    return a+" "+b;
}

console.log("Arrow function with return string");
console.log(function2("waris","hayat"));

// implicit  return

function returnkarokuch(){
    return "hello"
}


// functional optional params

function optionalParams(name:string,age:number,gender?:string){
    return "name is:"+" "+name+" "+"Age is:"+" "+age+" "+"Gender is:"+" "+gender;
}

console.log(optionalParams("waris",12));




// Defaukt params

function optionalParams2(name:string,age:number,gender:string="Other"){
    return "name is:"+" "+name+" "+"Age is:"+" "+age+" "+"Gender is:"+" "+gender;
}
console.log(optionalParams2("waris",12));


// reset params

function names(...names:string[]){
    console.log(names);
}

names("waris","hayat","abbasi");