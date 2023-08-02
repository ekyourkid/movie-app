const popularMovieWarper = document.getElementById("popular-movie");

fetch("https://api.themoviedb.org/3/movie/popular", {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjU3MGUxZTJiNTNlN2NjYmU5Y2RmNmM3NzE3NDMxOSIsInN1YiI6IjVmNzJmNThmMzUwMzk4MDAzNDkyN2JmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zNJh5i7mlcnJ9K4_0qkkvbcapDfbceviHGmkDUPB-bc",
  },
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const movieSlice = data?.results?.slice(0, 4);
    console.log(movieSlice);
    
    for(let i = 0; i < movieSlice.length; i++){
        console.log(movieSlice[i])
        const movie = movieSlice[i]

        const cardItem = document.createElement('div')
        cardItem.classList.add('card')

        const posterImage = document.createElement('img')
        posterImage.src = "https://image.tmdb.org/t/p/original/" + movie.poster_path 
        posterImage.alt = movie.title
        posterImage.classList.add('card-poster')
       
        const title = document.createElement('h5')
        title.innerHTML = movie.title
        title.classList.add('card-title')


        const overlay = document.createElement('div')
        overlay.classList.add('card-overlay')
        overlay.appendChild(title)
    
        cardItem.appendChild(posterImage)
        cardItem.appendChild(overlay)


        console.log(cardItem)
        popularMovieWarper.appendChild(cardItem)
        


    //     <div class="card">
    //     <img
    //       class="card-poster"
    //       src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411"
    //       alt="movie-poster"
    //     />
    //     <h5>Upcoming Movie</h5>
    //     <p>
    //       Lorem Ipsum is simply dummy text of the printing and typesetting
    //       industry.
    //     </p>
    //   </div>
    }

  })
  .catch((error) => {
    console.log(error, "x");
  })
  .finally(() => {
    console.log("selesai mengambil data dari server");
  });
