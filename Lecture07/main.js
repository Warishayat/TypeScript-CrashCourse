// # lets dicuss getter and setter
var abcd = /** @class */ (function () {
    function abcd(name) {
        this.name = name;
        this.name = name;
    }
    Object.defineProperty(abcd.prototype, "NameLelo", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(abcd.prototype, "NameDedo", {
        set: function (value) {
            this.name = value;
        },
        enumerable: false,
        configurable: true
    });
    return abcd;
}());
var abc = new abcd("Helloworld");
console.log(abc.name);
abc.NameDedo = "warishayatabbasi";
console.log(abc.name);
// class 2
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Object.defineProperty(Animal.prototype, "animalName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "setanimalName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
var v2 = new Animal("kuutay ki aulad");
console.log("getter function call hora hae");
console.log(v2.animalName);
console.log();
console.log("setter function call hora hae...");
v2.setanimalName = "Harami kutty ki aulad";
console.log(v2.animalName);
// Functions
function accd() {
    console.log("kuch b nai karra");
}
accd();
// function that return string
function hello() {
    return "Hello peps";
}
console.log("return rtpw is string");
console.log(hello());
console.log();
// function that will return boolean
function kuchkarbhiaya() {
    return true;
}
console.log("return types is boolean");
console.log(kuchkarbhiaya());
console.log();
// return type is number
function numberkroreturn() {
    return 1 + 12;
}
console.log("return type number hae baray bhai");
console.log(numberkroreturn());
function plus(a, b) {
    return a + b;
}
console.log("plus kardu bhiaya kia?");
console.log(plus(2, 4));
// arrow function ko bula kar le ao
var arrowfunction = function (a, b) {
    return a + b;
};
console.log("arrow function huty haen hum");
console.log(arrowfunction(2, 3));
var function2 = function (a, b) {
    return a + " " + b;
};
console.log("Arrow function with return string");
console.log(function2("waris", "hayat"));
// implicit  return
function returnkarokuch() {
    return "hello";
}
// functional optional params
function optionalParams(name, age, gender) {
    return "name is:" + " " + name + " " + "Age is:" + " " + age + " " + "Gender is:" + " " + gender;
}
console.log(optionalParams("waris", 12));
// Defaukt params
function optionalParams2(name, age, gender) {
    if (gender === void 0) { gender = "Other"; }
    return "name is:" + " " + name + " " + "Age is:" + " " + age + " " + "Gender is:" + " " + gender;
}
console.log(optionalParams2("waris", 12));
// reset params
function names() {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    console.log(names);
}
names("waris", "hayat", "abbasi");
