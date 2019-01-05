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

function guessingGame(amount) {
  let answer = Math.ceil(Math.random() * 10);
  let count = 0;

  return function (guess) {
    count++;
    if (count === amount && guess !== answer) {
      return `No more guesses! The answer was ${answer}`;
    } else if (count > amount) {
      return 'You are all done playing';
    }

    return guess === answer ? 'You got it!' : guess > answer ? 'Too high' : 'Too low';
  };
}