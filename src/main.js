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
    })
  });
});
