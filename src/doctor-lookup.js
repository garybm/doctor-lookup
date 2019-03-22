//BUSSINESS LOGIC

  export class DoctorLookup {
    getDoctorByIssue(condition) {
      return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        console.log(request);
        let url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=2a0c7f757f668f9f1bd09c9363d3a261';
        console.log(url);
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
