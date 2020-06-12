export class MovieCard {
  constructor(movie) {
    this.imdbTitleUrl = 'https://www.imdb.com/title/';
    this.init(movie);
    this.poster.onerror = () => {
      this.poster.remove();
    };
    this.title.append(this.link);
    this.ratingWrapper.append(this.star, this.rating);
    this.node.append(
      this.title,
      this.poster,
      this.year,
      this.ratingWrapper,
      this.aboutFilmButton
    );
  }

  initNode() {
    this.node = document.createElement('div');
    this.node.classList.add('swiper-slide');
  }

  initPoster(movie) {
    this.poster = document.createElement('img');
    this.poster.src = movie.Poster ? movie.Poster : 'not found';
    this.poster.alt = 'poster';
  }

  initYear(movie) {
    this.year = document.createElement('div');
    this.year.classList.add('font-weight-bold', 'small');
    this.year.innerHTML = movie.Year;
  }

  initRatingWrapper() {
    this.ratingWrapper = document.createElement('div');
    this.ratingWrapper.classList.add('rating-film');
  }

  initLink(movie) {
    this.link = document.createElement('a');
    this.link.href = `${this.imdbTitleUrl}${movie.imdbID}/videogallery/`;
    this.link.target = '_blank';
    this.link.innerHTML = movie.Title ? movie.Title : 'not found';
  }

  initTitle() {
    this.title = document.createElement('h3');
    this.title.classList.add('slide-title', 'font-weight-bold');
  }

  initStar() {
    this.star = document.createElement('img');
    this.star.src = './src/img/star.jpg';
    this.star.alt = 'star';
    this.star.classList.add('rating-film-star');
  }

  initAboutFilm(movie) {
    this.aboutFilmButton = document.createElement('a');
    this.aboutFilmButton.classList.add(
      'btn',
      'btn-outline-info',
      'about-film-btn'
    );
    this.aboutFilmButton.innerHTML = 'about film';
    this.aboutFilmButton.href = `${this.imdbTitleUrl}${movie.imdbID}/`;
    this.aboutFilmButton.target = '_blank';
  }

  initRating(movie) {
    this.rating = document.createElement('span');
    this.rating.innerHTML = movie.imdbRating;
    this.rating.classList.add('font-weight-bold', 'small');
  }

  init(movie) {
    this.initNode();
    this.initTitle();
    this.initLink(movie);
    this.initPoster(movie);
    this.initYear(movie);
    this.initRatingWrapper();
    this.initRating(movie);
    this.initStar();
    this.initAboutFilm(movie);
  }
}
