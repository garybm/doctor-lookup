import $ from 'jquery';
  // import 'bootstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';
  // import './css/styles.css';s
  // import './sass/styles.scss';

  $ (document).ready(function(){
    $('#weatherLocation').click(function() {
      let city = $('#location').val();
      let secretKey = process.env.API_KEY;
      $('#location').val("");
      $.ajax({
        url:`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${secretKey}`,
        type: 'GET',
        data: {
          format: 'json'
        },
        success: function(response) {
          $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
          $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
          $('.showPressure').text(`The pressure in ${city} is ${response.main.pressure}`);
        },
        error: function(response) {
          $('#errors').text("There was an error processing your request. Please try again.");
        }
      });
    });
  });
