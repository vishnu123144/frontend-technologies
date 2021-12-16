// Some of the common browser objects in JavaScript
/*
document
window
screen
location
history
navigator
*/

// document.write('welcome to document');
// alert("welcome home page");//display the alert message

// var res=confirm('do you want to close this window?');//conformation message
// if(res)
// {
//     window.close();
// }
// console.log(res);

// setTimeout (()=>   //setting time how much time the operation to be performed
// {
//     alert('game over');
// },5000);

let count=0;
ref =setInterval(()=>//it can run infinite times

{
document.getElementById('counter').innerHTML=count;
count++;
if(count>10)
{
    clearInterval(ref);
}
},1000);

console.log(screen.width);//your screen width
console.log(screen.height);

console.log(location.href);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.href);

console.log(navigator.appVersion);
