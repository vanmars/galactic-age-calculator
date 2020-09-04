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
    this.saturnYearsLeftOrPast = Math.abs(Number((this.lifeExpectancy - age)/29.46).toFixed(3));
    this.uranusYearsLeftOrPast = Math.abs(Number((this.lifeExpectancy - age)/84.01).toFixed(3));
    this.neptuneYearsLeftOrPast = Math.abs(Number((this.lifeExpectancy - age)/164.79).toFixed(3));
    this.plutoYearsLeftOrPast = Math.abs(Number((this.lifeExpectancy - age)/248.59).toFixed(3));
  };
};