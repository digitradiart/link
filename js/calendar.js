// 1. bikin function index untuk akses app dan user location
// 2. function userLocation
// 3. function success ngarahin ke function prayerTime
// 4. function error ngarahin ke function lat lon Jkt
// 5. function prayerTime fetch API pake data lat lon user

// http://api.aladhan.com/v1/timings/1398332113?latitude=51.508515&longitude=-0.1254872&method=2
/*STEP:
1. get user location
   if success, get lat,long, call shalat(lat,long)

   	if error, set lat, long to Jakarta, call shalat(lat,long)

2. shalat(lat,long)
   fetch api as lat,long
*/
//https://api.aladhan.com/v1/hijriCalendarByCity?city=Bogor&country=Indonesia&method=4&month=09&year=1443

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();

  var day = today.getDate();
  var month = today.getMonth() + 1;
  if (day < 10) {
    day = '0' + today.getDate();
  }
  if (month < 10) {
    month = '0' + eval(today.getMonth() + 1);
  }

  var days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
  var date = day + '-' + month + '-' + today.getFullYear();
  document.getElementById('today').innerHTML = date;
  document.getElementById('clock').innerHTML = h + ':' + m + ':' + s;
  setTimeout(startTime, 1000);
}

(function () {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      console.log(lat, long);
      getUserAddressBy(lat, long);
    },
    function (error) {
      console.log('Secara otomatis mengikuti waktu Jakarta (WIB)');
      var lat = 1;
      var long = 1;
      getUserAddressBy(lat, long);
    }
  );

  function getUserAddressBy(lat, long) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // var address = JSON.parse(this.responseText)
        // console.log(address.results[0].formatted_address)
        var data = JSON.parse(this.response);
        console.log(data);
      }
    };
    request.open('GET', 'http://api.aladhan.com/v1/timings/1398332113?latitude=' + lat + '&longitude=' + long + '&method=11', true);
    request.send();
  }
})();
