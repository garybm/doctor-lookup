
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DoctorLookUp } from './../src/doctor-lookup.js';


$(document).ready(function() {
$('#weatherLocation').click(function() {
  let zipCode = $('#location').val();
  $('#location').val("");


  let docotrLookup = new DoctorLookUp();  // create instance of WeatherService class
  let promise = weatherService.getDocotorByIssue(issue);  // call the instance method and pass in user input

  promise.then(function(response) {
    let body = JSON.parse(response);
    $('.showHumidity').text(`The humidity in ${body.name} is ${body.main.humidity}%`);
    $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
    $('.showWind').text(`The wind speed is ${body.wind.speed} `);
    $('.showName').text(`The best city ${body.name}`);
  }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  });
});

});
