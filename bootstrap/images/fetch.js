fetch("http://jsonplaceholder.typicode.com/users")
.then(x=>x.json())
.then(data=>data.map(item=>
    {
        console.log(item.address);
    }))
