import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './calc.js'

$(document).ready(function(){
  // Calculate Click Event Handler
  $("#calculateBtn").click(function(){
    $(".calculateDiv").hide();
    $(".formDiv").show();
    // Form Submit Event Handler
    $("form").submit(function(event){
      event.preventDefault();
      const inputtedAge = parseInt($("#age").val());
      const inputtedLifeExpectancy = parseInt($("#lifeExpectancy").val());
      let newCalc = new Calculator(inputtedAge, inputtedLifeExpectancy);
      $(".formDiv").hide();
      $(".resultDiv").show();
      if(newCalc.age <= newCalc.lifeExpectancy){
        $(".resultDiv").html(
          `<p class='lead'>You are . . .</p>
          <ul>
            <li>${newCalc.mercuryAge} Mercurian years old</li>
            <li>${newCalc.venusAge} Venusian years old</li>
            <li>${newCalc.marsAge} Martian years old</li>
            <li>${newCalc.jupiterAge} Jovian years old</li>
            <li>${newCalc.saturnAge} Saturnian years old</li>
            <li>${newCalc.uranusAge} Uranian years old</li>
            <li>${newCalc.neptuneAge} Neptunian years old</li>
            <li>${newCalc.plutoAge} Plutonian years old</li>
          </ul
          <hr>
          <p class='lead'>You have . . .</p>
          <ul>
            <li>${newCalc.mercuryYearsLeftOrPast} Mercurian years left</li>
            <li>${newCalc.venusYearsLeftOrPast} Venusian years left</li>
            <li>${newCalc.marsYearsLeftOrPast} Martian years left</li>
            <li>${newCalc.jupiterYearsLeftOrPast} Jovian years left</li>
            <li>${newCalc.saturnYearsLeftOrPast} Saturnian years left</li>
            <li>${newCalc.uranusYearsLeftOrPast} Uranian years left</li>
            <li>${newCalc.neptuneYearsLeftOrPast} Neptunian years left</li>
            <li>${newCalc.plutoYearsLeftOrPast} Plutonian years left</li>
          </ul>`
        );
      } else {
        $(".resultDiv").html(
          `<p class='lead'>You are . . .</p>
          <ul>
            <li>${newCalc.mercuryAge} Mercurian years old</li>
            <li>${newCalc.venusAge} Venusian years old</li>
            <li>${newCalc.marsAge} Martian years old</li>
            <li>${newCalc.jupiterAge} Jovian years old</li>
            <li>${newCalc.saturnAge} Saturnian years old</li>
            <li>${newCalc.uranusAge} Uranian years old</li>
            <li>${newCalc.neptuneAge} Neptunian years old</li>
            <li>${newCalc.plutoAge} Plutonian years old</li>
          </ul
          <hr>
          <p class='lead'>You have lived . . .</p>
          <ul>
            <li>${newCalc.mercuryYearsLeftOrPast} Mercurian years past expectancy</li>
            <li>${newCalc.venusYearsLeftOrPast} Venusian years past expectancy</li>
            <li>${newCalc.marsYearsLeftOrPast} Martian years past expectancy</li>
            <li>${newCalc.jupiterYearsLeftOrPast} Jovian years past expectancy</li>
            <li>${newCalc.saturnYearsLeftOrPast} Saturnian years past expectancy</li>
            <li>${newCalc.uranusYearsLeftOrPast} Uranian years past expectancy</li>
            <li>${newCalc.neptuneYearsLeftOrPast} Neptunian years past expectancy</li>
            <li>${newCalc.plutoYearsLeftOrPast} Plutonian years past expectancy</li>
          </ul>`
        );
      }
    });
  });
});
