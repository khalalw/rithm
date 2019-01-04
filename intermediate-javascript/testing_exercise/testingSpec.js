var should = chai.should();

// WRITE YOUR TESTS HERE!
describe('Replace With', function () {

  it('Replaces an uppercase letter', function () {
    replaceWith('Khalal', 'K', 'D').should.equal('Dhalal');
  });
  it('Replaces a lowercase letter', function () {
    replaceWith('Leezy', 'e', 'f').should.equal('Lfezy');
  });
  it('Replaces a lowercase letter with an uppercase one', function () {
    replaceWith('Rochelle', 'h', 'q').should.equal('Rocqelle');
  });
  it('Replaces an uppercase letter with an lowercase one', function () {
    replaceWith('Tahvia', 'T', 'f').should.equal('fahvia');
  });
  it('Returns false if the letter is not found', function () {
    replaceWith('HallOfFame', 'q', 'r').should.equal(false);
  });
});

describe('Expand', function () {
  it('Expands with a number greater than 1', function () {
    expand([1, 2, 3, 4], 4).should.deep.equal([1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]);
  });
  it('Returns the same array for 1', function () {
    expand(['hello', 'goodbye'], 1).should.deep.equal(['hello', 'goodbye']);
  });
  it('Returns an empty array for 0', function () {
    expand([4, 'apple', false], 0).should.deep.equal([]);
  });
  it('Display a message for numbers less than 0', function () {
    expand([4, 3, 2, 1], -2).should.equal('Array is empty or copy number is negative.');
  });
  it('Display a message for an empty array', function () {
    expand([], 5).should.equal('Array is empty or copy number is negative.');
  });
});

describe('Accept Numbers Only', function () {
  it('Returns true for all numbers', function () {
    acceptNumbersOnly(3, 2, 4, 4, 2).should.equal(true);
  });
  it('Returns false for strings', function () {
    acceptNumbersOnly(3, 2, 4, 'hello', 4, 2).should.equal(false);
  });
  it('Returns false for booleans', function () {
    acceptNumbersOnly(3, 2, 4, false, 4, 2).should.equal(false);
  });
  it('Returns false for Nan', function () {
    acceptNumbersOnly(3, 2, 4, NaN, 4, 2).should.equal(false);
  });
  it('Returns false for arrays', function () {
    acceptNumbersOnly(3, 2, 4, [], 4, 2).should.equal(false);
  });
  it('Returns false for objects', function () {
    acceptNumbersOnly(93, 2, 3, {
      hello: 'hello'
    }, 45).should.equal(false);
  });
});

describe('Merge Arrays', function () {
  it('Returns one merged sorted array', function () {
    mergeArrays([2, 5, 2, 4], [1, 6, 4, 3]).should.deep.equal([1, 2, 2, 3, 4, 4, 5, 6]);
  });
});