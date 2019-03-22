
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
    console.log(body.data[0].profile.first_name);
    let data = body.data;
    console.log(data);

    body.data.forEach(function(doctor) {


    });


    $('.printInfo').text(`Doctor's Name ${data[0].profile.first_name}`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    })

  });
});
