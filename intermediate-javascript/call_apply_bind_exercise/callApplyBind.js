function arrayFrom() {
  return [].slice.call(arguments);
}

function sumEvenArguments() {
  let argsArray = [].slice.call(arguments);
  let sum = 0;

  argsArray.forEach(function (i) {
    if (i % 2 === 0) {
      sum += i;
    }
  });
  return sum;
}

function invokeMax(func, counter) {
  let num = 0;

  return function () {
    if (num >= counter) {
      return 'Maxed Out!';
    }
    num++;

    return func.apply(null, arguments);
  };

}