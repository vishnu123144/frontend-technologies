// const fun1=()=>
// {
//     alert('hello world');
// }

// console.log(screen.width);
// const login=()=>
// {
//     let username=document.getElementById('txt1').value;
//     alert(`hi ${username}`);
// }


let h=0;
let m=0;
let s=0;
const time = () =>
{
    ref= setInterval(() =>
    {
    s++;
    if(s===60)
    {
    m++;
     s=0;
    }
    if(m===60)
    {
       h++;
        m=0;
    }
    if(h==24)
    {
       
        h=0;
    }
    document.getElementById('hour').innerHTML=h;
    document.getElementById('min').innerHTML=m;
    document.getElementById('sec').innerHTML=s;
},100);

}
const pause=()=>
{
    clearInterval(ref);
}
const reset=()=>
{
    clearInterval(ref);
    h=0;m=0;
    s=0;
    document.getElementById('hour').innerHTML=h;
    document.getElementById('min').innerHTML=m;
    document.getElementById('sec').innerHTML=s;

}
// setInterval(() => {
//     var d = new Date();
//     document.getElementById('hours').innerHTML = d.getHours();
//     document.getElementById('minutes').innerHTML = d.getMinutes();
//     document.getElementById('seconds').innerHTML = d.getSeconds();
// }, 1000);


const sum= () =>
{
    let x=parseInt(document.getElementById('number1').value);
    let y=parseInt(document.getElementById('number2').value);
    let z=x+y;
    document.getElementById('result').value=z;
}
