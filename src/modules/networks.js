// authentification info for the fetching url.
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWUzNGQ2MjI2YzdlMTE5MzQxZWJjZmNmMjk4YmI2YSIsIm5iZiI6MTc1NDQ5NDc1OC4xNDUsInN1YiI6IjY4OTM3NzI2MDE3YWQ0YTA3Njk5MTllOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i0yJatMFltM1g0Ei_BaJp4tBOuQEXfAvkp9ncbNcNqQ",
  },
};

// fetch for popular movies
const fetchMovies = async (params) => {
  // fetch adress to get the data of popular movies with the needing authentification
  const resp = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  );

  // get a Error message back if something goes wrong
  if (!resp.ok) throw new Error(`Something went wrong! Error ${resp.status}`);

  const data = await resp.json();

  //gives data from popular movies back for using it in other function
  return data;
};

export { fetchMovies };

//fetch for search function//

export const searchMovies = async (search) => {
  //The url for search movies - (search) is the query of the input-field
  const url = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`;

  //secures the code, the errors are not crashing the whole website
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    //gives data back for using it in other function
    return data;

    //error handling
  } catch (error) {
    console.error("Error", error);
    return [];
  }
};
