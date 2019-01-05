function Person(firstName, lastName, favoriteColor, favoriteNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
}

function multiplyFavoriteNumber(obj) {
  return obj.favoriteNumber * 10;
}