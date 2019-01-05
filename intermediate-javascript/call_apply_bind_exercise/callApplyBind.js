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