
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DoctorLookup } from './../src/doctor-lookup.js';


$(document).ready(function() {
$('#findDoctor').click(function() {
  let condition = $('#condition').val();
  $('#condition').val("");
  console.log(condition);


  let doctorLookup = new DoctorLookup();  // create instance of WeatherService class
  let promise = doctorLookup.getDoctorByIssue(condition);  // call the instance method and pass in user input

  promise.then(function(response) {
    let body = JSON.parse(response);
    $('.doctorName').text(`Doctor name: ${body.doctors} is`);
    }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  });
});

});
