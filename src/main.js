
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
      let doctorResponse = JSON.parse(response);
        doctorResponse.data.forEach(doctor => {

          $("#results").show();
          let name = doctor.profile.first_name + " " + doctor.profile.last_name;
          let acceptNew = doctor.practices[0].accepts_new_patients;
          // if (acceptNew === true) {
          //   return "This doctor is accepting new patients!"
          // } else {
          //   return "This doctor is not accepting new patients!"
          // }
          let addressStreet = doctor.practices[0].visit_address.street;
          let addressCity = doctor.practices[0].visit_address.city + ', '  + doctor.practices[0].visit_address.state + ' ' + doctor.practices[0].visit_address.zip;
          let phone = doctor.practices[0].phones[0].number;
          let website = doctor.practices[0].website;

          //NEW Doctor
          let newDoctor = new Doctor(name, acceptNew, addressStreet, addressCity, phone, website);

           $('#results').append(newDoctor.toHTML());

         }, function(error) {
           $('.showErrors').text(`There was an error processing your request: ${error.message}`);
         });
       });
     });
     });
