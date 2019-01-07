var logOne = function () {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('one');
      resolve('one!');
    }, Math.random() * 1000);
  });

  return promise;
};

var logTwo = function () {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('two');
      resolve('two!');
    }, Math.random() * 1000);
  });

  return promise;
};

// Use of promises
function inOrder(a, b) {
  return a().then(b);
}

inOrder(logOne, logTwo);

// one
// two

// it should always log those two in order regardless of their timing