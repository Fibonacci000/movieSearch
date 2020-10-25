//THIS IS AXIOS GET API KEY
const fetchData = async (searchMovie) => {
    const response = await axios.get('http://www.omdbapi.com/', {
            params: {
                apikey: '8641a414',
                s: searchMovie
            }

        })
        .then(function (response) {
            const moviesArr = response.data.Search;


            if (response.data.Error) {
                //this will catch the error and put it in an empty object
                return [];
            }




            for (let movie of moviesArr) {
                const displayMovies = document.createElement('div');
                console.log(movie)

                displayMovies.innerHTML = `
                     <img src = "${movie.Poster}"/>
                     <h1 class='test'> ${movie.Title}</h1>
                     <h1 class='test'>${movie.Year}</h1>
                    `;


                const display = document.querySelector('#movieSection')
                const removeDisplay = document.querySelector('#movieSection')


                if (!response.data.Error) {
                    display.appendChild(displayMovies)
                } else {
                    removeDisplay.parentNode.removeChild(removeDisplay)
                }


            }

        });

}

const search = document.querySelector('input');





let timeDone;
const results = (e) => {

    if (timeDone) {
        // clearTimeout() METHOD TO PREVENT FUNCTION FROM RUNNING.
        clearTimeout(timeDone);
    }
    timeDone = setTimeout(() => {
        fetchData(e.target.value)
    }, 1000)
}

search.addEventListener('input', results);