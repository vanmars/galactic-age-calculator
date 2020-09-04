// | Test # | Behavior | Input | Output |
// | -------- | -------- | -------- | -------- |
// | 8 | Program returns user's age in Saturn years. | 31 | 1.05 |
// | 9 | Program returns user's age in Uranus years. | 31 | 0.369 |
// | 10 | Program returns user's age in Neptune years. | 31 | 0.188 |
// | 11 | Program returns user's age in Pluto years. | 31 | 0.125 |

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
    this.neptuneAge;
    this.mercuryYearsLeftOrPast = Math.floor(Math.abs(this.lifeExpectancy - age)/.24);
    this.venusYearsLeftOrPast  = Math.floor(Math.abs(this.lifeExpectancy - age)/.62);
    this.earthYearsLeftOrPast  = Math.floor(Math.abs(this.lifeExpectancy - age));
    this.marsYearsLeftOrPast  = Math.floor(Math.abs(this.lifeExpectancy - age)/1.88);
    this.jupiterYearsLeftOrPast  = Math.floor(Math.abs(this.lifeExpectancy - age)/11.86);
  };
};