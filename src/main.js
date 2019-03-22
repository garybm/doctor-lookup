
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DoctorLookup } from './../src/doctor-lookup.js';


$(document).ready(function() {
$('#findDoctor').click(function() {
  let condition = $('#condition').val();
  $('#condition').val("");


  let doctorLookup = new DoctorLookup();
  let promise = doctorLookup.getDoctorByIssue(condition);

  promise.then(function(response) {
    let body = JSON.parse(response);
    console.log(body);
    body.data.forEach(function(index){
          for (let i = 0; i < index.specialties.length; i++) {
           if (index.specialties[i].description.match(condition)) {
             let firstName = index.profile.first_name;
             $(".printInfo").append("<p> First Name: " + firstName + "</p>");
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    })

  });
});
