// | Test # | Behavior | Input | Output |
// | -------- | -------- | -------- | -------- |
// | 12 | Given a user input of their expected life expectancy given their demographics, program returns years a user has left to live on planets Saturn through Pluto | Earth Age: 31; Life Expectancy: 79  | Saturn Years Left: 1.629; Uranus Years Left: 0.571; Neptune Years Left: 0.291; Pluto Years Left: 0.193;  |
// | 13 | If a user, has surpassed the average life expectancy, the program returns the number of years they have lived past the life expectancy.| Life Expectancy: 79; Earth Age: 100 | Saturn Years Lived Past Expectancy: 0.713; Uranus Years Lived Past Expectancy: 0.250; Neptune Years Lived Past Expectancy: 0.127; Pluto Years Lived Past Expectancy: 0.084;|

export default class Calculator {
  constructor (age, lifeExpectancy){
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
    this.mercuryAge = Math.floor(this.age/.24);
    this.venusAge = Math.floor(this.age/.62);
    this.marsAge = Math.floor(this.age/1.88);
    this.jupiterAge = Math.floor(this.age/11.86);
    this.saturnAge = Number((this.age/29.46).toFixed(3));
    this.uranusAge = Number((this.age/84.01).toFixed(3));
    this.neptuneAge = Number((this.age/164.79).toFixed(3));
    this.plutoAge = Number((this.age/248.59).toFixed(3));;
    this.mercuryYearsLeftOrPast = Math.floor(Math.abs(this.lifeExpectancy - age)/.24);
    this.venusYearsLeftOrPast = Math.floor(Math.abs(this.lifeExpectancy - age)/.62);
    this.earthYearsLeftOrPast = Math.floor(Math.abs(this.lifeExpectancy - age));
    this.marsYearsLeftOrPast = Math.floor(Math.abs(this.lifeExpectancy - age)/1.88);
    this.jupiterYearsLeftOrPast = Math.floor(Math.abs(this.lifeExpectancy - age)/11.86);
    this.saturnYearsLeftOrPast;
    this.uranusYearsLeftOrPast;
    this.neptuneYearsLeftOrPast;
    this.plutoYearsLeftOrPast;
  };
};