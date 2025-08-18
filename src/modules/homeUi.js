import { addMovie } from "./storage.js";

// created a card with all the Needing information for the popular movieCard
const renderMovieCard = (param, container) => {
  // extention Code to image-adress
  const imgCode = "https://image.tmdb.org/t/p/w500";
  // created a moviecard container from home with styles
  const movieCard = document.createElement("div");
  movieCard.className =
    "bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center";
  // created a image and movie-info container from home with styles
  const movieImageDiv = document.createElement("div");
  const movieInfoDiv = document.createElement("div");
  movieImageDiv.className = "flex mb-7 justify-center";
  movieInfoDiv.className = " flex flex-col  text-center ";
  // attached the image and movie-info container from home to moviecard container from home
  movieCard.appendChild(movieImageDiv);
  movieCard.appendChild(movieInfoDiv);

  // created a image-element  with all styles
  const movieImage = document.createElement("img");
  movieImage.src = imgCode + param.poster_path; // Here we are putting together the extenstion code and image-info from fetching Data together
  movieImage.alt = param.name;
  movieImage.className = "mb-4";
  //attached the image-element to image container
  movieImageDiv.appendChild(movieImage);

  // created a title-element with all styles
  const movieName = document.createElement("h2");
  movieName.textContent =
    param.title.charAt(0).toUpperCase() + param.title.slice(1); // First Letter of the title should be Uppercase
  movieName.className = "text-xl font-bold mb-4";
  // attached the title-element to movie-info container
  movieInfoDiv.appendChild(movieName);

  // created a movie-info elements with all styles
  const movieInfo = document.createElement("div");
  movieInfo.textContent = `Release date: ${param.release_date} | `;
  movieInfo.className = "text-gray-800 text-xs mb-2";
  // attached the movie-info to movie-info container
  movieInfoDiv.appendChild(movieInfo);

  // created a span element with all styles and overview-info teil-1
  const spanInfoElt1 = document.createElement("span");
  spanInfoElt1.setAttribute("id", `text-short-${param.id}`);
  spanInfoElt1.textContent = `Overview: ${
    param.overview.length ? param.overview.slice(0, 50) + "..." : param.overview
  }`;
  movieInfo.appendChild(spanInfoElt1);

  // created a span element with all styles and overview-info teil-2
  const spanInfoElt2 = document.createElement("span");
  spanInfoElt2.className = "hidden";
  spanInfoElt2.setAttribute("id", `text-full-${param.id}`);
  spanInfoElt2.textContent = `Overview: ${param.overview}`;
  movieInfo.appendChild(spanInfoElt2);

  // created a Read more button with all styles
  const toggleButton = document.createElement("button");
  toggleButton.setAttribute("id", `toggle-btn-${param.id}`);
  toggleButton.className = "text-red-400 underline ml-1 cursor-pointer";
  toggleButton.textContent = "Read more";

  toggleButton.addEventListener("click", () => {
    const toggleBtn = document.querySelector(`#toggle-btn-${param.id}`);
    const shortText = document.querySelector(`#text-short-${param.id}`);
    const fullText = document.querySelector(`#text-full-${param.id}`);
    // added eventlistener to hide and unhide the overview and change the buttonContent
    if (fullText.classList.contains("hidden")) {
      shortText.classList.add("hidden");
      fullText.classList.remove("hidden");
      toggleBtn.textContent = "Read less";
    } else {
      shortText.classList.remove("hidden");
      fullText.classList.add("hidden");
      toggleBtn.textContent = "Read more";
    }
  });

  movieInfo.appendChild(toggleButton);

  // created a add-favourite Button with all styles
  const addFavoriteBtn = document.createElement("button");
  addFavoriteBtn.textContent = "Add to Favourites";
  addFavoriteBtn.className =
    "px-4 py-2 bg-green-500 hover:bg-green-400 active:bg-green-300 text-white rounded mt-auto cursor-pointer";
  // added eventlistener to add the data of selected movie in localstorage
  addFavoriteBtn.addEventListener("click", () => {
    addMovie(param);
  });

  // attached the Button to movieCard container
  movieCard.appendChild(addFavoriteBtn);

  // attached the movieCard home container to HTML-container
  container.appendChild(movieCard);
};

export { renderMovieCard };
