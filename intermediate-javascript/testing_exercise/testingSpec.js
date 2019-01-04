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
})