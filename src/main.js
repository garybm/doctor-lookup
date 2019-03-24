
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DoctorLookup } from './../src/doctor-lookup.js';
import './sass/styles.scss';


$(document).ready(function() {
  $('#findDoctor').click(function() {
    let condition = $('#condition').val();
    $('#condition').val("");


    let doctorLookup = new DoctorLookup();

    let promise = doctorLookup.getDoctorByIssue(condition);

    promise.then(function(response) {
      let doctorResponse = JSON.parse(response);
        doctorResponse.data.forEach(doctor => {
          $("#results").show();
          $('.firstName').text(`Doctor's name: ${doctor.profile.first_name} ${doctor.profile.last_name}`);

          let acceptNew = doctor.practices[0].accepts_new_patients;
            if (acceptNew  === true) {
              $(".newPat").text(" Accepting new patients: YES!");
            } else {
              $(".newPat").text("Accepting new patients: NO");
            }
            let addressStreet = doctor.practices[0].visit_address.street;
            let addressCity = doctor.practices[0].visit_address.city;
            let zip = doctor.practices[0].visit_address.zip;
           $(".address").text("Practice Location: " + addressStreet);
           $(".addressCity").text( addressCity + " " + zip);



           // let phoneNumber = doctor.practices[0].phone;
           // console.log(phoneNumber),

      });

         $("#results").show();

      }, function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });

  });
});
