// localStorage.clear();

// get the new state of the movie Data in localstorage
const getStoredMovies = () => {
  return JSON.parse(localStorage.getItem("storedMovies")) || [];
};

// added new movie in the localstorage list
const addMovie = (param) => {
  const { id } = param;

  const storedMovies = getStoredMovies();

  // created a temporaly update list
  let updatedStoredMovies = [];

  // look if the new movie already is in the localstorage list
  const isInStoredMovie = storedMovies.some((selectedMovie) => {
    return selectedMovie.id === id;
  });

  // updated only the quantity proprety of the movie if it already exists and save in the temporaly update list
  if (isInStoredMovie) {
    updatedStoredMovies = storedMovies.map((selectedMovie) => {
      if (selectedMovie.id === id) {
        // identify the right data set in the localstorage list only the right data set should be modified
        return { ...selectedMovie, quantity: selectedMovie.quantity + 1 };
      } else {
        // all the other data must stay the same
        return selectedMovie;
      }
    });

    // added the new movie to the temporaly list if it is the first time and updated the quantity info.
  } else {
    const updatedSelectedMovie = { ...param, quantity: 1 };
    updatedStoredMovies = [...storedMovies, updatedSelectedMovie];
  }

  // save the new update temporaly list to localstorage
  localStorage.setItem("storedMovies", JSON.stringify(updatedStoredMovies));
};

export { getStoredMovies, addMovie };
