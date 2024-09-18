const api="https://www.omdbapi.com/?apikey=6c3ce92c&t="

function handleEnterKey(event) {
    if (event.key === "Enter") {
        document.getElementById('btn').click();
    }
}
// Add event listener for Enter key
document.getElementById('moviename').addEventListener('keydown', handleEnterKey);

function toggleLoading(isLoading) {
    // Show or hide loading spinner
    const loadingSpinner = document.getElementById('loading');
    loadingSpinner.style.display = isLoading ? "block" : "none";
}

function searchmovie(){
    document.getElementById('details').style.display="inline"
    let name=document.getElementById('moviename').value
    let query = api + name
    fetch(query).then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        }).then((data)=>{
        if (data.Response === "False") {
                alert(data.Error); 
                return; 
            }
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
    .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
        alert('Error fetching movie data: ' + error.message); // Alert the user about the error
    });
}
