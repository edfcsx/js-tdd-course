/* eslint-disable */
var expect = require('chai').expect;

describe('Main', function() {

  let arr;

  beforeEach(function () {
    arr = [1, 2, 3];
  });


  // testar tipos ou se existe (smoke test)
  it('should be an array', () => {
    expect(arr).to.be.a('array');
  });

  it('Should have a size of 4 when push another value to the array', () => {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  it('should have a size of 2 when pop a value from the array', () => {
    arr.pop();
    expect(arr).to.have.lengthOf(2);
  });

  it('should remove value 3 when use pop in the array', () => {
    arr.pop();
    expect(arr).to.not.include(3);
  });

  it('should return true when pop 3 from the array', () => {
    expect(arr.pop() === 3).to.be.true;
  });

});
