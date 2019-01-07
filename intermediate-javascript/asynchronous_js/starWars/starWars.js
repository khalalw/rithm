$(function () {
  // Use the Star Wars API to get all of the opening crawls for the movie.
  function getAllOpeningCrawls() {
    $.getJSON(`https://swapi.co/api/films/1/`)
      .then(function (data) {
        console.log(data.opening_crawl);
        return $.getJSON(`https://swapi.co/api/films/2/`)
      })
      .then(function (data) {
        console.log(data.opening_crawl);
        return $.getJSON(`https://swapi.co/api/films/3/`)
      })
      .then(function (data) {
        console.log(data.opening_crawl);
        return $.getJSON(`https://swapi.co/api/films/4/`)
      })
      .then(function (data) {
        console.log(data.opening_crawl);
        return $.getJSON(`https://swapi.co/api/films/5/`)
      })
      .then(function (data) {
        console.log(data.opening_crawl);
        return $.getJSON(`https://swapi.co/api/films/6/`)
      })
      .then(function (data) {
        console.log(data.opening_crawl);
        return $.getJSON(`https://swapi.co/api/films/7/`)
      })
      .then(function (data) {
        console.log(data.opening_crawl);
      });

  }

  getAllOpeningCrawls();
});