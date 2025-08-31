// let a :number = 23;
// console.log(a);
// Lets move towward the lecture no 5 with classes constructor and more
var airpord = /** @class */ (function () {
    function airpord() {
        this.price = 2230000;
        this.image = "image/uploda.jpg";
    }
    airpord.prototype.playmusic = function () {
        console.log("tung tung tung");
    };
    airpord.prototype.switchMode = function (mode) {
        console.log(mode);
    };
    return airpord;
}());
// remote
var Airconditioner = /** @class */ (function () {
    function Airconditioner() {
        this.color = "white";
        this.tonnes = .75;
        this.company = "voltas";
        this.temprature = 22;
    }
    Airconditioner.prototype.turnOn = function () {
        console.log("ik minut m on hoja");
        console.log("on hogy hu boss");
    };
    Airconditioner.prototype.turnoff = function () {
        console.log("band hojao bhaiyya");
        console.log("band hogya bhaiyaa");
    };
    Airconditioner.prototype.raiseTemp = function () {
        this.temprature++;
        console.log("temprature brha ra hu");
        console.log(this.temprature);
    };
    Airconditioner.prototype.decreseTemp = function () {
        console.log("sardi lagri h temp kam kro zara");
    };
    return Airconditioner;
}());
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
var Earphone = /** @class */ (function () {
    function Earphone(name, price) {
        this.name = name;
        this.price = price;
    }
    return Earphone;
}());
var e1 = new Earphone("apple", 2400);
var e2 = new Earphone("Lenovo", 230000);
// example 2
var bottleCutter = /** @class */ (function () {
    function bottleCutter(shape) {
        this.shape = shape;
        this.shape;
    }
    return bottleCutter;
}());
var v2 = new bottleCutter("patanahu");
