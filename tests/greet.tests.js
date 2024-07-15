describe('greet', function() {
    it('should greet a person with their name', function() {
      assert.equal(greet('Janine'), 'Hello, Janine');
    });
  
    it('should greet another person with their name', function() {
      assert.equal(greet('Alice'), 'Hello, Alice');
    });
  
    it('should greet yet another person with their name', function() {
      assert.equal(greet('Bob'), 'Hello, Bob');
    });
  });