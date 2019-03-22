#  Doctor Lookup

_Published_  2/22/2019 <br>
_Author_ **Gary Bermudez**

### Description


### Installation
* Clone from
* Run `$ npm install`

### Development Specs

Specification | Input | Output
------------- | ----- | ------
A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.| |
A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.| |
If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data). | |
If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.) | |

### Known Bugs
* The site is currently displaying only the first and last name of the doctor. There are issues getting the address, phone number, website.

### Technologies Used
* Webpack
* JavaScript
* HTML
* sass
* Jquery
