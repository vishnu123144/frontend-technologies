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
console.log('welcome to typescript');
var username;
username = "vishnu";
console.log(username);
var age;
age = 22;
var color = "red";
var flowers = ['red', "green", 'yellow', 'violet'];
var numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);
var sports = ['cricket', 'football'];
var arr;
arr = ['vishnu', 10, true];
var Games;
(function (Games) {
    Games[Games["cricket"] = 100] = "cricket";
    Games[Games["football"] = 200] = "football";
    Games[Games["volleyball"] = 300] = "volleyball";
})(Games || (Games = {}));
;
var x = Games.football;
console.log(x);
var Game1 = Games[1];
console.log(Game1);
var k = 8;
console.log(k);
k = "vishnu";
console.log(k);
function hello(username) {
    return "hello " + username;
}
console.log(hello('vishnu'));
function any() {
    console.log('vishnu vardaha  reddy');
}
any();
var Abc = /** @class */ (function () {
    function Abc(name) {
        this.username = name;
    }
    Abc.prototype.display = function () {
        console.log("welcome " + this.username);
    };
    return Abc;
}());
var Xyz = /** @class */ (function (_super) {
    __extends(Xyz, _super);
    function Xyz(name) {
        return _super.call(this, name) || this;
    }
    return Xyz;
}(Abc));
// var p=new abc("vishnu");
// p.display();
var s = new Xyz("ram");
s.display();
