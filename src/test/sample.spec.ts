import assert from "assert";

describe('Sample test', () => { 
    it('should calculate number', () => {
      const num1 = 1, num2 = 2;
      const sum = num1 + num2;
      console.log('Actual', sum);
      assert.equal(sum, 3);
    })
 })