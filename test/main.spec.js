if (typeof turkishId === 'undefined') {
  var turkishId = require('../src/main.js');
}

var exampleID;

describe('turkish-id', function() {

  describe('itself', function() {

    it('should be able to generate', function() {
      exampleID = turkishId.generate();

      expect(typeof exampleID).toBe('number');
      expect((exampleID + '').length).toBe(11);
    });

    it('should validate properly', function() {
      expect(turkishId.validate(null)).toBe(false);
      expect(turkishId.validate(01111111111)).toBe(false);
      expect(turkishId.validate((exampleID + '').substr(0, 9) + 'x1')).toBe(false);
      expect(turkishId.validate(exampleID + 1)).toBe(false);

      expect(turkishId.validate(exampleID)).toBe(true);
      expect(turkishId.validate(exampleID + '')).toBe(true);
    });

    it('should be consistent', function() {
      for (var i = 0; i < 10; i++) {
        expect(turkishId.validate(turkishId.generate())).toBe(true);
      }
    });
  });
});
