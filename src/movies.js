// import { bindHelloForm } from './movies/hello';

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded. Ready to go!");
  getAddMovie();
  showTitleAndDescription();
});

const getAddMovie = () => {
  const movieButton = document.querySelector('#bug-add');
  const movieType = document.querySelector('#movie-type').value;
  const movieDescription = document.querySelector('textarea[name=movie-description]').value;
  const movieName = document.querySelector('input[name=movie-name]').value;
  const buttonAddMovie = document.addEventListener('click',(e) => {
    if(e.target.tagName === 'BUTTON'){
      addMovie(movieType,movieName,movieDescription);
    }
  });
}

const addMovie = (type,title,description) => {
  const list = document.querySelector('#movies-list');
  const addDiv = document.createElement('div');
  addDiv.setAttribute('class','panel-block');
  addDiv.dataset.title = title;
  addDiv.dataset.description = description;
  addDiv.innerText = title +', ' + type;
  list.appendChild(addDiv); 


};
const showTitleAndDescription = () => {
  const list = document.querySelector('#movies-list');
  const movieTitle = document.querySelector('#movie-title');
  const messageBody = document.querySelector('.message-body');
  const showMovieDetails = document.querySelector('#movie-details');
  list.addEventListener('click', (film) => {
    if((film.target.getAttribute('class') === 'panel-block')&& (film.target !== film.target.parentElement.children[1])){
      movieTitle.innerText = film.target.dataset.title;
      messageBody.innerText = film.target.dataset.description;
      showMovieDetails.style.display = "block";
    }
  });
}