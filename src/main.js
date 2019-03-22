
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
    let doctorResponse = JSON.parse(response);
    doctorResponse.data.forEach(doctor => {
      console.log(doctor);
      $('.firstName').text(`Doctor's fist name: ${doctor.profile.first_name}`);
      $('.lastName').text(`Doctor's last name: ${doctor.profile.last_name}`);
      $('.location').text(`Doctor's location: ${doctor.profile.practices[0].visit_address}`);
    });

    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    })

  });
});
