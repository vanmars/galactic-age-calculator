import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './calc.js';

$(document).ready(function(){
  // Calculate Click Event Handler
  $("#calculateBtn").click(function(){
    $(".calculateDiv").hide();
    $(".formDiv").show();
    // Form Submit Event Handler
    $("form").submit(function(event){
      event.preventDefault();
      const inputtedName = $("#name").val();
      const inputtedAge = parseInt($("#age").val());
      const inputtedLifeExpectancy = parseInt($("#lifeExpectancy").val());
      let newCalc = new Calculator(inputtedAge, inputtedLifeExpectancy);
      if(newCalc.age <= newCalc.lifeExpectancy){
        $("#mercuryResult").html(
          `<ul>
            <li>You are ${newCalc.mercuryAge} Mercurian years old.</li>
            <li>You have ${newCalc.mercuryYearsLeftOrPast} Mercurian years left.</li>
          </ul>`
        );
        $("#venusResult").html(
          `<ul>
            <li>You are ${newCalc.venusAge} Venusian years old.</li>
            <li>You have ${newCalc.venusYearsLeftOrPast} Venusian years left.</li>
          </ul>`
        );
        $("#marsResult").html(
          `<ul>
            <li>You are ${newCalc.marsAge} Martian years old.</li>
            <li>You have ${newCalc.marsYearsLeftOrPast} Martian years left.</li>
          </ul>`
        );
        $("#earthResult").html(
          `<ul>
            <li>You are ${newCalc.age} Earth years old.</li>
            <li>You have ${newCalc.earthYearsLeftOrPast} Earth years left.</li>
          </ul>`
        );
        $("#jupiterResult").html(
          `<ul>
             <li>You are ${newCalc.jupiterAge} Jovian years old.</li>
             <li>You have ${newCalc.jupiterYearsLeftOrPast} Jovian years left.</li>
          </ul>`
        );
        $("#saturnResult").html(
          `<ul>
            <li>You are ${newCalc.saturnAge} Saturnian years old.</li>
            <li>You have ${newCalc.saturnYearsLeftOrPast} Saturnian years left.</li>
          </ul>`
        );
        $("#uranusResult").html(
          `<ul>
            <li>You are ${newCalc.uranusAge} Uranian years old.</li>
            <li>You have ${newCalc.uranusYearsLeftOrPast} Uranian years left.</li>
          </ul>`
        );
        $("#neptuneResult").html(
          `<ul>
            <li>You are ${newCalc.neptuneAge} Neptunian years old.</li>
            <li>You have ${newCalc.neptuneYearsLeftOrPast} Neptunian years left.</li>
          </ul>`
        );
        $("#plutoResult").html(
          `<ul>
            <li>You are ${newCalc.plutoAge} Plutonian years old.</li>
            <li>You have ${newCalc.plutoYearsLeftOrPast} Plutonian years left.</li>
          </ul>`
        );
      } else {
        $("#mercuryResult").html(
          `<ul>
            <li>You are ${newCalc.mercuryAge} Mercurian years old.</li>
            <li>You have lived ${newCalc.mercuryYearsLeftOrPast} Mercurian years past expectancy.</li>
          </ul>`
        );
        $("#venusResult").html(
          `<ul>
            <li>You are ${newCalc.venusAge} Venusian years old.</li>
            <li>You have lived  ${newCalc.venusYearsLeftOrPast} Venusian years past expectancy.</li>
          </ul>`
        );
        $("#marsResult").html(
          `<ul>
            <li>You are ${newCalc.marsAge} Martian years old.</li>
            <li>You have lived  ${newCalc.marsYearsLeftOrPast} Martian years past expectancy.</li>
          </ul>`
        );
        $("#earthResult").html(
          `<ul>
            <li>You are ${newCalc.age} Earth years old.</li>
            <li>You have lived  ${newCalc.earthYearsLeftOrPast} Earth years past expectancy.</li>
          </ul>`
        );
        $("#jupiterResult").html(
          `<ul>
            <li>You are ${newCalc.jupiterAge} Jovian years old.</li>
            <li>You have lived  ${newCalc.jupiterYearsLeftOrPast} Jovian years past expectancy.</li>
          </ul>`
        );
        $("#saturnResult").html(
          `<ul>
            <li>You are ${newCalc.saturnAge} Saturnian years old.</li>
            <li>You have lived  ${newCalc.saturnYearsLeftOrPast} Saturnian years past expectancy.</li>
          </ul>`
        );
        $("#uranusResult").html(
          `<ul>
            <li>You are ${newCalc.uranusAge} Uranian years old.</li>
            <li>You have lived  ${newCalc.uranusYearsLeftOrPast} Uranian years past expectancy.</li>
          </ul>`
        );
        $("#neptuneResult").html(
          `<ul>
            <li>You are ${newCalc.neptuneAge} Neptunian years old.</li>
            <li>You have lived  ${newCalc.neptuneYearsLeftOrPast} Neptunian years past expectancy.</li>
          </ul>`
        );
        $("#plutoResult").html(
          `<ul>
            <li>You are ${newCalc.plutoAge} Plutonian years old.</li>
            <li>You have lived  ${newCalc.plutoYearsLeftOrPast} Plutonian years past expectancy.</li>
          </ul>`
        );
      }
      $("#nameReturn").text(inputtedName);
      $(".formDiv").hide();
      $(".resultDiv").show();
      // Reset Form Event Handler
      $("#returnBtn").click(function(){
        $("form")[0].reset();
        $(".resultDiv").hide();
        $(".formDiv").show();
      });
    });
  });
});
