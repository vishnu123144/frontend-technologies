const header=document.getElementById('header');
const element=document.createElement('p');
element.innerHTML="welcome to js";
header.appendChild(element);

const mycountries=['india','china','australia','kenya'];
mycountries.map ( item=>
    {
        const count=document.getElementById('countries');
        const list=document.createElement('li');
           list.innerHTML=item;
        count.appendChild(list);

    });
// const countriesArray = ['India', 'Australia', 'England', 'China', 'Japan', 'Russia'];
// countriesArray.map(item => {
//     const listElement = document.createElement('li');
//     listElement.innerHTML = item;
//     document.getElementById('countries').appendChild(listElement);
// });


// const ele=document.getElementById('div1').parentElement;
// console.log(ele.innerHTML);


// fetch('https://jsonplaceholder.typicode.com/users')
//      .then(res=>res.json())
//      .then(data =>{
//          data.map(item=>
//             {
//          const user=document.createElement('li');
//          user.innerHTML=item.name;
//          document.getElementById('list').appendChild(user);
//             });

//      });
fetch('https://jsonplaceholder.typicode.com/users')
     .then(res=>res.json())
     .then(data=>{
        data.map(item=>
            {
               const section= document.createElement('section');
               const h1= document.createElement('h1');
               const p1= document.createElement('p');
               const p2= document.createElement('p');
               const p3= document.createElement('p');
               const hr= document.createElement('hr');
               h1.innerHTML=item.name;
               p1.innerHTML=item.email;
               p2.innerHTML=item.phone;
               p3.innerHTML=item.address.city;


               section.appendChild(h1);
               section.appendChild(p1);
               section.appendChild(p2);
               section.appendChild(p3);
               section.appendChild(hr);

               document.getElementById('userList').appendChild(section);
            })

     })
