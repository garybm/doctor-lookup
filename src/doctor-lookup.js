//BUSSINESS LOGIC

  export class DoctorLookUp {
    getWeatherByCity(zipCode) {
      return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us &appid=process.env.apiKey`;
        request.onload = function() {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(Error(request.statusText));
          }
        }
        request.open("GET", url, true);
        request.send();
      });
    }
  }
