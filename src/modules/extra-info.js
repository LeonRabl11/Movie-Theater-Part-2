import { getStoredMovies } from "./storage.js";
// added the new comment and save in localstorage
const extraInfoMovie = (info) => {
  // get the new state of the Data in localstorage
  const storedMovies = getStoredMovies();

  // updated the data with the new Infos
  const updatedStoredMovies = storedMovies.map((storedMovie) => {
    return { ...storedMovie, infos: info };
  });
  // save the updated Data in localstorage
  localStorage.setItem("storedMovies", JSON.stringify(updatedStoredMovies));
};

export { extraInfoMovie };
