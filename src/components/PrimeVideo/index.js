// Write your code here
import MoviesSlider from '../MoviesSlider'

import './index.css'

const actionMovie = 'ACTION'
const comedyMovie = 'COMEDY'
// const horrorMovie = 'Horror'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === actionMovie,
  )

  const comedyMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === comedyMovie,
  )

  {
    /* const horrorMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === horrorMovie,
   ) */
  }

  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        className="image"
        alt="prime video"
      />

      <div className="movie-container">
        <h1 className="movies-heading">Action Movies</h1>
        <MoviesSlider moviesGenere={actionMoviesList} />

        <h1 className="movies-heading">Comedy Movies</h1>
        <MoviesSlider moviesGenere={comedyMoviesList} />

        {/* <h1 className="movies-heading">Horror Movies</h1>
        <MoviesSlider moviesGenere={horrorMoviesList} /> */}
      </div>
    </div>
  )
}

export default PrimeVideo
