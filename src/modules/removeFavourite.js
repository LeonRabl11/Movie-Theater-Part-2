import { getStoredMovies } from "./storage.js";
// removed the movie data from the datalist in localstorage and save the new datalist in localstorage
const removeMovie = (param) => {
  const { id, title } = param;
  // get the new state of the movie Data in localstorage
  const storedMovies = getStoredMovies();

  // remove the movie data from Datalist in localstorage
  const updatedStoredMovies = storedMovies.filter((storedMovie) => {
    return storedMovie.id !== id;
  });

  // save the new datalist
  localStorage.setItem("storedMovies", JSON.stringify(updatedStoredMovies));
};

export { removeMovie };
