//public can acess outside the class and you can change it 
// outside from the class and even you can use inside the class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Headphone = /** @class */ (function () {
    function Headphone(price) {
        this.price = price;
    }
    Headphone.prototype.PrintKardo = function () {
        console.log("price of the earphone is:", this.price);
    };
    return Headphone;
}());
// example 2 
var User = /** @class */ (function () {
    function User() {
        this.balance = 12000;
    }
    return User;
}());
var u1 = new User();
u1.balance = 190000;
console.log(u1.balance);
// lets talk about private modifer
//private can't access outside the class you can only use inside the class.
// evny you cant use private variable with the instance outside
//  the class
var User2 = /** @class */ (function () {
    function User2() {
        this.balance = 12000;
    }
    User2.prototype.getBalance = function () {
        console.log(this.balance);
    };
    return User2;
}());
var u2 = new User2();
u2.getBalance();
// u2.balance = 12232; //it gave error you cnat change the value of private acess specifier
// we will make getter function to get the value
// lets dicuss about the protected
var User3 = /** @class */ (function () {
    function User3() {
        this.balance = 1200;
    }
    return User3;
}());
var admin = /** @class */ (function (_super) {
    __extends(admin, _super);
    function admin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isadmin = true;
        return _this;
    }
    admin.prototype.getBalance = function () {
        console.log("Calling inside the child class of User3");
        console.log(this.balance);
        console.log(this.isadmin);
    };
    return admin;
}(User3));
var admin01 = new admin();
admin01.getBalance();
