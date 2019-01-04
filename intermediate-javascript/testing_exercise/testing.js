// replaceWith
function replaceWith(str, char, replacement) {
  String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
  };

  let charIndex = str.indexOf(char);

  return charIndex >= 0 ? str.replaceAt(charIndex, replacement) : false;
}

function expand(arr, num) {
  if (arr.length === 0 || num < 0) {
    return 'Array is empty or copy number is negative.';
  }

  let expandArr = [];
  while (num > 0) {
    arr.forEach(function (i) {
      expandArr.push(i);
    });
    num -= 1;
  }

  return expandArr;
}