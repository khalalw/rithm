function Person(firstName, lastName, favoriteColor, favoriteNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
  this.multiplyFavoriteNumber = multiplyFavoriteNumber;

  function multiplyFavoriteNumber(num) {
    return this.favoriteNumber * num;
  }
}