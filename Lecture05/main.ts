// let a :number = 23;
// console.log(a);


// Lets move towward the lecture no 5 with classes constructor and more
class airpord {
    price =2230000;
    image = "image/uploda.jpg";
    color: "black";
    

    playmusic(){
        console.log("tung tung tung");
    }
    switchMode(mode:string){
        console.log(mode);
    }
}


// remote

class Airconditioner{
    color = "white";
    tonnes = .75;
    company = "voltas";
    temprature = 22;

    turnOn(){
        console.log("ik minut m on hoja");
        console.log("on hogy hu boss");
    }

    turnoff(){
        console.log("band hojao bhaiyya");
        console.log("band hogya bhaiyaa");
    }

    raiseTemp(){
       this.temprature++;
       console.log("temprature brha ra hu");
       console.log(this.temprature);
    }

    decreseTemp(){
        console.log("sardi lagri h temp kam kro zara");
    }
}

// //lets test
// let ac = new Airconditioner();
// ac.raiseTemp();
// ac.raiseTemp();
// ac.raiseTemp();
// ac.raiseTemp();
// ac.raiseTemp();


// class PenDrive{
//     // constructor class ka special method h jis ka matlib h  sub se pehy clhna aur sub ko initalize karna
//     public company:string;
 
//     constructor(name:string){
//         this.company = name;
//     }
// }

// let p1 = new PenDrive("sandisk");
// let p2 = new PenDrive("Hp");
// console.log(p1);
// console.log(p2);


class Earphone{
    name:string;
    price : number;
    constructor(name:string,price:number){
        this.name=name;
        this.price=price;
    }

}
let e1 = new Earphone("apple",2400);
let e2 = new Earphone("Lenovo",230000);


// example 2

class bottleCutter{
    constructor(public shape:string){
        this.shape;
    }
}

let v2=new bottleCutter("patanahu");