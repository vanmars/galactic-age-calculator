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
          </ul
          <hr>
          <p class='lead'>You have . . .</p>
          <ul>
            <li>${newCalc.mercuryYearsLeftOrPast} Mercurian years left</li>
            <li>${newCalc.venusYearsLeftOrPast} Venusian years left</li>
            <li>${newCalc.marsYearsLeftOrPast} Martian years left</li>
            <li>${newCalc.jupiterYearsLeftOrPast} Jovian years left</li>
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
          </ul
          <hr>
          <p class='lead'>You have lived . . .</p>
          <ul>
            <li>${newCalc.mercuryYearsLeftOrPast} Mercurian years past expectancy</li>
            <li>${newCalc.venusYearsLeftOrPast} Venusian years past expectancy</li>
            <li>${newCalc.marsYearsLeftOrPast} Martian years past expectancy</li>
            <li>${newCalc.jupiterYearsLeftOrPast} Jovian years past expectancy</li>
          </ul>`
        );
      }
    });
  });
});
