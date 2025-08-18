// import Data
import { getStoredMovies } from "./modules/storage.js";
import { renderFavouriteMovieCard } from "./modules/journalUi.js";

// HTML-container where the Journal-movieCart will be display
const favouriteMovieCont = document.querySelector("#favourite-movie-container");

// get the selected favourite movies from localStorage
const storedMovies = getStoredMovies();

// display favourite movies
storedMovies?.forEach?.((movieObj) => {
  renderFavouriteMovieCard(movieObj, favouriteMovieCont);
});
