function Person(firstName, lastName, favoriteColor, favoriteNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
  this.favoriteFoods = [];
  this.family = [];
}

Person.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

Person.prototype.toString = function () {
  return `${this.fullName()}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`;
};

Person.prototype.addToFamily = function (obj) {
  let isFamily = this.family.some(function (element) {
    return obj.firstName === element.firstName && obj.lastName === element.lastName;
  });

  if (obj instanceof Person && !isFamily) {
    this.family.push(obj);
  }

  return this.family.length;
};

Array.prototype.map = function (func, index, array) {
  let arr = [];
  this.forEach(function (v, i, a) {
    index = i;
    array = a;
    arr.push(func(v, index, array));
  });

  return arr;
};

String.prototype.reverse = function () {
  // return this.split('').reverse().join('');

  let reverseStr = '';
  for (let i = this.length - 1; i >= 0; i--) {
    reverseStr += this[i];
  }

  return reverseStr;
};

Function.prototype.bind = function (oThis) {
  if (typeof this !== "function") {
    // closest thing possible to the ECMAScript 5 internal IsCallable function
    throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
  }

  var aArgs = Array.prototype.slice.call(arguments, 1),
    fToBind = this,
    fNOP = function () {},
    fBound = function () {
      return fToBind.apply(this instanceof fNOP ?
        this :
        oThis || window,
        aArgs.concat(Array.prototype.slice.call(arguments)));
    };

  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();

  return fBound;
};