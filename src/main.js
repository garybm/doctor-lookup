
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DoctorLookup } from './../src/doctor-lookup.js';
import { Doctor } from './../src/new-doctor.js';
import './sass/styles.scss';


$(document).ready(function() {
  $('#findDoctor').click(function() {
    let condition = $('#condition').val();
    $('#condition').val("");
    let doctorLookup = new DoctorLookup();
    let promise = doctorLookup.getDoctorByIssue(condition);

    promise.then(function(response) {
      $('#results').text("");
      let doctorResponse = JSON.parse(response);
      if(doctorResponse.data.length > 0){
        doctorResponse.data.forEach(doctor => {
          if(doctorResponse.data.length > 0){
            $("#results").show();
            const name = doctor.profile.first_name + " " + doctor.profile.last_name;
            let accept = doctor.practices[0].accepts_new_patients;
            let acceptNew = (accept) ? "Yes" : "No";
            const addressStreet = doctor.practices[0].visit_address.street;
            const addressCity = doctor.practices[0].visit_address.city + ', '  + doctor.practices[0].visit_address.state + ' ' + doctor.practices[0].visit_address.zip;
            const phone = doctor.practices[0].phones[0].number;
            let websiteReturn = doctor.practices[0].website;
            let website = (websiteReturn) ? websiteReturn : "No known website";
                //NEW Doctor
            let newDoctor = new Doctor(name, acceptNew, addressStreet, addressCity, phone, website);
            $("#resultsMessage").show();
            $('#results').append(newDoctor.toHTML());
              }

            }, function(error) {
              $('#result').text(`There was an error processing your request: ${error.message}`);
            });

      } else {
        $("#results").show();
        $('#results').text("Sorry, your search did not return any results.");
      }
       });
     });
     });
