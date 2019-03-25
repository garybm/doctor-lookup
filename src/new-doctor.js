
           export class Doctor {
             constructor(name, acceptNew, addressStreet, addressCity, phone, website) {
               this.name = name;
               this.acceptnew = acceptNew;
               this.address = addressStreet;
               this.addressCity = addressCity,
               this.phone = phone;
               this.website = website;
             }
             toHTML(){
               return '<div>'+
                          '<h4 class=\'name\'> Doctors name: ' + this.name + '</h4>'+
                          '<h4 class=\'acceptnew\'> New Patients: ' + this.acceptnew + '</h4>'+
                          '<h4 class=\'address\'> Address: ' + this.address + '</h4>'+
                          '<h4 class=\'addressCity\'>' + this.addressCity + '</h4>'+
                          '<h4 class=\'phone\'> Phone Number: ' + this.phone + '</h4>'+
                          '<h4 class=\'website\'> Website: ' + this.website + '</h4>'+
                          '<br>'
                      '</div>';
             }
           }
