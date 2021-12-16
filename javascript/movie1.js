let SearchMovie = () =>
{
   let moviename= document.getElementById('moviename').value;
    fetch(`http://www.omdbapi.com/?apikey=70244ed7&t=${moviename}`)
    .then(res=>res.json())
    .then(data=>
        {
            document.getElementById('poster').src = data.Poster;
            document.getElementById('title').innerHTML = data.Title;
            document.getElementById('actors').innerHTML = data.Actors;
            document.getElementById('genres').innerHTML = data.Genre;
            document.getElementById('director').innerHTML = data.Director;
            document.getElementById('duration').innerHTML = data.Runtime;
        });
}