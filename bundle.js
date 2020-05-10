/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_carousel_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/carousel/carousel */ "./src/modules/carousel/carousel.js");
/* harmony import */ var _modules_carousel_carousel_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/carousel/carousel.scss */ "./src/modules/carousel/carousel.scss");
/* harmony import */ var _modules_carousel_carousel_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_carousel_carousel_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_search_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/search/search */ "./src/modules/search/search.js");
/* harmony import */ var _modules_search_search_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/search/search.scss */ "./src/modules/search/search.scss");
/* harmony import */ var _modules_search_search_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_search_search_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_footer_footer_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/footer/footer.scss */ "./src/modules/footer/footer.scss");
/* harmony import */ var _modules_footer_footer_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_API_response__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/API/response */ "./src/modules/API/response.js");
/* harmony import */ var _modules_keyboard_enKeyboard_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/keyboard/enKeyboard.json */ "./src/modules/keyboard/enKeyboard.json");
var _modules_keyboard_enKeyboard_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./modules/keyboard/enKeyboard.json */ "./src/modules/keyboard/enKeyboard.json", 1);
/* harmony import */ var _modules_keyboard_keyboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/keyboard/keyboard */ "./src/modules/keyboard/keyboard.js");
/* harmony import */ var _modules_keyboard_ruKeyboard_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/keyboard/ruKeyboard.json */ "./src/modules/keyboard/ruKeyboard.json");
var _modules_keyboard_ruKeyboard_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./modules/keyboard/ruKeyboard.json */ "./src/modules/keyboard/ruKeyboard.json", 1);
/* harmony import */ var _modules_keyboard_keyboard_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/keyboard/keyboard.scss */ "./src/modules/keyboard/keyboard.scss");
/* harmony import */ var _modules_keyboard_keyboard_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_modules_keyboard_keyboard_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _modules_search_virtualKeyboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/search/virtualKeyboard */ "./src/modules/search/virtualKeyboard.js");
/* harmony import */ var _modules_search_virtualKeyboard__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_modules_search_virtualKeyboard__WEBPACK_IMPORTED_MODULE_11__);













/***/ }),

/***/ "./src/modules/API/API_DATA.js":
/*!*************************************!*\
  !*** ./src/modules/API/API_DATA.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var API_DATA = {
  OMDbKey: '70a85660',
  yandexKey: 'trnsl.1.1.20200510T102305Z.0b347f5f87743b63.49169e7b07e41f007bbf4981c427a2fde917dc48',
  OMDbUrl: 'https://www.omdbapi.com/',
  yandexUrl: 'https://translate.yandex.net/api/v1.5/tr.json/translate',
  loadingPage: 1,
  searchKey: '',
  maxPage: 2
};
/* harmony default export */ __webpack_exports__["default"] = (API_DATA);

/***/ }),

/***/ "./src/modules/API/response.js":
/*!*************************************!*\
  !*** ./src/modules/API/response.js ***!
  \*************************************/
/*! exports provided: response */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "response", function() { return response; });
/* harmony import */ var _Movie_MovieCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Movie/MovieCard */ "./src/modules/Movie/MovieCard.js");
/* harmony import */ var _carousel_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../carousel/carousel */ "./src/modules/carousel/carousel.js");
/* harmony import */ var _API_DATA__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./API_DATA */ "./src/modules/API/API_DATA.js");



function response(movieTitle) {
  var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var resultResponse = document.querySelector('.result-response');
  resultResponse.innerHTML = '';
  var loader = document.querySelector('.loader');
  loader.style.display = 'initial';
  fetch("".concat(_API_DATA__WEBPACK_IMPORTED_MODULE_2__["default"].yandexUrl, "?key=").concat(_API_DATA__WEBPACK_IMPORTED_MODULE_2__["default"].yandexKey, "&text=").concat(movieTitle, "&lang=en")).then(function (data) {
    if (data.status >= 400 && data.status < 600) {
      throw new Error("Error ".concat(data.status));
    }

    return data.json();
  }).then(function (resp) {
    if (resp.lang.substring(0, 2) !== 'en') {
      resultResponse.innerHTML = "Showing results for '".concat(resp.text[0], "'");
    }

    return fetch("".concat(_API_DATA__WEBPACK_IMPORTED_MODULE_2__["default"].OMDbUrl, "?apikey=").concat(_API_DATA__WEBPACK_IMPORTED_MODULE_2__["default"].OMDbKey, "&s=").concat(resp.text[0], "&page=").concat(page));
  }).then(function (data) {
    if (data.status >= 400 && data.status < 600) {
      throw new Error("Error ".concat(data.status));
    }

    return data.json();
  }).then(function (resp) {
    if (resp.Response === 'True') {
      _API_DATA__WEBPACK_IMPORTED_MODULE_2__["default"].searchKey = movieTitle;
      _API_DATA__WEBPACK_IMPORTED_MODULE_2__["default"].maxPage = Math.ceil(resp.totalResults / 10);
      _API_DATA__WEBPACK_IMPORTED_MODULE_2__["default"].loadingPage = page;
      return Promise.all(resp.Search.map(function (movie) {
        return fetch("".concat(_API_DATA__WEBPACK_IMPORTED_MODULE_2__["default"].OMDbUrl, "?i=").concat(movie.imdbID, "&apikey=").concat(_API_DATA__WEBPACK_IMPORTED_MODULE_2__["default"].OMDbKey)).then(function (data) {
          if (data.status >= 400 && data.status < 600) {
            throw new Error("Error ".concat(data.status));
          }

          return data.json();
        });
      }));
    }

    throw new Error("No results for '".concat(movieTitle, "'"));
  }).then(function (movies) {
    var slides = movies.map(function (movie) {
      var slide = new _Movie_MovieCard__WEBPACK_IMPORTED_MODULE_0__["MovieCard"](movie);
      return slide.node;
    });

    if (page === 1) {
      _carousel_carousel__WEBPACK_IMPORTED_MODULE_1__["swiper"].removeAllSlides();
    }

    _carousel_carousel__WEBPACK_IMPORTED_MODULE_1__["swiper"].appendSlide(slides);
    loader.style.display = 'none';
  })["catch"](function (error) {
    resultResponse.innerHTML = "".concat(error.message);
    loader.style.display = 'none';
  });
}

/***/ }),

/***/ "./src/modules/Movie/MovieCard.js":
/*!****************************************!*\
  !*** ./src/modules/Movie/MovieCard.js ***!
  \****************************************/
/*! exports provided: MovieCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieCard", function() { return MovieCard; });
var MovieCard = /*#__PURE__*/function () {
  function MovieCard(movie) {
    var _this = this;

    this.init(movie);

    this.poster.onerror = function () {
      _this.poster.remove();
    };

    this.title.append(this.link);
    this.ratingWrapper.append(this.star, this.rating);
    this.node.append(this.title, this.poster, this.year, this.ratingWrapper, this.aboutFilmButton);
  }

  var _proto = MovieCard.prototype;

  _proto.initNode = function initNode() {
    this.node = document.createElement('div');
    this.node.classList.add('swiper-slide');
  };

  _proto.initPoster = function initPoster(movie) {
    this.poster = document.createElement('img');
    this.poster.src = movie.Poster ? movie.Poster : 'not found';
    this.poster.alt = 'poster';
  };

  _proto.initYear = function initYear(movie) {
    this.year = document.createElement('div');
    this.year.classList.add('font-weight-bold', 'small');
    this.year.innerHTML = movie.Year;
  };

  _proto.initRatingWrapper = function initRatingWrapper() {
    this.ratingWrapper = document.createElement('div');
    this.ratingWrapper.classList.add('rating-film');
  };

  _proto.initLink = function initLink(movie) {
    this.link = document.createElement('a');
    this.link.href = "https://www.imdb.com/title/".concat(movie.imdbID, "/videogallery/");
    this.link.target = '_blank';
    this.link.innerHTML = movie.Title ? movie.Title : 'not found';
  };

  _proto.initTitle = function initTitle() {
    this.title = document.createElement('h3');
    this.title.classList.add('slide-title', 'font-weight-bold');
  };

  _proto.initStar = function initStar() {
    this.star = document.createElement('img');
    this.star.src = './src/img/star.jpg';
    this.star.alt = 'star';
    this.star.classList.add('rating-film-star');
  };

  _proto.initAboutFilm = function initAboutFilm(movie) {
    this.aboutFilmButton = document.createElement('a');
    this.aboutFilmButton.classList.add('btn', 'btn-outline-info', 'about-film-btn');
    this.aboutFilmButton.innerHTML = 'about film';
    this.aboutFilmButton.href = "https://www.imdb.com/title/".concat(movie.imdbID, "/");
    this.aboutFilmButton.target = '_blank';
  };

  _proto.initRating = function initRating(movie) {
    this.rating = document.createElement('span');
    this.rating.innerHTML = movie.imdbRating;
    this.rating.classList.add('font-weight-bold', 'small');
  };

  _proto.init = function init(movie) {
    this.initNode();
    this.initTitle();
    this.initLink(movie);
    this.initPoster(movie);
    this.initYear(movie);
    this.initRatingWrapper();
    this.initRating(movie);
    this.initStar();
    this.initAboutFilm(movie);
  };

  return MovieCard;
}();

/***/ }),

/***/ "./src/modules/carousel/carousel.js":
/*!******************************************!*\
  !*** ./src/modules/carousel/carousel.js ***!
  \******************************************/
/*! exports provided: swiper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swiper", function() { return swiper; });
/* harmony import */ var _API_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../API/response */ "./src/modules/API/response.js");
/* harmony import */ var _API_API_DATA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../API/API_DATA */ "./src/modules/API/API_DATA.js");


var swiper = new Swiper('.swiper-container', {
  loopedSlides: 0,
  slidesPerView: 4,
  spaceBetween: 50,
  slidesPerGroup: 1,
  simulateTouch: true,
  loop: false,
  preloadImages: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    800: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  },
  on: {
    reachEnd: function reachEnd() {
      var sliderWrapper = document.querySelector('.swiper-wrapper');
      var page = _API_API_DATA__WEBPACK_IMPORTED_MODULE_1__["default"].loadingPage;
      page += 1;

      if (sliderWrapper.children.length === 0 || page >= _API_API_DATA__WEBPACK_IMPORTED_MODULE_1__["default"].maxPage) {
        return;
      }

      Object(_API_response__WEBPACK_IMPORTED_MODULE_0__["response"])(_API_API_DATA__WEBPACK_IMPORTED_MODULE_1__["default"].searchKey, page);
    }
  }
});

/***/ }),

/***/ "./src/modules/carousel/carousel.scss":
/*!********************************************!*\
  !*** ./src/modules/carousel/carousel.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/modules/footer/footer.scss":
/*!****************************************!*\
  !*** ./src/modules/footer/footer.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/modules/keyboard/enKeyboard.json":
/*!**********************************************!*\
  !*** ./src/modules/keyboard/enKeyboard.json ***!
  \**********************************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

module.exports = JSON.parse("[[{\"key\":\"`\",\"upKey\":\"~\",\"code\":\"Backquote\"},{\"key\":\"1\",\"upKey\":\"!\",\"code\":\"Digit1\"},{\"key\":\"2\",\"upKey\":\"@\",\"code\":\"Digit2\"},{\"key\":\"3\",\"upKey\":\"#\",\"code\":\"Digit3\"},{\"key\":\"4\",\"upKey\":\"$\",\"code\":\"Digit4\"},{\"key\":\"5\",\"upKey\":\"%\",\"code\":\"Digit5\"},{\"key\":\"6\",\"upKey\":\"^\",\"code\":\"Digit6\"},{\"key\":\"7\",\"upKey\":\"&\",\"code\":\"Digit7\"},{\"key\":\"8\",\"upKey\":\"*\",\"code\":\"Digit8\"},{\"key\":\"9\",\"upKey\":\"(\",\"code\":\"Digit9\"},{\"key\":\"0\",\"upKey\":\")\",\"code\":\"Digit0\"},{\"key\":\"-\",\"upKey\":\"_\",\"code\":\"Minus\"},{\"key\":\"=\",\"upKey\":\"+\",\"code\":\"Equal\"},{\"key\":\"&larr;\",\"code\":\"Backspace\",\"speсification\":\"functional\"}],[{\"key\":\"q\",\"code\":\"KeyQ\",\"speсification\":\"letter\"},{\"key\":\"w\",\"code\":\"KeyW\",\"speсification\":\"letter\"},{\"key\":\"e\",\"code\":\"KeyE\",\"speсification\":\"letter\"},{\"key\":\"r\",\"code\":\"KeyR\",\"speсification\":\"letter\"},{\"key\":\"t\",\"code\":\"KeyT\",\"speсification\":\"letter\"},{\"key\":\"y\",\"code\":\"KeyY\",\"speсification\":\"letter\"},{\"key\":\"u\",\"code\":\"KeyU\",\"speсification\":\"letter\"},{\"key\":\"i\",\"code\":\"KeyI\",\"speсification\":\"letter\"},{\"key\":\"o\",\"code\":\"KeyO\",\"speсification\":\"letter\"},{\"key\":\"p\",\"code\":\"KeyP\",\"speсification\":\"letter\"},{\"key\":\"[\",\"upKey\":\"{\",\"code\":\"BracketLeft\"},{\"key\":\"]\",\"upKey\":\"}\",\"code\":\"BracketRight\"},{\"key\":\"\\\\\",\"upKey\":\"|\",\"code\":\"Backslash\"},{\"key\":\"Del\",\"code\":\"Delete\",\"speсification\":\"functional\"}],[{\"key\":\"Caps\",\"code\":\"CapsLock\",\"speсification\":\"functional\"},{\"key\":\"a\",\"code\":\"KeyA\",\"speсification\":\"letter\"},{\"key\":\"s\",\"code\":\"KeyS\",\"speсification\":\"letter\"},{\"key\":\"d\",\"code\":\"KeyD\",\"speсification\":\"letter\"},{\"key\":\"f\",\"code\":\"KeyF\",\"speсification\":\"letter\"},{\"key\":\"g\",\"code\":\"KeyG\",\"speсification\":\"letter\"},{\"key\":\"h\",\"code\":\"KeyH\",\"speсification\":\"letter\"},{\"key\":\"j\",\"code\":\"KeyJ\",\"speсification\":\"letter\"},{\"key\":\"k\",\"code\":\"KeyK\",\"speсification\":\"letter\"},{\"key\":\"l\",\"code\":\"KeyL\",\"speсification\":\"letter\"},{\"key\":\";\",\"upKey\":\":\",\"code\":\"Semicolon\"},{\"key\":\"'\",\"upKey\":\"\\\"\",\"code\":\"Quote\"},{\"key\":\"Enter\",\"code\":\"Enter\",\"speсification\":\"functional\"}],[{\"key\":\"Shift\",\"code\":\"ShiftLeft\",\"speсification\":\"functional\"},{\"key\":\"z\",\"code\":\"KeyZ\",\"speсification\":\"letter\"},{\"key\":\"x\",\"code\":\"KeyX\",\"speсification\":\"letter\"},{\"key\":\"c\",\"code\":\"KeyC\",\"speсification\":\"letter\"},{\"key\":\"v\",\"code\":\"KeyV\",\"speсification\":\"letter\"},{\"key\":\"b\",\"code\":\"KeyB\",\"speсification\":\"letter\"},{\"key\":\"n\",\"code\":\"KeyN\",\"speсification\":\"letter\"},{\"key\":\"m\",\"code\":\"KeyM\",\"speсification\":\"letter\"},{\"key\":\",\",\"upKey\":\"<\",\"code\":\"Comma\"},{\"key\":\".\",\"upKey\":\">\",\"code\":\"Period\"},{\"key\":\"/\",\"upKey\":\"?\",\"code\":\"Slash\"},{\"key\":\"Shift\",\"code\":\"ShiftRight\",\"speсification\":\"functional\"}],[{\"key\":\"Tab\",\"code\":\"Tab\",\"speсification\":\"functional\"},{\"key\":\"EN\",\"code\":\"ChangeLang\",\"speсification\":\"functional\"},{\"key\":\" \",\"upKey\":\" \",\"code\":\"Space\"},{\"key\":\"◄\",\"code\":\"ArrowLeft\",\"speсification\":\"functional\"},{\"key\":\"►\",\"code\":\"ArrowRight\",\"speсification\":\"functional\"}]]");

/***/ }),

/***/ "./src/modules/keyboard/keyboard.js":
/*!******************************************!*\
  !*** ./src/modules/keyboard/keyboard.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enKeyboard_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enKeyboard.json */ "./src/modules/keyboard/enKeyboard.json");
var _enKeyboard_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./enKeyboard.json */ "./src/modules/keyboard/enKeyboard.json", 1);
/* harmony import */ var _ruKeyboard_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ruKeyboard.json */ "./src/modules/keyboard/ruKeyboard.json");
var _ruKeyboard_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./ruKeyboard.json */ "./src/modules/keyboard/ruKeyboard.json", 1);


var lang = localStorage.getItem('userLanguage') || 'en';
var body = document.querySelector('body');
var functional = 'functional';
var letter = 'letter';
var upperCase = false;
var shiftOn = false;
var cursorIndex = 0;
var content = document.createElement('div');
content.classList.add('keyboard-content');
body.append(content);
var textarea = document.querySelector('.form-control');
var keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
content.append(keyboard);
textarea.addEventListener('click', function () {
  cursorIndex = textarea.selectionEnd;
});
_enKeyboard_json__WEBPACK_IMPORTED_MODULE_0__["forEach"](function (row) {
  var rowNode = document.createElement('div');
  rowNode.classList.add('keyboard__row');
  keyboard.append(rowNode);
  row.forEach(function (keyObj) {
    var keyNode = document.createElement('div');
    keyNode.classList.add('keyboard__key');
    keyNode.id = keyObj.code;
    rowNode.append(keyNode);
    keyNode.enBoard = keyObj;
    keyNode.innerHTML = keyNode.enBoard.key;

    if (keyNode.enBoard.speсification === functional) {
      keyNode.classList.add(functional);
    }
  });
});
_ruKeyboard_json__WEBPACK_IMPORTED_MODULE_1__["forEach"](function (row) {
  row.forEach(function (keyObj) {
    var keyNode = document.getElementById(keyObj.code);
    keyNode.ruBoard = keyObj;
  });
});
var allKeys = Array.from(document.querySelectorAll('.keyboard__key'));
var langBoard;

function changeLetterCase() {
  allKeys.forEach(function (key) {
    if (lang === 'en') {
      langBoard = key.enBoard;
    }

    if (lang === 'ru') {
      langBoard = key.ruBoard;
    }

    if (langBoard.speсification === letter) {
      if (upperCase) {
        key.innerHTML = key.innerHTML.toLowerCase();
      } else {
        key.innerHTML = key.innerHTML.toUpperCase();
      }
    }
  });
}

function changeCase() {
  changeLetterCase();
  upperCase = !upperCase;
}

function changeLetterShift() {
  allKeys.forEach(function (key) {
    if (lang === 'en') {
      langBoard = key.enBoard;
    }

    if (lang === 'ru') {
      langBoard = key.ruBoard;
    }

    if (!langBoard.speсification) {
      if (shiftOn) {
        key.innerHTML = langBoard.key;
      } else {
        key.innerHTML = langBoard.upKey;
      }
    }
  });
}

function changeShift() {
  changeCase();
  changeLetterShift();
  shiftOn = !shiftOn;
}

function changeLetterLanguage() {
  if (lang === 'en') {
    lang = 'ru';
  } else {
    lang = 'en';
  }

  allKeys.forEach(function (key) {
    if (lang === 'en') {
      langBoard = key.enBoard;
    }

    if (lang === 'ru') {
      langBoard = key.ruBoard;
    }

    key.innerHTML = langBoard.key;

    if (upperCase) {
      upperCase = false;
      changeCase();
    }

    if (shiftOn) {
      shiftOn = false;
      changeShift();
      changeCase();
    }
  });
}

function changeLanguage() {
  changeLetterLanguage();
  localStorage.setItem('userLanguage', lang);
}

if (lang === 'ru') {
  lang = 'en';
  changeLanguage();
}

function insertChar(simbol) {
  var arr = textarea.value.split('');
  arr.splice(cursorIndex, 0, simbol);
  textarea.value = arr.join('');
  cursorIndex += 1;
  textarea.focus();
  textarea.selectionEnd = cursorIndex;
}

keyboard.addEventListener('mousedown', function (event) {
  if (!event.target.classList.contains('keyboard__key')) {
    return;
  }

  if (event.target.id === 'CapsLock') {
    return;
  }

  event.target.classList.add('active');

  if (event.target.enBoard.speсification === functional) {
    return;
  }

  insertChar(event.target.innerHTML[0]);
});
keyboard.addEventListener('mouseup', function (event) {
  if (!event.target.classList.contains('keyboard__key')) {
    return;
  }

  if (event.target.id === 'CapsLock') {
    return;
  }

  event.target.classList.remove('active');

  if (event.target.enBoard.speсification === functional) {
    return;
  }

  textarea.focus();
  textarea.selectionEnd = cursorIndex;
});
var changeLangKey = document.getElementById('ChangeLang');
changeLangKey.addEventListener('click', changeLanguage);
var capslockKey = document.getElementById('CapsLock');

function capslockActive() {
  if (capslockKey.classList.contains('active')) {
    capslockKey.classList.remove('active');
  } else {
    capslockKey.classList.add('active');
  }
}

capslockKey.addEventListener('click', function () {
  capslockActive();
  changeCase();
});
var tabKey = document.getElementById('Tab');
tabKey.addEventListener('click', function () {
  insertChar('\t');
});
var backspaceKey = document.getElementById('Backspace');
backspaceKey.addEventListener('click', function () {
  var arr = textarea.value.split('');
  arr.splice(cursorIndex - 1, 1);
  textarea.value = arr.join('');
  cursorIndex = cursorIndex <= 0 ? 0 : cursorIndex - 1;
  textarea.focus();
  textarea.selectionEnd = cursorIndex;
});
var enterKey = document.getElementById('Enter');
enterKey.addEventListener('click', function () {
  document.querySelector('.submit').click();
});
var shiftLeftKey = document.getElementById('ShiftLeft');
shiftLeftKey.addEventListener('click', changeShift);
var shiftRightKey = document.getElementById('ShiftRight');
shiftRightKey.addEventListener('click', changeShift);
var deleteKey = document.getElementById('Delete');
deleteKey.addEventListener('click', function () {
  var arr = textarea.value.split('');
  arr.splice(cursorIndex, 1);
  textarea.value = arr.join('');
  textarea.focus();
  textarea.selectionEnd = cursorIndex;
});
var arrowLeftKey = document.getElementById('ArrowLeft');
arrowLeftKey.addEventListener('click', function () {
  cursorIndex -= 1;
  textarea.focus();
  textarea.selectionEnd = cursorIndex;
  textarea.selectionStart = cursorIndex;
});
var arrowRightKey = document.getElementById('ArrowRight');
arrowRightKey.addEventListener('click', function () {
  cursorIndex += 1;
  textarea.focus();
  textarea.selectionEnd = cursorIndex;
  textarea.selectionStart = cursorIndex;
});

/***/ }),

/***/ "./src/modules/keyboard/keyboard.scss":
/*!********************************************!*\
  !*** ./src/modules/keyboard/keyboard.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/modules/keyboard/ruKeyboard.json":
/*!**********************************************!*\
  !*** ./src/modules/keyboard/ruKeyboard.json ***!
  \**********************************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

module.exports = JSON.parse("[[{\"key\":\"ё\",\"code\":\"Backquote\",\"speсification\":\"letter\"},{\"key\":\"1\",\"upKey\":\"!\",\"code\":\"Digit1\"},{\"key\":\"2\",\"upKey\":\"\\\"\",\"code\":\"Digit2\"},{\"key\":\"3\",\"upKey\":\"№\",\"code\":\"Digit3\"},{\"key\":\"4\",\"upKey\":\";\",\"code\":\"Digit4\"},{\"key\":\"5\",\"upKey\":\"%\",\"code\":\"Digit5\"},{\"key\":\"6\",\"upKey\":\":\",\"code\":\"Digit6\"},{\"key\":\"7\",\"upKey\":\"?\",\"code\":\"Digit7\"},{\"key\":\"8\",\"upKey\":\"*\",\"code\":\"Digit8\"},{\"key\":\"9\",\"upKey\":\"(\",\"code\":\"Digit9\"},{\"key\":\"0\",\"upKey\":\")\",\"code\":\"Digit0\"},{\"key\":\"-\",\"upKey\":\"_\",\"code\":\"Minus\"},{\"key\":\"=\",\"upKey\":\"+\",\"code\":\"Equal\"},{\"key\":\"&larr;\",\"code\":\"Backspace\",\"speсification\":\"functional\"}],[{\"key\":\"й\",\"code\":\"KeyQ\",\"speсification\":\"letter\"},{\"key\":\"ц\",\"code\":\"KeyW\",\"speсification\":\"letter\"},{\"key\":\"у\",\"code\":\"KeyE\",\"speсification\":\"letter\"},{\"key\":\"к\",\"code\":\"KeyR\",\"speсification\":\"letter\"},{\"key\":\"е\",\"code\":\"KeyT\",\"speсification\":\"letter\"},{\"key\":\"н\",\"code\":\"KeyY\",\"speсification\":\"letter\"},{\"key\":\"г\",\"code\":\"KeyU\",\"speсification\":\"letter\"},{\"key\":\"ш\",\"code\":\"KeyI\",\"speсification\":\"letter\"},{\"key\":\"щ\",\"code\":\"KeyO\",\"speсification\":\"letter\"},{\"key\":\"з\",\"code\":\"KeyP\",\"speсification\":\"letter\"},{\"key\":\"х\",\"code\":\"BracketLeft\",\"speсification\":\"letter\"},{\"key\":\"ъ\",\"code\":\"BracketRight\",\"speсification\":\"letter\"},{\"key\":\"\\\\\",\"upKey\":\"/\",\"code\":\"Backslash\"},{\"key\":\"Del\",\"code\":\"Delete\",\"speсification\":\"functional\"}],[{\"key\":\"Caps\",\"code\":\"CapsLock\",\"speсification\":\"functional\"},{\"key\":\"ф\",\"code\":\"KeyA\",\"speсification\":\"letter\"},{\"key\":\"ы\",\"code\":\"KeyS\",\"speсification\":\"letter\"},{\"key\":\"в\",\"code\":\"KeyD\",\"speсification\":\"letter\"},{\"key\":\"а\",\"code\":\"KeyF\",\"speсification\":\"letter\"},{\"key\":\"п\",\"code\":\"KeyG\",\"speсification\":\"letter\"},{\"key\":\"р\",\"code\":\"KeyH\",\"speсification\":\"letter\"},{\"key\":\"о\",\"code\":\"KeyJ\",\"speсification\":\"letter\"},{\"key\":\"л\",\"code\":\"KeyK\",\"speсification\":\"letter\"},{\"key\":\"д\",\"code\":\"KeyL\",\"speсification\":\"letter\"},{\"key\":\"ж\",\"upKey\":\":\",\"code\":\"Semicolon\",\"speсification\":\"letter\"},{\"key\":\"э\",\"code\":\"Quote\",\"speсification\":\"letter\"},{\"key\":\"Enter\",\"code\":\"Enter\",\"speсification\":\"functional\"}],[{\"key\":\"Shift\",\"code\":\"ShiftLeft\",\"speсification\":\"functional\"},{\"key\":\"я\",\"code\":\"KeyZ\",\"speсification\":\"letter\"},{\"key\":\"ч\",\"code\":\"KeyX\",\"speсification\":\"letter\"},{\"key\":\"с\",\"code\":\"KeyC\",\"speсification\":\"letter\"},{\"key\":\"м\",\"code\":\"KeyV\",\"speсification\":\"letter\"},{\"key\":\"и\",\"code\":\"KeyB\",\"speсification\":\"letter\"},{\"key\":\"т\",\"code\":\"KeyN\",\"speсification\":\"letter\"},{\"key\":\"ь\",\"code\":\"KeyM\",\"speсification\":\"letter\"},{\"key\":\"б\",\"code\":\"Comma\",\"speсification\":\"letter\"},{\"key\":\"ю\",\"code\":\"Period\",\"speсification\":\"letter\"},{\"key\":\".\",\"upKey\":\",\",\"code\":\"Slash\"},{\"key\":\"Shift\",\"code\":\"ShiftRight\",\"speсification\":\"functional\"}],[{\"key\":\"Tab\",\"code\":\"Tab\",\"speсification\":\"functional\"},{\"key\":\"RU\",\"code\":\"ChangeLang\",\"speсification\":\"functional\"},{\"key\":\" \",\"upKey\":\" \",\"code\":\"Space\"},{\"key\":\"◄\",\"code\":\"ArrowLeft\",\"speсification\":\"functional\"},{\"key\":\"►\",\"code\":\"ArrowRight\",\"speсification\":\"functional\"}]]");

/***/ }),

/***/ "./src/modules/search/clearForm.js":
/*!*****************************************!*\
  !*** ./src/modules/search/clearForm.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var circleIcon = document.querySelector('.circle-icon');

circleIcon.onclick = function () {
  var searchForm = document.querySelector('.search');
  searchForm.reset();
};

/***/ }),

/***/ "./src/modules/search/search.js":
/*!**************************************!*\
  !*** ./src/modules/search/search.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clearForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearForm */ "./src/modules/search/clearForm.js");
/* harmony import */ var _clearForm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_clearForm__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _API_API_DATA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../API/API_DATA */ "./src/modules/API/API_DATA.js");
/* harmony import */ var _API_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../API/response */ "./src/modules/API/response.js");



var searchForm = document.querySelector('.search');

searchForm.onsubmit = function () {
  var control = document.querySelector('.form-control');
  Object(_API_response__WEBPACK_IMPORTED_MODULE_2__["response"])(control.value, 1);
  return false;
};

var formControl = document.querySelector('.form-control');
formControl.focus();
Object(_API_response__WEBPACK_IMPORTED_MODULE_2__["response"])('Dragon');

/***/ }),

/***/ "./src/modules/search/search.scss":
/*!****************************************!*\
  !*** ./src/modules/search/search.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/modules/search/virtualKeyboard.js":
/*!***********************************************!*\
  !*** ./src/modules/search/virtualKeyboard.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var keyboardIcon = document.querySelector('.keyboard-button');

keyboardIcon.onclick = function () {
  var keyboardContent = document.querySelector('.keyboard-content');
  var keyboardDisplay = keyboardContent.style.display;

  if (keyboardDisplay === 'initial') {
    keyboardDisplay = 'none';
  } else {
    keyboardDisplay = 'initial';
  }

  keyboardContent.style.display = keyboardDisplay;
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0FQSS9BUElfREFUQS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9BUEkvcmVzcG9uc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvTW92aWUvTW92aWVDYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2Nhcm91c2VsL2Nhcm91c2VsLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2Nhcm91c2VsL2Nhcm91c2VsLnNjc3M/NDUzNSIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9mb290ZXIvZm9vdGVyLnNjc3M/ZGY0YiIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9rZXlib2FyZC9rZXlib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9rZXlib2FyZC9rZXlib2FyZC5zY3NzPzQwODIiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvc2VhcmNoL2NsZWFyRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9zZWFyY2gvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3NlYXJjaC9zZWFyY2guc2Nzcz80YmJkIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3NlYXJjaC92aXJ0dWFsS2V5Ym9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLnNjc3M/YmMzYiJdLCJuYW1lcyI6WyJBUElfREFUQSIsIk9NRGJLZXkiLCJ5YW5kZXhLZXkiLCJPTURiVXJsIiwieWFuZGV4VXJsIiwibG9hZGluZ1BhZ2UiLCJzZWFyY2hLZXkiLCJtYXhQYWdlIiwicmVzcG9uc2UiLCJtb3ZpZVRpdGxlIiwicGFnZSIsInJlc3VsdFJlc3BvbnNlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwibG9hZGVyIiwic3R5bGUiLCJkaXNwbGF5IiwiZmV0Y2giLCJ0aGVuIiwiZGF0YSIsInN0YXR1cyIsIkVycm9yIiwianNvbiIsInJlc3AiLCJsYW5nIiwic3Vic3RyaW5nIiwidGV4dCIsIlJlc3BvbnNlIiwiTWF0aCIsImNlaWwiLCJ0b3RhbFJlc3VsdHMiLCJQcm9taXNlIiwiYWxsIiwiU2VhcmNoIiwibWFwIiwibW92aWUiLCJpbWRiSUQiLCJtb3ZpZXMiLCJzbGlkZXMiLCJzbGlkZSIsIk1vdmllQ2FyZCIsIm5vZGUiLCJzd2lwZXIiLCJyZW1vdmVBbGxTbGlkZXMiLCJhcHBlbmRTbGlkZSIsImVycm9yIiwibWVzc2FnZSIsImluaXQiLCJwb3N0ZXIiLCJvbmVycm9yIiwicmVtb3ZlIiwidGl0bGUiLCJhcHBlbmQiLCJsaW5rIiwicmF0aW5nV3JhcHBlciIsInN0YXIiLCJyYXRpbmciLCJ5ZWFyIiwiYWJvdXRGaWxtQnV0dG9uIiwiaW5pdE5vZGUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5pdFBvc3RlciIsInNyYyIsIlBvc3RlciIsImFsdCIsImluaXRZZWFyIiwiWWVhciIsImluaXRSYXRpbmdXcmFwcGVyIiwiaW5pdExpbmsiLCJocmVmIiwidGFyZ2V0IiwiVGl0bGUiLCJpbml0VGl0bGUiLCJpbml0U3RhciIsImluaXRBYm91dEZpbG0iLCJpbml0UmF0aW5nIiwiaW1kYlJhdGluZyIsIlN3aXBlciIsImxvb3BlZFNsaWRlcyIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJzbGlkZXNQZXJHcm91cCIsInNpbXVsYXRlVG91Y2giLCJsb29wIiwicHJlbG9hZEltYWdlcyIsImxvb3BGaWxsR3JvdXBXaXRoQmxhbmsiLCJwYWdpbmF0aW9uIiwiZWwiLCJjbGlja2FibGUiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiYnJlYWtwb2ludHMiLCJvbiIsInJlYWNoRW5kIiwic2xpZGVyV3JhcHBlciIsImNoaWxkcmVuIiwibGVuZ3RoIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImJvZHkiLCJmdW5jdGlvbmFsIiwibGV0dGVyIiwidXBwZXJDYXNlIiwic2hpZnRPbiIsImN1cnNvckluZGV4IiwiY29udGVudCIsInRleHRhcmVhIiwia2V5Ym9hcmQiLCJhZGRFdmVudExpc3RlbmVyIiwic2VsZWN0aW9uRW5kIiwiZW5LZXlib2FyZCIsInJvdyIsInJvd05vZGUiLCJmb3JFYWNoIiwia2V5T2JqIiwia2V5Tm9kZSIsImlkIiwiY29kZSIsImVuQm9hcmQiLCJrZXkiLCJzcGXRgWlmaWNhdGlvbiIsInJ1S2V5Ym9hcmQiLCJnZXRFbGVtZW50QnlJZCIsInJ1Qm9hcmQiLCJhbGxLZXlzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImxhbmdCb2FyZCIsImNoYW5nZUxldHRlckNhc2UiLCJ0b0xvd2VyQ2FzZSIsInRvVXBwZXJDYXNlIiwiY2hhbmdlQ2FzZSIsImNoYW5nZUxldHRlclNoaWZ0IiwidXBLZXkiLCJjaGFuZ2VTaGlmdCIsImNoYW5nZUxldHRlckxhbmd1YWdlIiwiY2hhbmdlTGFuZ3VhZ2UiLCJzZXRJdGVtIiwiaW5zZXJ0Q2hhciIsInNpbWJvbCIsImFyciIsInZhbHVlIiwic3BsaXQiLCJzcGxpY2UiLCJqb2luIiwiZm9jdXMiLCJldmVudCIsImNvbnRhaW5zIiwiY2hhbmdlTGFuZ0tleSIsImNhcHNsb2NrS2V5IiwiY2Fwc2xvY2tBY3RpdmUiLCJ0YWJLZXkiLCJiYWNrc3BhY2VLZXkiLCJlbnRlcktleSIsImNsaWNrIiwic2hpZnRMZWZ0S2V5Iiwic2hpZnRSaWdodEtleSIsImRlbGV0ZUtleSIsImFycm93TGVmdEtleSIsInNlbGVjdGlvblN0YXJ0IiwiYXJyb3dSaWdodEtleSIsImNpcmNsZUljb24iLCJvbmNsaWNrIiwic2VhcmNoRm9ybSIsInJlc2V0Iiwib25zdWJtaXQiLCJjb250cm9sIiwiZm9ybUNvbnRyb2wiLCJrZXlib2FyZEljb24iLCJrZXlib2FyZENvbnRlbnQiLCJrZXlib2FyZERpc3BsYXkiXSwibWFwcGluZ3Mi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LGFBQVQsQ0FBdUIsZUFBdkIsQ0FBcEI7QUFDQStKLFdBQVcsQ0FBQ3RCLEtBQVo7QUFDQTlJLDhEQUFRLENBQUMsUUFBRCxDQUFSLEM7Ozs7Ozs7Ozs7O0FDYkEsdUM7Ozs7Ozs7Ozs7O0FDQUEsSUFBTXFLLFlBQVksR0FBR2pLLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixrQkFBdkIsQ0FBckI7O0FBQ0FnSyxZQUFZLENBQUNOLE9BQWIsR0FBdUIsWUFBTTtBQUMzQixNQUFNTyxlQUFlLEdBQUdsSyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsbUJBQXZCLENBQXhCO0FBQ0EsTUFBSWtLLGVBQWUsR0FBR0QsZUFBZSxDQUFDOUosS0FBaEIsQ0FBc0JDLE9BQTVDOztBQUNBLE1BQUk4SixlQUFlLEtBQUssU0FBeEIsRUFBbUM7QUFDakNBLG1CQUFlLEdBQUcsTUFBbEI7QUFDRCxHQUZELE1BRU87QUFBRUEsbUJBQWUsR0FBRyxTQUFsQjtBQUE4Qjs7QUFDdkNELGlCQUFlLENBQUM5SixLQUFoQixDQUFzQkMsT0FBdEIsR0FBZ0M4SixlQUFoQztBQUNELENBUEQsQzs7Ozs7Ozs7Ozs7QUNEQSx1QyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9tb2R1bGVzL2Nhcm91c2VsL2Nhcm91c2VsJztcbmltcG9ydCAnLi9tb2R1bGVzL2Nhcm91c2VsL2Nhcm91c2VsLnNjc3MnO1xuaW1wb3J0ICcuL21vZHVsZXMvc2VhcmNoL3NlYXJjaCc7XG5pbXBvcnQgJy4vbW9kdWxlcy9zZWFyY2gvc2VhcmNoLnNjc3MnO1xuaW1wb3J0ICcuL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci5zY3NzJztcbmltcG9ydCAnLi9tb2R1bGVzL0FQSS9yZXNwb25zZSc7XG5pbXBvcnQgJy4vbW9kdWxlcy9rZXlib2FyZC9lbktleWJvYXJkLmpzb24nO1xuaW1wb3J0ICcuL21vZHVsZXMva2V5Ym9hcmQva2V5Ym9hcmQnO1xuaW1wb3J0ICcuL21vZHVsZXMva2V5Ym9hcmQvcnVLZXlib2FyZC5qc29uJztcbmltcG9ydCAnLi9tb2R1bGVzL2tleWJvYXJkL2tleWJvYXJkLnNjc3MnO1xuaW1wb3J0ICcuL21vZHVsZXMvc2VhcmNoL3ZpcnR1YWxLZXlib2FyZCc7XG4iLCJjb25zdCBBUElfREFUQSA9IHtcclxuICBPTURiS2V5OiAnNzBhODU2NjAnLFxyXG4gIHlhbmRleEtleTpcclxuICAgICd0cm5zbC4xLjEuMjAyMDA1MTBUMTAyMzA1Wi4wYjM0N2Y1Zjg3NzQzYjYzLjQ5MTY5ZTdiMDdlNDFmMDA3YmJmNDk4MWM0MjdhMmZkZTkxN2RjNDgnLFxyXG4gIE9NRGJVcmw6ICdodHRwczovL3d3dy5vbWRiYXBpLmNvbS8nLFxyXG4gIHlhbmRleFVybDogJ2h0dHBzOi8vdHJhbnNsYXRlLnlhbmRleC5uZXQvYXBpL3YxLjUvdHIuanNvbi90cmFuc2xhdGUnLFxyXG4gIGxvYWRpbmdQYWdlOiAxLFxyXG4gIHNlYXJjaEtleTogJycsXHJcbiAgbWF4UGFnZTogMixcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQVBJX0RBVEE7XHJcbiIsImltcG9ydCB7IE1vdmllQ2FyZCB9IGZyb20gJy4uL01vdmllL01vdmllQ2FyZCc7XHJcbmltcG9ydCB7IHN3aXBlciB9IGZyb20gJy4uL2Nhcm91c2VsL2Nhcm91c2VsJztcclxuaW1wb3J0IEFQSV9EQVRBIGZyb20gJy4vQVBJX0RBVEEnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc3BvbnNlKG1vdmllVGl0bGUsIHBhZ2UgPSAxKSB7XHJcbiAgY29uc3QgcmVzdWx0UmVzcG9uc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0LXJlc3BvbnNlJyk7XHJcbiAgcmVzdWx0UmVzcG9uc2UuaW5uZXJIVE1MID0gJyc7XHJcbiAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpO1xyXG4gIGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gJ2luaXRpYWwnO1xyXG4gIGZldGNoKFxyXG4gICAgYCR7QVBJX0RBVEEueWFuZGV4VXJsfT9rZXk9JHtBUElfREFUQS55YW5kZXhLZXl9JnRleHQ9JHttb3ZpZVRpdGxlfSZsYW5nPWVuYCxcclxuICApXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBpZiAoZGF0YS5zdGF0dXMgPj0gNDAwICYmIGRhdGEuc3RhdHVzIDwgNjAwKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciAke2RhdGEuc3RhdHVzfWApO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBkYXRhLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzcCkgPT4ge1xyXG4gICAgICBpZiAocmVzcC5sYW5nLnN1YnN0cmluZygwLCAyKSAhPT0gJ2VuJykge1xyXG4gICAgICAgIHJlc3VsdFJlc3BvbnNlLmlubmVySFRNTCA9IGBTaG93aW5nIHJlc3VsdHMgZm9yICcke3Jlc3AudGV4dFswXX0nYDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmV0Y2goXHJcbiAgICAgICAgYCR7QVBJX0RBVEEuT01EYlVybH0/YXBpa2V5PSR7QVBJX0RBVEEuT01EYktleX0mcz0ke3Jlc3AudGV4dFswXX0mcGFnZT0ke3BhZ2V9YCxcclxuICAgICAgKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBpZiAoZGF0YS5zdGF0dXMgPj0gNDAwICYmIGRhdGEuc3RhdHVzIDwgNjAwKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciAke2RhdGEuc3RhdHVzfWApO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBkYXRhLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzcCkgPT4ge1xyXG4gICAgICBpZiAocmVzcC5SZXNwb25zZSA9PT0gJ1RydWUnKSB7XHJcbiAgICAgICAgQVBJX0RBVEEuc2VhcmNoS2V5ID0gbW92aWVUaXRsZTtcclxuICAgICAgICBBUElfREFUQS5tYXhQYWdlID0gTWF0aC5jZWlsKHJlc3AudG90YWxSZXN1bHRzIC8gMTApO1xyXG4gICAgICAgIEFQSV9EQVRBLmxvYWRpbmdQYWdlID0gcGFnZTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgICByZXNwLlNlYXJjaC5tYXAoKG1vdmllKSA9PiBmZXRjaChcclxuICAgICAgICAgICAgYCR7QVBJX0RBVEEuT01EYlVybH0/aT0ke21vdmllLmltZGJJRH0mYXBpa2V5PSR7QVBJX0RBVEEuT01EYktleX1gLFxyXG4gICAgICAgICAgKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnN0YXR1cyA+PSA0MDAgJiYgZGF0YS5zdGF0dXMgPCA2MDApIHtcclxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yICR7ZGF0YS5zdGF0dXN9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGRhdGEuanNvbigpO1xyXG4gICAgICAgICAgfSkpLFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyByZXN1bHRzIGZvciAnJHttb3ZpZVRpdGxlfSdgKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigobW92aWVzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNsaWRlcyA9IG1vdmllcy5tYXAoKG1vdmllKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2xpZGUgPSBuZXcgTW92aWVDYXJkKG1vdmllKTtcclxuICAgICAgICByZXR1cm4gc2xpZGUubm9kZTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChwYWdlID09PSAxKSB7XHJcbiAgICAgICAgc3dpcGVyLnJlbW92ZUFsbFNsaWRlcygpO1xyXG4gICAgICB9XHJcbiAgICAgIHN3aXBlci5hcHBlbmRTbGlkZShzbGlkZXMpO1xyXG5cclxuICAgICAgbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICByZXN1bHRSZXNwb25zZS5pbm5lckhUTUwgPSBgJHtlcnJvci5tZXNzYWdlfWA7XHJcbiAgICAgIGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIE1vdmllQ2FyZCB7XHJcbiAgY29uc3RydWN0b3IobW92aWUpIHtcclxuICAgIHRoaXMuaW5pdChtb3ZpZSk7XHJcbiAgICB0aGlzLnBvc3Rlci5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnBvc3Rlci5yZW1vdmUoKTtcclxuICAgIH07XHJcbiAgICB0aGlzLnRpdGxlLmFwcGVuZCh0aGlzLmxpbmspO1xyXG4gICAgdGhpcy5yYXRpbmdXcmFwcGVyLmFwcGVuZCh0aGlzLnN0YXIsIHRoaXMucmF0aW5nKTtcclxuICAgIHRoaXMubm9kZS5hcHBlbmQoXHJcbiAgICAgIHRoaXMudGl0bGUsXHJcbiAgICAgIHRoaXMucG9zdGVyLFxyXG4gICAgICB0aGlzLnllYXIsXHJcbiAgICAgIHRoaXMucmF0aW5nV3JhcHBlcixcclxuICAgICAgdGhpcy5hYm91dEZpbG1CdXR0b24sXHJcbiAgICApO1xyXG4gIH1cblxyXG4gIGluaXROb2RlKCkge1xyXG4gICAgdGhpcy5ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZCgnc3dpcGVyLXNsaWRlJyk7XHJcbiAgfVxuXHJcbiAgaW5pdFBvc3Rlcihtb3ZpZSkge1xyXG4gICAgdGhpcy5wb3N0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIHRoaXMucG9zdGVyLnNyYyA9IG1vdmllLlBvc3RlciA/IG1vdmllLlBvc3RlciA6ICdub3QgZm91bmQnO1xyXG4gICAgdGhpcy5wb3N0ZXIuYWx0ID0gJ3Bvc3Rlcic7XHJcbiAgfVxuXHJcbiAgaW5pdFllYXIobW92aWUpIHtcclxuICAgIHRoaXMueWVhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy55ZWFyLmNsYXNzTGlzdC5hZGQoJ2ZvbnQtd2VpZ2h0LWJvbGQnLCAnc21hbGwnKTtcclxuICAgIHRoaXMueWVhci5pbm5lckhUTUwgPSBtb3ZpZS5ZZWFyO1xyXG4gIH1cblxyXG4gIGluaXRSYXRpbmdXcmFwcGVyKCkge1xyXG4gICAgdGhpcy5yYXRpbmdXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aGlzLnJhdGluZ1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgncmF0aW5nLWZpbG0nKTtcclxuICB9XG5cclxuICBpbml0TGluayhtb3ZpZSkge1xyXG4gICAgdGhpcy5saW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgdGhpcy5saW5rLmhyZWYgPSBgaHR0cHM6Ly93d3cuaW1kYi5jb20vdGl0bGUvJHttb3ZpZS5pbWRiSUR9L3ZpZGVvZ2FsbGVyeS9gO1xyXG4gICAgdGhpcy5saW5rLnRhcmdldCA9ICdfYmxhbmsnO1xyXG4gICAgdGhpcy5saW5rLmlubmVySFRNTCA9IG1vdmllLlRpdGxlID8gbW92aWUuVGl0bGUgOiAnbm90IGZvdW5kJztcclxuICB9XG5cclxuICBpbml0VGl0bGUoKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIHRoaXMudGl0bGUuY2xhc3NMaXN0LmFkZCgnc2xpZGUtdGl0bGUnLCAnZm9udC13ZWlnaHQtYm9sZCcpO1xyXG4gIH1cblxyXG4gIGluaXRTdGFyKCkge1xyXG4gICAgdGhpcy5zdGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICB0aGlzLnN0YXIuc3JjID0gJy4vc3JjL2ltZy9zdGFyLmpwZyc7XHJcbiAgICB0aGlzLnN0YXIuYWx0ID0gJ3N0YXInO1xyXG4gICAgdGhpcy5zdGFyLmNsYXNzTGlzdC5hZGQoJ3JhdGluZy1maWxtLXN0YXInKTtcclxuICB9XG5cclxuICBpbml0QWJvdXRGaWxtKG1vdmllKSB7XHJcbiAgICB0aGlzLmFib3V0RmlsbUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIHRoaXMuYWJvdXRGaWxtQnV0dG9uLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAgICdidG4nLFxyXG4gICAgICAnYnRuLW91dGxpbmUtaW5mbycsXHJcbiAgICAgICdhYm91dC1maWxtLWJ0bicsXHJcbiAgICApO1xyXG4gICAgdGhpcy5hYm91dEZpbG1CdXR0b24uaW5uZXJIVE1MID0gJ2Fib3V0IGZpbG0nO1xyXG4gICAgdGhpcy5hYm91dEZpbG1CdXR0b24uaHJlZiA9IGBodHRwczovL3d3dy5pbWRiLmNvbS90aXRsZS8ke21vdmllLmltZGJJRH0vYDtcclxuICAgIHRoaXMuYWJvdXRGaWxtQnV0dG9uLnRhcmdldCA9ICdfYmxhbmsnO1xyXG4gIH1cblxyXG4gIGluaXRSYXRpbmcobW92aWUpIHtcclxuICAgIHRoaXMucmF0aW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgdGhpcy5yYXRpbmcuaW5uZXJIVE1MID0gbW92aWUuaW1kYlJhdGluZztcclxuICAgIHRoaXMucmF0aW5nLmNsYXNzTGlzdC5hZGQoJ2ZvbnQtd2VpZ2h0LWJvbGQnLCAnc21hbGwnKTtcclxuICB9XG5cclxuICBpbml0KG1vdmllKSB7XHJcbiAgICB0aGlzLmluaXROb2RlKCk7XHJcbiAgICB0aGlzLmluaXRUaXRsZSgpO1xyXG4gICAgdGhpcy5pbml0TGluayhtb3ZpZSk7XHJcbiAgICB0aGlzLmluaXRQb3N0ZXIobW92aWUpO1xyXG4gICAgdGhpcy5pbml0WWVhcihtb3ZpZSk7XHJcbiAgICB0aGlzLmluaXRSYXRpbmdXcmFwcGVyKCk7XHJcbiAgICB0aGlzLmluaXRSYXRpbmcobW92aWUpO1xyXG4gICAgdGhpcy5pbml0U3RhcigpO1xyXG4gICAgdGhpcy5pbml0QWJvdXRGaWxtKG1vdmllKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgcmVzcG9uc2UgfSBmcm9tICcuLi9BUEkvcmVzcG9uc2UnO1xyXG5pbXBvcnQgQVBJX0RBVEEgZnJvbSAnLi4vQVBJL0FQSV9EQVRBJztcclxuXHJcbmV4cG9ydCBjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICBsb29wZWRTbGlkZXM6IDAsXHJcbiAgc2xpZGVzUGVyVmlldzogNCxcclxuICBzcGFjZUJldHdlZW46IDUwLFxyXG4gIHNsaWRlc1Blckdyb3VwOiAxLFxyXG4gIHNpbXVsYXRlVG91Y2g6IHRydWUsXHJcbiAgbG9vcDogZmFsc2UsXHJcbiAgcHJlbG9hZEltYWdlczogdHJ1ZSxcclxuICBsb29wRmlsbEdyb3VwV2l0aEJsYW5rOiB0cnVlLFxyXG4gIHBhZ2luYXRpb246IHtcclxuICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICB9LFxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgfSxcclxuICBicmVha3BvaW50czoge1xyXG4gICAgMzIwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICB9LFxyXG4gICAgNDgwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICB9LFxyXG4gICAgNjQwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogNDAsXHJcbiAgICB9LFxyXG4gICAgODAwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogNDAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgb246IHtcclxuICAgIHJlYWNoRW5kOiAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNsaWRlcldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLXdyYXBwZXInKTtcclxuICAgICAgbGV0IHBhZ2UgPSBBUElfREFUQS5sb2FkaW5nUGFnZTtcclxuICAgICAgcGFnZSArPSAxO1xyXG4gICAgICBpZiAoc2xpZGVyV3JhcHBlci5jaGlsZHJlbi5sZW5ndGggPT09IDAgfHwgcGFnZSA+PSBBUElfREFUQS5tYXhQYWdlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHJlc3BvbnNlKEFQSV9EQVRBLnNlYXJjaEtleSwgcGFnZSk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgKiBhcyBlbktleWJvYXJkIGZyb20gJy4vZW5LZXlib2FyZC5qc29uJztcclxuaW1wb3J0ICogYXMgcnVLZXlib2FyZCBmcm9tICcuL3J1S2V5Ym9hcmQuanNvbic7XHJcblxyXG5sZXQgbGFuZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyTGFuZ3VhZ2UnKSB8fCAnZW4nO1xyXG5cclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuY29uc3QgZnVuY3Rpb25hbCA9ICdmdW5jdGlvbmFsJztcclxuY29uc3QgbGV0dGVyID0gJ2xldHRlcic7XHJcblxyXG5sZXQgdXBwZXJDYXNlID0gZmFsc2U7XHJcbmxldCBzaGlmdE9uID0gZmFsc2U7XHJcbmxldCBjdXJzb3JJbmRleCA9IDA7XHJcblxyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnRlbnQuY2xhc3NMaXN0LmFkZCgna2V5Ym9hcmQtY29udGVudCcpO1xyXG5ib2R5LmFwcGVuZChjb250ZW50KTtcclxuXHJcbmNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udHJvbCcpO1xyXG5jb25zdCBrZXlib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5rZXlib2FyZC5jbGFzc0xpc3QuYWRkKCdrZXlib2FyZCcpO1xyXG5jb250ZW50LmFwcGVuZChrZXlib2FyZCk7XHJcblxyXG50ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBjdXJzb3JJbmRleCA9IHRleHRhcmVhLnNlbGVjdGlvbkVuZDtcclxufSk7XHJcblxyXG5lbktleWJvYXJkLmZvckVhY2goKHJvdykgPT4ge1xyXG4gIGNvbnN0IHJvd05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICByb3dOb2RlLmNsYXNzTGlzdC5hZGQoJ2tleWJvYXJkX19yb3cnKTtcclxuICBrZXlib2FyZC5hcHBlbmQocm93Tm9kZSk7XHJcbiAgcm93LmZvckVhY2goKGtleU9iaikgPT4ge1xyXG4gICAgY29uc3Qga2V5Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAga2V5Tm9kZS5jbGFzc0xpc3QuYWRkKCdrZXlib2FyZF9fa2V5Jyk7XHJcbiAgICBrZXlOb2RlLmlkID0ga2V5T2JqLmNvZGU7XHJcbiAgICByb3dOb2RlLmFwcGVuZChrZXlOb2RlKTtcclxuICAgIGtleU5vZGUuZW5Cb2FyZCA9IGtleU9iajtcclxuICAgIGtleU5vZGUuaW5uZXJIVE1MID0ga2V5Tm9kZS5lbkJvYXJkLmtleTtcclxuICAgIGlmIChrZXlOb2RlLmVuQm9hcmQuc3Bl0YFpZmljYXRpb24gPT09IGZ1bmN0aW9uYWwpIHtcclxuICAgICAga2V5Tm9kZS5jbGFzc0xpc3QuYWRkKGZ1bmN0aW9uYWwpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbnJ1S2V5Ym9hcmQuZm9yRWFjaCgocm93KSA9PiB7XHJcbiAgcm93LmZvckVhY2goKGtleU9iaikgPT4ge1xyXG4gICAgY29uc3Qga2V5Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGtleU9iai5jb2RlKTtcclxuICAgIGtleU5vZGUucnVCb2FyZCA9IGtleU9iajtcclxuICB9KTtcclxufSk7XHJcbmNvbnN0IGFsbEtleXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZXlib2FyZF9fa2V5JykpO1xyXG5sZXQgbGFuZ0JvYXJkO1xyXG5mdW5jdGlvbiBjaGFuZ2VMZXR0ZXJDYXNlKCkge1xyXG4gIGFsbEtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICBpZiAobGFuZyA9PT0gJ2VuJykge1xyXG4gICAgICBsYW5nQm9hcmQgPSBrZXkuZW5Cb2FyZDtcclxuICAgIH1cclxuICAgIGlmIChsYW5nID09PSAncnUnKSB7XHJcbiAgICAgIGxhbmdCb2FyZCA9IGtleS5ydUJvYXJkO1xyXG4gICAgfVxyXG4gICAgaWYgKGxhbmdCb2FyZC5zcGXRgWlmaWNhdGlvbiA9PT0gbGV0dGVyKSB7XHJcbiAgICAgIGlmICh1cHBlckNhc2UpIHtcclxuICAgICAgICBrZXkuaW5uZXJIVE1MID0ga2V5LmlubmVySFRNTC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGtleS5pbm5lckhUTUwgPSBrZXkuaW5uZXJIVE1MLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiBjaGFuZ2VDYXNlKCkge1xyXG4gIGNoYW5nZUxldHRlckNhc2UoKTtcclxuXHJcbiAgdXBwZXJDYXNlID0gIXVwcGVyQ2FzZTtcclxufVxyXG5mdW5jdGlvbiBjaGFuZ2VMZXR0ZXJTaGlmdCgpIHtcclxuICBhbGxLZXlzLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgaWYgKGxhbmcgPT09ICdlbicpIHtcclxuICAgICAgbGFuZ0JvYXJkID0ga2V5LmVuQm9hcmQ7XHJcbiAgICB9XHJcbiAgICBpZiAobGFuZyA9PT0gJ3J1Jykge1xyXG4gICAgICBsYW5nQm9hcmQgPSBrZXkucnVCb2FyZDtcclxuICAgIH1cclxuICAgIGlmICghbGFuZ0JvYXJkLnNwZdGBaWZpY2F0aW9uKSB7XHJcbiAgICAgIGlmIChzaGlmdE9uKSB7XHJcbiAgICAgICAga2V5LmlubmVySFRNTCA9IGxhbmdCb2FyZC5rZXk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAga2V5LmlubmVySFRNTCA9IGxhbmdCb2FyZC51cEtleTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGNoYW5nZVNoaWZ0KCkge1xyXG4gIGNoYW5nZUNhc2UoKTtcclxuICBjaGFuZ2VMZXR0ZXJTaGlmdCgpO1xyXG5cclxuICBzaGlmdE9uID0gIXNoaWZ0T247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUxldHRlckxhbmd1YWdlKCkge1xyXG4gIGlmIChsYW5nID09PSAnZW4nKSB7XHJcbiAgICBsYW5nID0gJ3J1JztcclxuICB9IGVsc2Uge1xyXG4gICAgbGFuZyA9ICdlbic7XHJcbiAgfVxyXG5cclxuICBhbGxLZXlzLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgaWYgKGxhbmcgPT09ICdlbicpIHtcclxuICAgICAgbGFuZ0JvYXJkID0ga2V5LmVuQm9hcmQ7XHJcbiAgICB9XHJcbiAgICBpZiAobGFuZyA9PT0gJ3J1Jykge1xyXG4gICAgICBsYW5nQm9hcmQgPSBrZXkucnVCb2FyZDtcclxuICAgIH1cclxuICAgIGtleS5pbm5lckhUTUwgPSBsYW5nQm9hcmQua2V5O1xyXG4gICAgaWYgKHVwcGVyQ2FzZSkge1xyXG4gICAgICB1cHBlckNhc2UgPSBmYWxzZTtcclxuICAgICAgY2hhbmdlQ2FzZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHNoaWZ0T24pIHtcclxuICAgICAgc2hpZnRPbiA9IGZhbHNlO1xyXG4gICAgICBjaGFuZ2VTaGlmdCgpO1xyXG4gICAgICBjaGFuZ2VDYXNlKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuZnVuY3Rpb24gY2hhbmdlTGFuZ3VhZ2UoKSB7XHJcbiAgY2hhbmdlTGV0dGVyTGFuZ3VhZ2UoKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlckxhbmd1YWdlJywgbGFuZyk7XHJcbn1cclxuXHJcbmlmIChsYW5nID09PSAncnUnKSB7XHJcbiAgbGFuZyA9ICdlbic7XHJcbiAgY2hhbmdlTGFuZ3VhZ2UoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0Q2hhcihzaW1ib2wpIHtcclxuICBjb25zdCBhcnIgPSB0ZXh0YXJlYS52YWx1ZS5zcGxpdCgnJyk7XHJcbiAgYXJyLnNwbGljZShjdXJzb3JJbmRleCwgMCwgc2ltYm9sKTtcclxuICB0ZXh0YXJlYS52YWx1ZSA9IGFyci5qb2luKCcnKTtcclxuICBjdXJzb3JJbmRleCArPSAxO1xyXG4gIHRleHRhcmVhLmZvY3VzKCk7XHJcbiAgdGV4dGFyZWEuc2VsZWN0aW9uRW5kID0gY3Vyc29ySW5kZXg7XHJcbn1cclxuXHJcbmtleWJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudCkgPT4ge1xyXG4gIGlmICghZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygna2V5Ym9hcmRfX2tleScpKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmIChldmVudC50YXJnZXQuaWQgPT09ICdDYXBzTG9jaycpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gIGlmIChldmVudC50YXJnZXQuZW5Cb2FyZC5zcGXRgWlmaWNhdGlvbiA9PT0gZnVuY3Rpb25hbCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpbnNlcnRDaGFyKGV2ZW50LnRhcmdldC5pbm5lckhUTUxbMF0pO1xyXG59KTtcclxuXHJcbmtleWJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZXZlbnQpID0+IHtcclxuICBpZiAoIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2tleWJvYXJkX19rZXknKSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSAnQ2Fwc0xvY2snKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICBpZiAoZXZlbnQudGFyZ2V0LmVuQm9hcmQuc3Bl0YFpZmljYXRpb24gPT09IGZ1bmN0aW9uYWwpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgdGV4dGFyZWEuZm9jdXMoKTtcclxuICB0ZXh0YXJlYS5zZWxlY3Rpb25FbmQgPSBjdXJzb3JJbmRleDtcclxufSk7XHJcblxyXG5jb25zdCBjaGFuZ2VMYW5nS2V5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0NoYW5nZUxhbmcnKTtcclxuY2hhbmdlTGFuZ0tleS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZUxhbmd1YWdlKTtcclxuXHJcbmNvbnN0IGNhcHNsb2NrS2V5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0NhcHNMb2NrJyk7XHJcbmZ1bmN0aW9uIGNhcHNsb2NrQWN0aXZlKCkge1xyXG4gIGlmIChjYXBzbG9ja0tleS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICBjYXBzbG9ja0tleS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY2Fwc2xvY2tLZXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgfVxyXG59XHJcbmNhcHNsb2NrS2V5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGNhcHNsb2NrQWN0aXZlKCk7XHJcbiAgY2hhbmdlQ2FzZSgpO1xyXG59KTtcclxuXHJcbmNvbnN0IHRhYktleSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdUYWInKTtcclxudGFiS2V5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGluc2VydENoYXIoJ1xcdCcpO1xyXG59KTtcclxuXHJcbmNvbnN0IGJhY2tzcGFjZUtleSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdCYWNrc3BhY2UnKTtcclxuYmFja3NwYWNlS2V5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGNvbnN0IGFyciA9IHRleHRhcmVhLnZhbHVlLnNwbGl0KCcnKTtcclxuICBhcnIuc3BsaWNlKGN1cnNvckluZGV4IC0gMSwgMSk7XHJcbiAgdGV4dGFyZWEudmFsdWUgPSBhcnIuam9pbignJyk7XHJcbiAgY3Vyc29ySW5kZXggPSBjdXJzb3JJbmRleCA8PSAwID8gMCA6IGN1cnNvckluZGV4IC0gMTtcclxuICB0ZXh0YXJlYS5mb2N1cygpO1xyXG4gIHRleHRhcmVhLnNlbGVjdGlvbkVuZCA9IGN1cnNvckluZGV4O1xyXG59KTtcclxuXHJcbmNvbnN0IGVudGVyS2V5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0VudGVyJyk7XHJcbmVudGVyS2V5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKS5jbGljaygpO1xyXG59KTtcclxuXHJcbmNvbnN0IHNoaWZ0TGVmdEtleSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdTaGlmdExlZnQnKTtcclxuc2hpZnRMZWZ0S2V5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlU2hpZnQpO1xyXG5jb25zdCBzaGlmdFJpZ2h0S2V5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1NoaWZ0UmlnaHQnKTtcclxuc2hpZnRSaWdodEtleS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZVNoaWZ0KTtcclxuXHJcbmNvbnN0IGRlbGV0ZUtleSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdEZWxldGUnKTtcclxuZGVsZXRlS2V5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGNvbnN0IGFyciA9IHRleHRhcmVhLnZhbHVlLnNwbGl0KCcnKTtcclxuICBhcnIuc3BsaWNlKGN1cnNvckluZGV4LCAxKTtcclxuICB0ZXh0YXJlYS52YWx1ZSA9IGFyci5qb2luKCcnKTtcclxuICB0ZXh0YXJlYS5mb2N1cygpO1xyXG4gIHRleHRhcmVhLnNlbGVjdGlvbkVuZCA9IGN1cnNvckluZGV4O1xyXG59KTtcclxuXHJcbmNvbnN0IGFycm93TGVmdEtleSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBcnJvd0xlZnQnKTtcclxuYXJyb3dMZWZ0S2V5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGN1cnNvckluZGV4IC09IDE7XHJcbiAgdGV4dGFyZWEuZm9jdXMoKTtcclxuICB0ZXh0YXJlYS5zZWxlY3Rpb25FbmQgPSBjdXJzb3JJbmRleDtcclxuICB0ZXh0YXJlYS5zZWxlY3Rpb25TdGFydCA9IGN1cnNvckluZGV4O1xyXG59KTtcclxuXHJcbmNvbnN0IGFycm93UmlnaHRLZXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQXJyb3dSaWdodCcpO1xyXG5hcnJvd1JpZ2h0S2V5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGN1cnNvckluZGV4ICs9IDE7XHJcbiAgdGV4dGFyZWEuZm9jdXMoKTtcclxuICB0ZXh0YXJlYS5zZWxlY3Rpb25FbmQgPSBjdXJzb3JJbmRleDtcclxuICB0ZXh0YXJlYS5zZWxlY3Rpb25TdGFydCA9IGN1cnNvckluZGV4O1xyXG59KTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiY29uc3QgY2lyY2xlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXJjbGUtaWNvbicpO1xyXG5jaXJjbGVJY29uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gnKTtcclxuICBzZWFyY2hGb3JtLnJlc2V0KCk7XHJcbn07XHJcbiIsImltcG9ydCAnLi9jbGVhckZvcm0nO1xyXG5pbXBvcnQgJy4uL0FQSS9BUElfREFUQSc7XHJcbmltcG9ydCB7IHJlc3BvbnNlIH0gZnJvbSAnLi4vQVBJL3Jlc3BvbnNlJztcclxuXHJcbmNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoJyk7XHJcbnNlYXJjaEZvcm0ub25zdWJtaXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udHJvbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRyb2wnKTtcclxuICByZXNwb25zZShjb250cm9sLnZhbHVlLCAxKTtcclxuICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5jb25zdCBmb3JtQ29udHJvbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRyb2wnKTtcclxuZm9ybUNvbnRyb2wuZm9jdXMoKTtcclxucmVzcG9uc2UoJ0RyYWdvbicpO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJjb25zdCBrZXlib2FyZEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmQtYnV0dG9uJyk7XHJcbmtleWJvYXJkSWNvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gIGNvbnN0IGtleWJvYXJkQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rZXlib2FyZC1jb250ZW50Jyk7XHJcbiAgbGV0IGtleWJvYXJkRGlzcGxheSA9IGtleWJvYXJkQ29udGVudC5zdHlsZS5kaXNwbGF5O1xyXG4gIGlmIChrZXlib2FyZERpc3BsYXkgPT09ICdpbml0aWFsJykge1xyXG4gICAga2V5Ym9hcmREaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH0gZWxzZSB7IGtleWJvYXJkRGlzcGxheSA9ICdpbml0aWFsJzsgfVxyXG4gIGtleWJvYXJkQ29udGVudC5zdHlsZS5kaXNwbGF5ID0ga2V5Ym9hcmREaXNwbGF5O1xyXG59O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9