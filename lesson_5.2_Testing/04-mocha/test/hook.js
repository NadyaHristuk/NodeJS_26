const { assert } = require('chai');

const user = {
  name: 'Maxim',
  age: 25,
  lang: ['Js', 'C++', 'Rust', 'Python'],
};

describe('hooks', function() {
  before(function() {
    // user.name = 'Maximka';
  });

  after(function() {
    // user.name = 'Maxim';
  });

  beforeEach(function() {
    user.name = '';
  });

  afterEach(function() {
    // runs after each test in this block
  });

  it('Maximka', function() {
    assert.equal(user.name, 'Maximka', 'Err Maximka');
  });
  it('Max', function() {
    assert.equal(user.name, 'Max', 'Err Max');
  });
  it('', function() {
    assert.equal(user.name, '', 'Err');
  });
});
