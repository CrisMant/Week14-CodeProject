
function renderMovie(movie) {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    const image = document.createElement("img");
    image.src = movie.image;
    image.alt = movie.title;
    const title = document.createElement("h2");
    title.textContent = movie.title;
    const synopsis = document.createElement("p");
    synopsis.textContent = `Synopsis: ${movie.synopsis}`;
    const stars = document.createElement("div");
    stars.classList.add("stars");
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement("span");
        star.textContent = "★";
        star.addEventListener("click", () => {
            rateMovie(movie, i);
        });
        stars.appendChild(star);

    }
    const reviewList = document.createElement("div");
    reviewList.classList.add("review-list");
    movie.reviews.forEach(review => {
        const reviewElement = document.createElement("div");
        reviewElement.classList.add("review");
        reviewElement.textContent = review;
        reviewList.appendChild(reviewElement);
    });
    const reviewForm = document.createElement("div");
    reviewForm.classList.add("review-form");
    const reviewFormTitle = document.createElement("h3");
    reviewFormTitle.textContent = "Leave a Review";
    const reviewTextArea = document.createElement("textarea");
    reviewTextArea.rows = 4;
    reviewTextArea.cols = 50;
    reviewTextArea.placeholder = "Write your review";
    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.addEventListener("click", (event) => {
        event.preventDefault();
        addReview(movie, reviewTextArea.value);
        reviewTextArea.value = ""; 
    });
    reviewForm.appendChild(reviewFormTitle);
    reviewForm.appendChild(reviewTextArea);
    reviewForm.appendChild(document.createElement("br"));
    reviewForm.appendChild(submitButton);

    movieElement.appendChild(image);
    movieElement.appendChild(title);
    movieElement.appendChild(synopsis);
    movieElement.appendChild(stars);
    movieElement.appendChild(reviewList);
    movieElement.appendChild(reviewForm);

    return movieElement;
}

function rateMovie(movie, rating) {
    movie.rating = rating;
    renderMovies();
}

function addReview(movie, review) {
    movie.reviews.push(review);
    renderMovies();
}

function renderMovies() {
    const movieList = document.querySelector(".movie-list");
    movieList.innerHTML = "";
    movies.forEach(movie => {
        const movieElement = renderMovie(movie);
        movieList.appendChild(movieElement);
    });
}

renderMovies();