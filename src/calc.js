export default class Calculator {
  constructor (age, lifeExpectancy){
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
    this.mercuryAge = Math.floor(this.age/.24);
    this.venusAge = Math.floor(this.age/.62);
    this.marsAge = Math.floor(this.age/1.88);
    this.jupiterAge = Math.floor(this.age/11.86);
    this.mercuryYearsLeftOrPast = Math.floor(Math.abs(this.lifeExpectancy - age)/.24);
    this.venusYearsLeftOrPast  = Math.floor(Math.abs(this.lifeExpectancy - age)/.62);
    this.earthYearsLeftOrPast  = Math.floor(Math.abs(this.lifeExpectancy - age));
    this.marsYearsLeftOrPast  = Math.floor(Math.abs(this.lifeExpectancy - age)/1.88);
    this.jupiterYearsLeftOrPast  = Math.floor(Math.abs(this.lifeExpectancy - age)/11.86);
  };
};