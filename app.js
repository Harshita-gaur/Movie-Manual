let api="https://www.omdbapi.com/?apikey=6c3ce92c&t="

function searchmovie(){
    document.getElementById('details').style.display="inline"
    let name=document.getElementById('moviename').value
    let query = api + name
    fetch(query).then((data)=>{
        return data.json()
    }).then((data)=>{
        console.log(data)
        title.innerText=data.Title
        Runtime.innerText=data.Runtime
        desc.innerText=data.Plot
        language.innerText=data.Language
        genre.innerText=data.Genre
        year.innerText=data.Released
        IMDBratings.innerText=data.imdbRating
        actors.innerText=data.Actors
        directors.innerText=data.Director
        writers.innerText=data.Writer
        collection.innerText=data.BoxOffice
        country.innerText=data.Country
        awards.innerText=data.Awards
        production.innerText=data.Production
        poster.src=data.Poster
    })
}