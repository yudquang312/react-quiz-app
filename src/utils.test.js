import { shuffleArray, isEven} from './utils';

// describe('shuffleArray', () => { 

//   test('The result array should not to be equal the original array', () => {
//     const array = [1, 2, 3, 4, 5];
//     expect(shuffleArray(array)).not.toBe(array);
//   });

// });

describe('isEven', () => { 
  test('Should to be true', () => {
    expect(isEven(0)).toBe(true);
    expect(isEven(2)).toBe(true);
    expect(isEven(10)).toBe(true);
    expect(isEven(-10)).toBe(true);
  });

  test('Should to be false', () => {
    expect(isEven(1)).toBe(false);
    expect(isEven(3)).toBe(false);
    expect(isEven(-1)).toBe(false);
    expect(isEven(-1)).toBe(false);
  });
});
beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeAll(() => console.log('2 - beforeAll'));
  afterAll(() => console.log('2 - afterAll'));
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});
