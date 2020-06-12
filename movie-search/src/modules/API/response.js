import API_DATA from './API_DATA';

export function response(movieTitle, page = 1) {
  const resultResponse = document.querySelector('.result-response');
  const enLang = 'en';

  resultResponse.innerHTML = '';
  const loader = document.querySelector('.loader');
  loader.style.display = 'initial';
  return fetch(
    `${API_DATA.yandexUrl}?key=${API_DATA.yandexKey}&text=${movieTitle}&lang=en`
  )
    .then((data) => {
      checkStatusError(data);
      return data.json();
    })
    .then((resp) => {
      if (resp.lang.substring(0, 2) !== enLang) {
        resultResponse.innerHTML = `Showing results for '${resp.text[0]}'`;
      }
      return fetch(
        `${API_DATA.OMDbUrl}?apikey=${API_DATA.OMDbKey}&s=${resp.text[0]}&page=${page}`
      );
    })
    .then((data) => {
      checkStatusError(data);
      return data.json();
    })
    .then((resp) => {
      if (resp.Response === 'True') {
        API_DATA.searchKey = movieTitle;
        API_DATA.maxPage = Math.ceil(resp.totalResults / 10);
        API_DATA.loadingPage = page;
        return Promise.all(
          resp.Search.map((movie) =>
            fetch(
              `${API_DATA.OMDbUrl}?i=${movie.imdbID}&apikey=${API_DATA.OMDbKey}`
            ).then((data) => {
              checkStatusError(data);
              return data.json();
            })
          )
        );
      }
      throw new Error(`No results for '${movieTitle}'`);
    })
    .catch((error) => {
      resultResponse.innerHTML = `${error.message}`;
      loader.style.display = 'none';
    });

  function checkStatusError(data) {
    const errorMinClient = 400;
    const errorMaxServer = 600;
    if (data.status >= errorMinClient && data.status < errorMaxServer) {
      throw new Error(`Error ${data.status}`);
    }
  }
}
