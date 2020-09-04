import Calculator from './../src/calc.js'

describe('Calculator', () => {
  let newCalc;
  beforeEach(() => {
    newCalc = new Calculator(31, 79);
  });
test('1: should store inputted values of age and life expectancy', () => {
    expect(newCalc.age).toEqual(31);
    expect(newCalc.lifeExpectancy).toEqual(79);
  });
test('2: should correctly return user age in mercury years', () => {
  expect(newCalc.mercuryAge).toEqual(129);
  });
test('3: should correctly return user age in venus years', () => {
  expect(newCalc.venusAge).toEqual(50);
  });
test('4: should correctly return user age in mars years', () => {
  expect(newCalc.marsAge).toEqual(16);
  });
});