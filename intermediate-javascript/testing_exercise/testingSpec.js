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