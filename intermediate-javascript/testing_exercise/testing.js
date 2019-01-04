// replaceWith
function replaceWith(str, char, replacement) {
  String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
  };

  let charIndex = str.indexOf(char);

  if (charIndex >= 0) {
    return str.replaceAt(charIndex, replacement);
  } else {
    return false;
  }
}