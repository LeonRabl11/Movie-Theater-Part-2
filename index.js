import { fetchMovies } from "./src/modules/networks.js";
import { renderMovieCard } from "./src/modules/homeUi.js";
import { searchMovies } from "./src/modules/networks.js";

// HTML-container where the movieCart will be display
const movieCont = document.querySelector("#movie-container");

// *   **Display Data**: Populate the DOM with the fetched movie data as styled cards. Show us the name, image and type. The grid is already set up in the HTML file.

const fetchAndRendermovies = async () => {
  // make sur that the Data from fetch don't have any Error. Through the try-catch function we will catch possible fetching _Error
  try {
    const { results } = await fetchMovies();

    const movies = { results };
    // display popular movies
    movies.results?.forEach?.((movieObj) => {
      renderMovieCard(movieObj, movieCont);
    });
  } catch (error) {
    console.error(error);
  }
};

// Added the movieCart on the sreen
fetchAndRendermovies();

export { fetchAndRendermovies };

//Search function//

// Debounce function
function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

//Added the input-field
const searchInput = document.querySelector("#searchInput");

//function handleSearch, gets called evertime the user starts the search
const handleSearch = async (event) => {
  const query = searchInput.value.trim();

  //checking if the input-field is empty, if yes searchMovies will get removed - fetchAndRendermovies will get shown
  if (query === "") {
    removeMovies();
    fetchAndRendermovies();
    return;
  }

  //extern function to hand over the query to seachMovies
  const movies = await searchMovies(query);

  //checking if the query is available, if not function gets stopped
  if (!movies?.results?.length) return;

  //removing old movies to show just the current input
  removeMovies();

  //display new movies
  movies.results.forEach((movie) => {
    renderMovieCard(movie, movieCont);
  });
};

// Wrap handleSearch with debounce of 300ms
searchInput.addEventListener("input", debounce(handleSearch, 300));

// removes ALL child elements
function removeMovies() {
  const container = movieCont;
  container.innerHTML = "";
}
