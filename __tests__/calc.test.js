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
    expect(newCalc.mercuryYearsLeftOrPast).toEqual(200);
    expect(newCalc.venusYearsLeftOrPast).toEqual(77);
    expect(newCalc.earthYearsLeftOrPast).toEqual(48);
    expect(newCalc.marsYearsLeftOrPast).toEqual(25);
    expect(newCalc.jupiterYearsLeftOrPast).toEqual(4);
  });
test('7: should correctly return years lived past expected on each planet', () => {
    newCalc = new Calculator(100, 79);
    expect(newCalc.mercuryYearsLeftOrPast).toEqual(87);
    expect(newCalc.venusYearsLeftOrPast).toEqual(33);
    expect(newCalc.earthYearsLeftOrPast).toEqual(21);
    expect(newCalc.marsYearsLeftOrPast).toEqual(11);
    expect(newCalc.jupiterYearsLeftOrPast).toEqual(1);
  });
test('8: should correctly return user age in saturn years', () => {
    expect(newCalc.saturnAge).toEqual(1.052);
  });
test('9: should correctly return user age in uranus years', () => {
    expect(newCalc.uranusAge).toEqual(0.369);
  });
test('10: should correctly return user age in neptune years', () => {
    expect(newCalc.neptuneAge).toEqual(0.188);
  });
test('11: should correctly return user age in pluto years', () => {
    expect(newCalc.plutoAge).toEqual(0.125);
  });
test('12: should correctly return expected years left on planets saturn through pluto', () => {
    expect(newCalc.saturnYearsLeftOrPast).toEqual(1.629);
    expect(newCalc.uranusYearsLeftOrPast).toEqual(0.571);
    expect(newCalc.neptuneYearsLeftOrPast).toEqual(0.291);
    expect(newCalc.plutoYearsLeftOrPast).toEqual(0.193);
  });
  test('13: should correctly return years lived past expected on  planets saturn - pluto', () => {
    newCalc = new Calculator(100, 79);
    expect(newCalc.saturnYearsLeftOrPast).toEqual(0.713);
    expect(newCalc.uranusYearsLeftOrPast).toEqual(0.250);
    expect(newCalc.neptuneYearsLeftOrPast).toEqual(0.127);
    expect(newCalc.plutoYearsLeftOrPast).toEqual(0.084);
  });
});