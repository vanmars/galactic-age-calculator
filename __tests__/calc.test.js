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
test('5: should correctly return user age in jupiter years', () => {
    expect(newCalc.jupiterAge).toEqual(2);
  });
test('6: should correctly return expected years left on each planet', () => {
    expect(newCalc.mercuryYearsLeftOrPassed ).toEqual(200);
    expect(newCalc.venusYearsLeftOrPassed ).toEqual(77);
    expect(newCalc.earthYearsLeftOrPassed ).toEqual(48);
    expect(newCalc.marsYearsLeftOrPassed ).toEqual(25);
    expect(newCalc.jupiterYearsLeftOrPassed ).toEqual(4);
  });
test('7: should correctly return years lived past expected on each planet', () => {
    newCalc = new Calculator(100, 79);
    expect(newCalc.mercuryYearsLeftOrPassed ).toEqual(87);
    expect(newCalc.venusYearsLeftOrPassed ).toEqual(33);
    expect(newCalc.earthYearsLeftOrPassed ).toEqual(21);
    expect(newCalc.marsYearsLeftOrPassed ).toEqual(11);
    expect(newCalc.jupiterYearsLeftOrPassed ).toEqual(1);
  });
});