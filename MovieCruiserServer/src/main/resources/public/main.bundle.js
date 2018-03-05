webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tv_show_tv_show_component__ = __webpack_require__("./src/app/tv-show/tv-show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__discover_tv_discover_tv_component__ = __webpack_require__("./src/app/discover-tv/discover-tv.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__discover_movies_discover_movies_component__ = __webpack_require__("./src/app/discover-movies/discover-movies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__watchlist_watchlist_component__ = __webpack_require__("./src/app/watchlist/watchlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__movie_movie_component__ = __webpack_require__("./src/app/movie/movie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_results_search_results_component__ = __webpack_require__("./src/app/search-results/search-results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'search-results', component: __WEBPACK_IMPORTED_MODULE_7__search_results_search_results_component__["a" /* SearchResultsComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_6__search_search_component__["a" /* SearchComponent */] },
    { path: 'movie/:id', component: __WEBPACK_IMPORTED_MODULE_5__movie_movie_component__["a" /* MovieComponent */] },
    { path: 'tv/:id', component: __WEBPACK_IMPORTED_MODULE_0__tv_show_tv_show_component__["a" /* TvShowComponent */] },
    { path: 'watchlist', component: __WEBPACK_IMPORTED_MODULE_4__watchlist_watchlist_component__["a" /* WatchlistComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'discover-movies', component: __WEBPACK_IMPORTED_MODULE_2__discover_movies_discover_movies_component__["a" /* DiscoverMoviesComponent */] },
    { path: 'discover-tv', component: __WEBPACK_IMPORTED_MODULE_1__discover_tv_discover_tv_component__["a" /* DiscoverTvComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  margin-bottom: 30px;\n}\n\nfooter,\nfooter .container {\n  background-color: #232323;\n  color: white;\n  font-size: 12px;\n  padding: 20px 0px;\n}\n\nfooter a:hover {\n\n  text-decoration: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark \">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\">{{ title }}</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/home']\" [routerLinkActive]=\"['active']\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/watchlist']\" [routerLinkActive]=\"['active']\">Your Watchlist</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/discover-movies']\" [routerLinkActive]=\"['active']\">Discover Movies</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/discover-tv']\" [routerLinkActive]=\"['active']\">Discover TV</a>\n        </li>\n      </ul>\n      <form class=\"form-inline my-2 my-lg-0\">\n        <input name=\"Searchbox\" [(ngModel)]=\"searchQuery\" #searchBox id=\"search-box\" class=\"form-control\" (keyup.enter)=\"search();searchBox.value=''\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n        <button id=\"search-button\" type=\"button\" class=\"btn btn-primary text-center\" (click)=\"search()\">Search</button>\n      </form>\n    </div>\n  </div>\n</nav>\n<router-outlet></router-outlet>\n<br>\n<br>\n<footer>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-6 text-center\">\n        <h4>Copyright © 2017 Movie Cruiser. </h4>\n        <h4>All rights reserved. </h4>\n      </div>\n      <div class=\"col-sm-6 text-center\">\n        <h4>About Us</h4>\n        <p>Movie Cruiser is the ultimate movie database.</p>\n      </div>\n    </div>\n    <!--End of row -->\n  </div>\n  <!--End of container -->\n</footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_search_service__ = __webpack_require__("./src/app/services/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(searchService, router) {
        this.searchService = searchService;
        this.router = router;
        this.title = 'Movie Cruiser';
    }
    AppComponent.prototype.navigateTo = function () {
        var link = ['/search-results'];
        this.router.navigate(link);
    };
    AppComponent.prototype.search = function () {
        var _this = this;
        this.searchService.find(this.searchQuery).then(function (response) {
            _this.searchService.sharedSearchResult = response.results;
            _this.navigateTo();
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export myComponents */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_routing_app_routing_module__ = __webpack_require__("./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_movies_service__ = __webpack_require__("./src/app/services/movies.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_search_service__ = __webpack_require__("./src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__search_results_search_results_component__ = __webpack_require__("./src/app/search-results/search-results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__movie_movie_component__ = __webpack_require__("./src/app/movie/movie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__watchlist_watchlist_component__ = __webpack_require__("./src/app/watchlist/watchlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__discover_movies_discover_movies_component__ = __webpack_require__("./src/app/discover-movies/discover-movies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__discover_tv_discover_tv_component__ = __webpack_require__("./src/app/discover-tv/discover-tv.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__tv_show_tv_show_component__ = __webpack_require__("./src/app/tv-show/tv-show.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// Importing necessary modules





// Importing necessary Services


// Importing necessary components









var myComponents = [
    __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
    __WEBPACK_IMPORTED_MODULE_9__search_results_search_results_component__["a" /* SearchResultsComponent */],
    __WEBPACK_IMPORTED_MODULE_10__search_search_component__["a" /* SearchComponent */],
    __WEBPACK_IMPORTED_MODULE_11__movie_movie_component__["a" /* MovieComponent */],
    __WEBPACK_IMPORTED_MODULE_12__watchlist_watchlist_component__["a" /* WatchlistComponent */],
    __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */],
    __WEBPACK_IMPORTED_MODULE_14__discover_movies_discover_movies_component__["a" /* DiscoverMoviesComponent */],
    __WEBPACK_IMPORTED_MODULE_15__discover_tv_discover_tv_component__["a" /* DiscoverTvComponent */],
    __WEBPACK_IMPORTED_MODULE_16__tv_show_tv_show_component__["a" /* TvShowComponent */]
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* NgModule */])({
        declarations: myComponents.slice(),
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__app_routing_app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__services_movies_service__["a" /* MoviesService */], __WEBPACK_IMPORTED_MODULE_7__services_search_service__["a" /* SearchService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/discover-movies/discover-movies.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  border: 0px;\n  margin-bottom: 20px;\n  padding: 15px;\n}\n\n.media img {\n  height: 250px;\n  width: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/discover-movies/discover-movies.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">The most popular movies right now!</h1>\n<br>\n<div class=\"container\" *ngIf=\"discMovies.length > 0\">\n  <div class=\"row card-group\">\n    <div class=\"col-4\" *ngFor=\"let movie of discMovies\">\n      <div class=\"card text-center\">\n        <a (click)=\"goToDetail(movie.id)\">\n          <div class=\"media\">\n            <img class=\"d-flex mr-3 img-responsive\" src=\"https://image.tmdb.org/t/p/w300/{{movie.poster_path}}\" alt=\"{{movie.title}}\">\n            <div class=\"media-body\">\n              <h5 class=\"mt-0\">{{movie.title}} ({{movie.release_date| date:'y'}})</h5>\n              <p>Rating: {{movie.vote_average}} ({{movie.vote_count}})</p>\n            </div>\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/discover-movies/discover-movies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoverMoviesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_service__ = __webpack_require__("./src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DiscoverMoviesComponent = (function () {
    function DiscoverMoviesComponent(searchService, router) {
        this.searchService = searchService;
        this.router = router;
        this.discMovies = [];
    }
    DiscoverMoviesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchService.discoverMovies().subscribe(function (response) {
            _this.discMovies = response.results;
        });
    };
    DiscoverMoviesComponent.prototype.goToDetail = function (id) {
        var link = ['/movie', id];
        this.router.navigate(link);
    };
    return DiscoverMoviesComponent;
}());
DiscoverMoviesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-discover-movies',
        template: __webpack_require__("./src/app/discover-movies/discover-movies.component.html"),
        styles: [__webpack_require__("./src/app/discover-movies/discover-movies.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], DiscoverMoviesComponent);

var _a, _b;
//# sourceMappingURL=discover-movies.component.js.map

/***/ }),

/***/ "./src/app/discover-tv/discover-tv.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  border: 0px;\n  margin-bottom: 20px;\n  padding: 15px;\n}\n\n.media img {\n  height: 250px;\n  width: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/discover-tv/discover-tv.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"discTV.length > 0\">\n  <h1 class=\"text-center\">The most popular TV Shows right now! </h1>\n  <br>\n  <div class=\"row card-group\">\n    <div class=\"col-4\" *ngFor=\"let movie of discTV\">\n      <div class=\"card text-center\">\n        <a (click)=\"goToDetailTV(movie.id)\">\n          <div class=\"media\">\n            <img class=\"d-flex mr-3 img-responsive\" src=\"https://image.tmdb.org/t/p/w300/{{movie.poster_path}}\" alt=\"{{movie.title}}\">\n            <div class=\"media-body\">\n              <h5 class=\"mt-0\">{{movie.original_name}} ({{movie.first_air_date| date:'y'}})</h5>\n              <p>Rating: {{movie.vote_average}} ({{movie.vote_count}})</p>\n            </div>\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/discover-tv/discover-tv.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoverTvComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_service__ = __webpack_require__("./src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DiscoverTvComponent = (function () {
    function DiscoverTvComponent(searchService, router) {
        this.searchService = searchService;
        this.router = router;
        this.discTV = [];
    }
    DiscoverTvComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchService.discoverTV().subscribe(function (response) {
            _this.discTV = response.results;
        });
    };
    DiscoverTvComponent.prototype.goToDetailTV = function (id) {
        var link = ['/tv', id];
        this.router.navigate(link);
    };
    return DiscoverTvComponent;
}());
DiscoverTvComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-discover-tv',
        template: __webpack_require__("./src/app/discover-tv/discover-tv.component.html"),
        styles: [__webpack_require__("./src/app/discover-tv/discover-tv.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], DiscoverTvComponent);

var _a, _b;
//# sourceMappingURL=discover-tv.component.js.map

/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  border: 0px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"nowPlayingMovies.length > 0\">\n  <h1 class=\"text-center\">Top Playing Movies </h1>\n  <br>\n  <div class=\"row card-group\">\n    <div class=\"col-4\" *ngFor=\"let movie of nowPlayingMovies\">\n      <div class=\"card text-center\">\n        <a (click)=\"goToDetail(movie.id)\">\n          <div class=\"media\">\n            <img class=\"d-flex mr-3 img-responsive\" src=\"https://image.tmdb.org/t/p/w300/{{movie.poster_path}}\" alt=\"{{movie.title}}\">\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n  <br>\n  <div class=\"container\" *ngIf=\"nowPlayingTV.length > 0\">\n    <h1 class=\"text-center\">Top Playing TV </h1>\n    <br>\n    <div class=\"row card-group\">\n      <div class=\"col-4\" *ngFor=\"let movies of nowPlayingTV.splice(0,3)\" (click)=\"goToDetailTV(movies.id)\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-body\">\n            <img class=\"d-flex mr-3 img-responsive\" src=\"https://image.tmdb.org/t/p/w300/{{movies.poster_path}}\" alt=\"{{movies.title}}\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_service__ = __webpack_require__("./src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(searchService, router) {
        this.searchService = searchService;
        this.router = router;
        this.nowPlayingMovies = [];
        this.nowPlayingTV = [];
    }
    HomeComponent.prototype.goToDetail = function (id) {
        var link = ['/movie', id];
        this.router.navigate(link);
    };
    HomeComponent.prototype.goToDetailTV = function (id) {
        var link = ['/tv', id];
        this.router.navigate(link);
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchService.getNowPlayingMovies().subscribe(function (response) {
            _this.nowPlayingMovies = response.results.splice(0, 3);
        });
        this.searchService.getNowPlayingTV().subscribe(function (response) {
            _this.nowPlayingTV = response.results;
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("./src/app/home/home.component.html"),
        styles: [__webpack_require__("./src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "./src/app/movie/movie.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  border: 0px;\n  margin-bottom: 20px;\n  padding: 15px;\n}\n\n.media img {\n  height: 150px;\n  width: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/movie/movie.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"movie\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h2 class=\"text-center\">{{movie.title}}</h2>\n    </div>\n    <br>\n    <div class=\"panel-body\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <img *ngIf=\"movie.poster_path\" class=\"img-thumbnail img-responsive\" src=\"https://image.tmdb.org/t/p/w500{{movie.poster_path}}\">\n          <img *ngIf=\"!movie.poster_path\" class=\"img-thumbnail img-responsive\" src=\"http://ddbu.billiardport.com/img/posters/no_poster_available.jpg\">\n        </div>\n        <div class=\"col-md-6\">\n          <ul class=\"list-group\">\n            <li class=\"list-group-item\">\n              <strong>Original Title:</strong> {{movie.original_title}}\n            </li>\n            <li class=\"list-group-item\">\n              <strong>Cast:</strong> <span *ngFor=\"let gen of cast\">{{gen.name}}, </span>\n            </li>\n            <li class=\"list-group-item\">\n              <strong>Overview:</strong> {{movie.overview}}\n            </li>\n            <li class=\"list-group-item\">\n              <strong>Budget:</strong> {{movie.budget|currency:'USD':true}}\n            </li>\n            <li class=\"list-group-item\">\n              <strong>Genres:</strong> <span *ngFor=\"let gen of movie.genres\">{{gen.name}} </span>\n            </li>\n            <li class=\"list-group-item\">\n              <strong>Release Date:</strong> {{movie.release_date|date:'longDate'}}\n            </li>\n            <li class=\"list-group-item\">\n              <strong>Rating:</strong> {{movie.vote_average}}\n            </li>\n            <li class=\"list-group-item\">\n              <strong>Rating count:</strong> {{movie.vote_count}}\n            </li>\n          </ul>\n          <hr />\n          <form>\n            <div class=\"form-group\">\n              <label for=\"commentBox\">Enter your comments and add it to your watchlist:</label>\n              <input #commentsBox type=\"/textarea\" class=\"form-control\" id=\"commentsBox\" name=\"commentsBox\">\n              <button [hidden]=\"!inWatchList\" id=\"updateBtn\" type=\"button\" class=\"btn btn-info\" (click)=\"updateComments(movie.id,commentsBox.value)\">Update</button>\n            </div>\n          </form>\n          <button [hidden]=\"inWatchList\" id=\"addBtn\" type=\"button\" class=\"btn btn-primary btn-lg  btn-block\" (click)=\"addToWatchList(movie.id,movie.original_title,commentsBox.value,movie.poster_path,movie.release_date,movie.vote_average,movie.vote_count)\">Add to Watchlist</button>\n          <button [hidden]=\"!inWatchList\" id=\"removeBtn\" type=\"button\" class=\"btn btn-danger btn-lg btn-block\" (click)=\"removeFromWatchList(movie.id)\">Remove from Watchlist</button>\n          <br>\n          <a *ngIf=\"movie.homepage\" href=\"{{movie.homepage}}\" target=\"_blank\" class=\"btn btn-primary btn-lg btn-block\">Movie Homepage</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br>\n  <h3>Recommendations</h3>\n  <div class=\"row card-group\">\n    <div class=\"col-4\" *ngFor=\"let movies of recommended\" (click)=\"goToDetail(movies.id)\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <img *ngIf=\"movies.poster_path\" class=\"img-thumbnail img-responsive\" src=\"https://image.tmdb.org/t/p/w500/{{movies.poster_path}}\">\n          <img *ngIf=\"!movies.poster_path\" class=\"img-thumbnail img-responsive\" src=\"http://ddbu.billiardport.com/img/posters/no_poster_available.jpg\">\n        </div>\n      </div>\n      <br>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/movie/movie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_movies_service__ = __webpack_require__("./src/app/services/movies.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_service__ = __webpack_require__("./src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MovieComponent = (function () {
    function MovieComponent(router, moviesService, searchService, route, location) {
        this.router = router;
        this.moviesService = moviesService;
        this.searchService = searchService;
        this.route = route;
        this.location = location;
        this.recommended = [];
        this.cast = [];
        this.inWatchList = true;
    }
    MovieComponent.prototype.goToDetail = function (id) {
        var link = ['/movie', id];
        this.router.navigate(link);
    };
    MovieComponent.prototype.addToWatchList = function (id, name, comments, poster_path, release_date, vote_average, vote_count) {
        this.moviesService.addToWatchListMovie(id, name, comments, poster_path, release_date, vote_average, vote_count);
        this.inWatchList = true;
    };
    MovieComponent.prototype.updateComments = function (id, comments) {
        this.moviesService.updateMovieComments(id, comments);
    };
    MovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.searchService.getMovieById(+params.get('id')); })
            .subscribe(function (movie) { return _this.movie = movie; });
        this.route.params.map(function (params) { return params['id']; })
            .switchMap(function (id) { return _this.searchService.getRecommendedMovies(id); })
            .subscribe(function (response) { return _this.recommended = response.results.splice(0, 6); });
        this.route.params.map(function (params) { return params['id']; })
            .switchMap(function (id) { return _this.searchService.getCast(id); })
            .subscribe(function (response) { return _this.cast = response.cast.splice(0, 3); });
        this.route.params.map(function (params) { return params['id']; })
            .switchMap(function (id) { return _this.moviesService.checkWatchList(id); })
            .subscribe(function (response) {
            if (response === undefined) {
                _this.inWatchList = false;
            }
        });
    };
    MovieComponent.prototype.removeFromWatchList = function (id) {
        var _this = this;
        this.moviesService.removeMovieFromWatchList(id).then(function () { return _this.inWatchList = false; });
    };
    return MovieComponent;
}());
MovieComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-movie',
        template: __webpack_require__("./src/app/movie/movie.component.html"),
        styles: [__webpack_require__("./src/app/movie/movie.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_movies_service__["a" /* MoviesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_movies_service__["a" /* MoviesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]) === "function" && _e || Object])
], MovieComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=movie.component.js.map

/***/ }),

/***/ "./src/app/search-results/search-results.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  border: 0px;\n  margin-bottom: 20px;\n  padding: 15px;\n}\n\n.media img {\n  height: 250px;\n  width: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/search-results/search-results.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"searchResults.length > 0\">\n  <div class=\"row card-group\">\n    <div class=\"col-4\" id=\"moviesList\" *ngFor=\"let movie of searchResults\">\n      <div class=\"card text-center\">\n        <a class=\"movieItem\" (click)=\"goToDetail(movie.id)\">\n          <div class=\"media\">\n            <img class=\"d-flex mr-3\" src=\"https://image.tmdb.org/t/p/w300/{{movie.poster_path}}\" alt=\"{{movie.title}}\">\n            <div class=\"media-body\">\n              <h5 class=\"mt-0 movieTitle\">{{movie.title}} ({{movie.release_date| date:'y'}})</h5>\n              <p>Rating: {{movie.vote_average}} ({{movie.vote_count}})</p>\n            </div>\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/search-results/search-results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_service__ = __webpack_require__("./src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchResultsComponent = (function () {
    function SearchResultsComponent(searchService, router) {
        this.searchService = searchService;
        this.router = router;
        this.searchResults = [];
    }
    SearchResultsComponent.prototype.ngOnInit = function () {
        this.searchResults = this.searchService.sharedSearchResult;
    };
    SearchResultsComponent.prototype.goToDetail = function (id) {
        var link = ['/movie', id];
        this.router.navigate(link);
    };
    return SearchResultsComponent;
}());
SearchResultsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-search-results',
        template: __webpack_require__("./src/app/search-results/search-results.component.html"),
        styles: [__webpack_require__("./src/app/search-results/search-results.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SearchResultsComponent);

var _a, _b;
//# sourceMappingURL=search-results.component.js.map

/***/ }),

/***/ "./src/app/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form>\n    <input name=\"Searchbox\" [(ngModel)]=\"searchQuery\" #searchBox id=\"search-box\" class=\"form-control\" (keyup.enter)=\"search();searchBox.value=''\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n    <br>\n    <button id=\"search-button\" type=\"button\" class=\"btn btn-primary text-center\" (click)=\"search()\">Search</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_search_service__ = __webpack_require__("./src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = (function () {
    function SearchComponent(searchService, router) {
        this.searchService = searchService;
        this.router = router;
    }
    SearchComponent.prototype.navigateToSearchResults = function () {
        this.router.navigate(['/search-results']);
    };
    SearchComponent.prototype.search = function () {
        var _this = this;
        this.searchService.find('superheroes').then(function (response) {
            _this.searchService.sharedSearchResult = response.results;
            _this.navigateToSearchResults();
        });
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-search',
        template: __webpack_require__("./src/app/search/search.component.html"),
        styles: [__webpack_require__("./src/app/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_search_service__["a" /* SearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SearchComponent);

var _a, _b;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "./src/app/services/movies.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MoviesService = (function () {
    function MoviesService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        this.serviceUrl = 'http://localhost:8080/v1.0/movieservice/movie/';
    }
    MoviesService.prototype.addToWatchListMovie = function (id, name, comments, poster_path, release_date, vote_average, vote_count) {
        var url = this.serviceUrl + 'save/';
        var json = JSON.stringify({ id: id, name: name, comments: comments, posterPath: poster_path,
            releaseDate: release_date, voteAverage: vote_average, voteCount: vote_count });
        return this.http.post(this.serviceUrl, json, { headers: this.headers }).toPromise().catch(this.handleError);
    };
    MoviesService.prototype.getWatchList = function () {
        return this.http.get(this.serviceUrl).toPromise().then(function (res) { return res.json(); }, function (err) { return err.json(); });
    };
    MoviesService.prototype.checkWatchList = function (id) {
        var url = this.serviceUrl + id;
        return this.http.get(url).toPromise().then(function (res) { return res ? res.json() : null; }).catch(this.handleError);
    };
    MoviesService.prototype.updateMovieComments = function (id, comments) {
        var url = this.serviceUrl + id;
        return this.http.put(url, comments).toPromise().catch(this.handleError);
    };
    MoviesService.prototype.removeMovieFromWatchList = function (id) {
        var uri = "" + this.serviceUrl + id;
        return this.http.delete(uri, { headers: this.headers }).toPromise().catch(this.handleError);
    };
    MoviesService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
    };
    return MoviesService;
}());
MoviesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MoviesService);

var _a;
//# sourceMappingURL=movies.service.js.map

/***/ }),

/***/ "./src/app/services/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
        this.sharedSearchResult = [];
        this.searchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=' +
            'cf8441d05e8376c04c2feb36bd5b492f&language=en-US&page=1&include_adult=false&query=';
        this.movieUrl = 'https://api.themoviedb.org/3/movie/';
        this.tvUrl = 'https://api.themoviedb.org/3/tv/';
        this.discoverMoviesUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=' +
            'cf8441d05e8376c04c2feb36bd5b492f&language=en-US&sort_by=popularity.desc' +
            '&include_adult=false&include_video=false&page=1';
        this.apikey = '?api_key=cf8441d05e8376c04c2feb36bd5b492f&language=en-US';
        this.nowPlayingUrl = 'https://api.themoviedb.org/3/movie/' +
            'now_playing?api_key=cf8441d05e8376c04c2feb36bd5b492f&language=en-US&page=1';
        this.discoverTvUrl = 'https://api.themoviedb.org/3/discover/tv?api_key=' +
            'cf8441d05e8376c04c2feb36bd5b492f&language=en-US&sort_by=popularity.desc' +
            '&include_adult=false&include_video=false&page=1';
    }
    SearchService.prototype.find = function (term) {
        var url = "" + this.searchUrl + term;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SearchService.prototype.searchTV = function (term) {
        var url = "" + this.searchUrl + term;
        return this.http.get(url)
            .map(function (result) { return result.json(); });
    };
    SearchService.prototype.getNowPlayingTV = function () {
        var url = 'https://api.themoviedb.org/3/tv/popular?api_key=cf8441d05e8376c04c2feb36bd5b492f&language=en-US&page=1';
        return this.http.get(url).map(function (response) { return response.json(); });
    };
    SearchService.prototype.getTVById = function (id) {
        var url = this.tvUrl + id + this.apikey;
        return this.http.get(url).map(function (response) { return response.json(); });
    };
    SearchService.prototype.discoverTV = function () {
        return this.http.get(this.discoverTvUrl).map(function (result) { return result.json(); });
    };
    SearchService.prototype.getRecommendedTV = function (id) {
        var url = this.tvUrl + id + '/recommendations' + this.apikey;
        return this.http.get(url).map(function (result) { return result.json(); });
    };
    SearchService.prototype.getCastTV = function (id) {
        var url = this.tvUrl + id + '/credits' + this.apikey;
        return this.http.get(url).map(function (result) { return result.json(); });
    };
    SearchService.prototype.getRecommendedMovies = function (id) {
        var url = this.movieUrl + id + '/recommendations' + this.apikey;
        return this.http.get(url).map(function (result) { return result.json(); });
    };
    SearchService.prototype.discoverMovies = function () {
        return this.http.get(this.discoverMoviesUrl).map(function (result) { return result.json(); });
    };
    SearchService.prototype.getNowPlayingMovies = function () {
        return this.http.get(this.nowPlayingUrl).map(function (response) { return response.json(); });
    };
    SearchService.prototype.getMovieById = function (id) {
        var url = this.movieUrl + id + this.apikey;
        return this.http.get(url).map(function (response) { return response.json(); });
    };
    SearchService.prototype.getCast = function (id) {
        var url = this.movieUrl + id + '/credits' + this.apikey;
        return this.http.get(url).map(function (result) { return result.json(); });
    };
    SearchService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    return SearchService;
}());
SearchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SearchService);

var _a;
//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ "./src/app/tv-show/tv-show.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  border: 0px;\n  margin-bottom: 20px;\n  padding: 15px;\n}\n\n.media img {\n  height: 150px;\n  width: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/tv-show/tv-show.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"movie\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h2 class=\"text-center\">{{movie.original_name}}</h2>\n    </div>\n    <br>\n    <div class=\"panel-body\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <img *ngIf=\"movie.poster_path\" class=\"img-thumbnail img-responsive\" src=\"https://image.tmdb.org/t/p/w500/{{movie.poster_path}}\">\n          <img *ngIf=\"!movie.poster_path\" class=\"img-thumbnail img-responsive\" src=\"http://ddbu.billiardport.com/img/posters/no_poster_available.jpg\">\n        </div>\n        <div class=\"col-md-6\">\n          <ul class=\"list-group\">\n            <li class=\"list-group-item\">\n              <strong>Original Title:</strong> {{movie.original_name}}\n            </li>\n            <li class=\"list-group-item\">\n              <strong>Cast:</strong> <span *ngFor=\"let gen of cast\">{{gen.name}}, </span>\n            </li>\n            <li class=\"list-group-item\">\n              <strong>Overview:</strong> {{movie.overview}}\n            </li>\n            <li class=\"list-group-item\">\n              <strong>Genres:</strong> <span *ngFor=\"let gen of movie.genres\">{{gen.name}} </span>\n            </li>\n            <li class=\"list-group-item\">\n              <strong>Release Date:</strong> {{movie.release_date|date:'longDate'}}\n            </li>\n            <li class=\"list-group-item\">\n              <strong>Rating:</strong> {{movie.vote_average}}\n            </li>\n            <li class=\"list-group-item\">\n              <strong>Rating count:</strong> {{movie.vote_count}}\n            </li>\n          </ul>\n          <hr />\n          <button type=\"button\" class=\"btn btn-info btn-lg  btn-block\">Add to Watchlist</button>\n          <br>\n          <a *ngIf=\"movie.homepage\" href=\"{{movie.homepage}}\" target=\"_blank\" class=\"btn btn-primary btn-lg btn-block\">Movie Homepage</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br>\n  <h3>Recommendations</h3>\n  <div class=\"row card-group\">\n    <div class=\"col-4\" *ngFor=\"let movies of recommended\" (click)=\"goToDetailTV(movies.id)\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <img *ngIf=\"movies.poster_path\" class=\"img-thumbnail img-responsive\" src=\"https://image.tmdb.org/t/p/w500/{{movies.poster_path}}\">\n          <img *ngIf=\"!movies.poster_path\" class=\"img-thumbnail img-responsive\" src=\"http://ddbu.billiardport.com/img/posters/no_poster_available.jpg\">\n        </div>\n      </div>\n      <br>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/tv-show/tv-show.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TvShowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_search_service__ = __webpack_require__("./src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TvShowComponent = (function () {
    function TvShowComponent(router, searchService, route, location) {
        this.router = router;
        this.searchService = searchService;
        this.route = route;
        this.location = location;
        this.movie = [];
        this.recommended = [];
        this.cast = [];
    }
    TvShowComponent.prototype.goToDetailTV = function (id) {
        var link = ['/tv', id];
        this.router.navigate(link);
    };
    TvShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.searchService.getTVById(+params.get('id')); })
            .subscribe(function (movie) { return _this.movie = movie; });
        this.route.params.map(function (params) { return params['id']; })
            .switchMap(function (id) { return _this.searchService.getRecommendedTV(id); })
            .subscribe(function (response) { return _this.recommended = response.results.splice(0, 6); });
        this.route.params.map(function (params) { return params['id']; })
            .switchMap(function (id) { return _this.searchService.getCastTV(id); })
            .subscribe(function (response) { return _this.cast = response.cast.splice(0, 3); });
    };
    return TvShowComponent;
}());
TvShowComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-tv-show',
        template: __webpack_require__("./src/app/tv-show/tv-show.component.html"),
        styles: [__webpack_require__("./src/app/tv-show/tv-show.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_search_service__["a" /* SearchService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _d || Object])
], TvShowComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=tv-show.component.js.map

/***/ }),

/***/ "./src/app/watchlist/watchlist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  border: 0px;\n  margin-bottom: 20px;\n  padding: 15px;\n}\n\n.media img {\n  height: 250px;\n  width: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/watchlist/watchlist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"watchList\">\n  <div class=\"row card-group\">\n    <div class=\"col-6\" *ngFor=\"let movie of watchList\">\n      <div class=\"card text-center\">\n        <div class=\"media\">\n          <div class=\"media-left\"><img class=\"d-flex mr-3 moviePoster\" (click)=\"goToDetail(movie.id)\" src=\"https://image.tmdb.org/t/p/w500{{movie.posterPath}}\" alt=\"{{movie.name}}\"></div>\n          <div class=\"media-body\">\n            <a (click)=\"goToDetail(movie.id)\">\n              <h5 class=\"movieDescription\">{{movie.name}} ({{movie.releaseDate| date:'y'}})</h5>\n              <p class=\"movieRating\">Rating: {{movie.voteAverage}} ({{movie.voteCount}})</p>\n            </a>\n            <div class=\"form-group\">\n              <label for=\"commentsBox\">Comments:</label>\n              <input #commentsBox type=\"/textarea\" value=\"{{movie.comments}}\" class=\"form-control movieCommentsInpt\" id=\"commentsBox\" name=\"commentsBox\">\n              <br>\n              <button class=\"btn btn-primary movieUpdateCommentsBtn\" (click)=\"updateComments(movie.id,commentsBox.value)\">Update </button>\n              <button class=\"btn btn-danger movieRemoveBtn\" (click)=\"removeFromWatchList(movie.id)\">Remove</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/watchlist/watchlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WatchlistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_movies_service__ = __webpack_require__("./src/app/services/movies.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WatchlistComponent = (function () {
    function WatchlistComponent(moviesService, router) {
        this.moviesService = moviesService;
        this.router = router;
    }
    WatchlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.moviesService.getWatchList().then(function (res) {
            if (res) {
                _this.watchList = res;
            }
        });
    };
    WatchlistComponent.prototype.refreshMovies = function () {
        var _this = this;
        this.moviesService.getWatchList().then(function (res) {
            if (res) {
                _this.watchList = res;
            }
        });
    };
    WatchlistComponent.prototype.updateComments = function (id, comments) {
        this.moviesService.updateMovieComments(id, comments);
    };
    WatchlistComponent.prototype.goToDetail = function (id) {
        var link = ['/movie', id];
        this.router.navigate(link);
    };
    WatchlistComponent.prototype.removeFromWatchList = function (id) {
        var _this = this;
        this.moviesService.removeMovieFromWatchList(id).then(function () { return _this.refreshMovies(); });
    };
    return WatchlistComponent;
}());
WatchlistComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-watchlist',
        template: __webpack_require__("./src/app/watchlist/watchlist.component.html"),
        styles: [__webpack_require__("./src/app/watchlist/watchlist.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_movies_service__["a" /* MoviesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_movies_service__["a" /* MoviesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], WatchlistComponent);

var _a, _b;
//# sourceMappingURL=watchlist.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map