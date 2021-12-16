const promise=new Promise((resolve,reject)=>
{
  var connection=false;
  if(connection)
  {
      resolve('connection is established');
  }else{
      reject('connection not established');
  }
});

promise.then(x=>console.log(x)).catch(y=>console.log(y));
