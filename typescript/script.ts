console.log('welcome to typescript');

let username:string;
username="vishnu";
console.log(username);


let age:number;
age=22;

let color:string="red";

var flowers:Array<string>=['red',"green",'yellow','violet'];

var numbers:Array<Number>=[1,2,3,4,5,6];
console.log(numbers);

var sports:Array<string>=['cricket','football'];
var arr:[string,number,boolean];

arr=['vishnu',10,true];

enum Games {cricket=100,football=200,volleyball=300};
var x:Games= Games.football;
console.log(x);

var Game1:string =Games[1];
console.log(Game1);

var k:unknown=8;
console.log(k);
k="vishnu";
console.log(k);

function hello(username:string):string{
    return `hello ${username}`;
}

console.log(hello('vishnu'));

function any():void{
    console.log('vishnu vardaha  reddy')
}

any();


class Abc
{
    public username:string;
    constructor(name:string)
    {
        this.username=name;
    }

display():void{
    console.log(`welcome ${this.username}`);
}
}
class Xyz extends Abc
{
    public marks:string
    constructor(name:string)
    {
        super(name);
    }
}
// var p=new abc("vishnu");
// p.display();
var s=new Xyz("ram");
s.display();

