import Calculator from './../src/calc.js'

describe('Calculator', () => {
  let newCalc;
  beforeEach(() => {
    newCalc = new Calculator(31, 79);
  });
test('should store inputted values of age and life expectancy', () => {
    expect(newCalc.age).toEqual(31);
    expect(newCalc.lifeExpectancy).toEqual(79);
  });
  test('should correctly return user age in mercury years', () => {
    expect(newCalc.mercuryAge).toEqual(200);
  });
});