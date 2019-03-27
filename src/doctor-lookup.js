//BUSSINESS LOGIC

  export class DoctorLookup {
    getDoctorByIssue(condition) {
      return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        let apikey = process.env.exports.apiKey;
        console.log(apikey);
        let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=OR&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=`+ apikey + '&query=' + condition;
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
