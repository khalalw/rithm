$(function () {

  // Use the Star Wars API to get all of the opening crawls for the movie.
  function getMovieData() {
    let swArr = [];

    $.getJSON(`https://swapi.co/api/films/1/`)
      .then(function (data) {

        let movieObj = {};
        let planetsArr = data.planets;
        movieObj.title = data.title;
        movieObj.planets = [];
        movieObj["opening crawl"] = data.opening_crawl;


        planetsArr.forEach(function (v, i, arr) {
          $.getJSON(v)
            .then(function (data) {
              movieObj.planets.push(data.name);
            });
        });
        swArr.push(movieObj);
        return $.getJSON(`https://swapi.co/api/films/2/`);
      })
      .then(function (data) {
        let movieObj = {};
        let planetsArr = data.planets;
        movieObj.title = data.title;
        movieObj.planets = [];
        movieObj["opening crawl"] = data.opening_crawl;


        planetsArr.forEach(function (v, i, arr) {
          $.getJSON(v)
            .then(function (data) {
              movieObj.planets.push(data.name);
            });
        });
        swArr.push(movieObj);
        return $.getJSON(`https://swapi.co/api/films/3/`);
      })
      .then(function (data) {
        let movieObj = {};
        let planetsArr = data.planets;
        movieObj.title = data.title;
        movieObj.planets = [];
        movieObj["opening crawl"] = data.opening_crawl;


        planetsArr.forEach(function (v, i, arr) {
          $.getJSON(v)
            .then(function (data) {
              movieObj.planets.push(data.name);
            });
        });
        swArr.push(movieObj);
        return $.getJSON(`https://swapi.co/api/films/4/`);
      })
      .then(function (data) {
        let movieObj = {};
        let planetsArr = data.planets;
        movieObj.title = data.title;
        movieObj.planets = [];
        movieObj["opening crawl"] = data.opening_crawl;


        planetsArr.forEach(function (v, i, arr) {
          $.getJSON(v)
            .then(function (data) {
              movieObj.planets.push(data.name);
            });
        });
        swArr.push(movieObj);
        return $.getJSON(`https://swapi.co/api/films/5/`);
      })
      .then(function (data) {
        let movieObj = {};
        let planetsArr = data.planets;
        movieObj.title = data.title;
        movieObj.planets = [];
        movieObj["opening crawl"] = data.opening_crawl;


        planetsArr.forEach(function (v, i, arr) {
          $.getJSON(v)
            .then(function (data) {
              movieObj.planets.push(data.name);
            });
        });
        swArr.push(movieObj);
        return $.getJSON(`https://swapi.co/api/films/6/`);
      })
      .then(function (data) {
        let movieObj = {};
        let planetsArr = data.planets;
        movieObj.title = data.title;
        movieObj.planets = [];
        movieObj["opening crawl"] = data.opening_crawl;


        planetsArr.forEach(function (v, i, arr) {
          $.getJSON(v)
            .then(function (data) {
              movieObj.planets.push(data.name);
            });
        });
        swArr.push(movieObj);
        return $.getJSON(`https://swapi.co/api/films/7/`);
      })
      .then(function (data) {
        let movieObj = {};
        let planetsArr = data.planets;
        movieObj.title = data.title;
        movieObj.planets = [];
        movieObj["opening crawl"] = data.opening_crawl;


        planetsArr.forEach(function (v, i, arr) {
          $.getJSON(v)
            .then(function (data) {
              movieObj.planets.push(data.name);
            });
        });
        swArr.push(movieObj);
      });
    console.log(swArr);
    return swArr;

  }

  getMovieData();
});