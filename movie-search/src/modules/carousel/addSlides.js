import { MovieCard } from '../Movie/MovieCard';
import API_DATA from '../API/API_DATA';
import { swiper } from './carousel';
function addSlides(movies) {
  const slides = movies.map((movie) => {
    const slide = new MovieCard(movie);
    return slide.node;
  });
  if (API_DATA.loadingPage === 1) {
    swiper.removeAllSlides();
  }
  swiper.appendSlide(slides);
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
}
export default addSlides;
