const { map, filter } = require('../lib/index');

describe('array methods', () => {
  describe('assumptions', () => {
    describe('map', () => {
      it('add three to each item in an array', () => {
        const addedThree = [1, 2, 3, 4].map(num => {
          return num + 3;
        });
        expect(addedThree).toEqual([4, 5, 6, 7]);
      });
    });

    describe('filter', () => {
      it('can return only odd numbers from an array', () => {
        const odds = [1, 2, 3, 4, 5].filter(x => {
          return x % 2 !== 0;
        });
        expect(odds).toEqual([1, 3, 5]);
      });
    });
  });

  describe('implementation', () => {
    describe('map', () => {
      it('can add 3 to each number', () => {
        const results = map([1, 2, 3, 4, 5], x => {
          return x + 3;
        });
        expect(results).toEqual([4, 5, 6, 7, 8]);
      });
    });
    describe('filter', () => {
      it('can return numbers greater than 3', () => {
        const results = filter([1, 2, 3, 4, 5], x => {
          return x > 3;
        });
        expect(results).toEqual([4, 5]);
      });
    });
  });
});