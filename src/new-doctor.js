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
   return '<div class=newDoctor>'+
              '<p class=\'name\'> Doctors name: ' + this.name + '</p>'+
              '<p class=\'acceptnew\'> New Patients: ' + this.acceptnew + '</p>'+
              '<p class=\'address\'> Address: ' + this.address + '</p>'+
              '<p class=\'addressCity\'>' + this.addressCity + '</p>'+
              '<p class=\'phone\'> Phone Number: ' + this.phone + '</p>'+
              '<p class=\'website\'> Website: ' + this.website + '</p>'+
          '</div>';
 }
}
