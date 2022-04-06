// http://api.aladhan.com/v1/timings/1398332113?latitude=51.508515&longitude=-0.1254872&method=2
/*STEP:
1. get user location
   if success, get lat,long, call shalat(lat,long)

    if error, set lat, long to Jakarta, call shalat(lat,long)

2. shalat(lat,long)
   fetch api as lat,long
*/
//https://api.aladhan.com/v1/hijriCalendarByCity?city=Bogor&country=Indonesia&method=4&month=09&year=1443

var city = 'Bogor';
var country = 'Indonesia';
var request = new XMLHttpRequest();
request.open('GET', 'https://api.aladhan.com/v1/hijriCalendarByCity?city=' + city + '&country=' + country + '&method=11&month=09&year=1443', true);
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    console.log(data);
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
};

request.send();
