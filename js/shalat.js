// SCRIPT BY AYU
// http://api.aladhan.com/v1/timings/1398332113?latitude=51.508515&longitude=-0.1254872&method=2
// https://api.aladhan.com/v1/hijriCalendarByCity?city=Bogor&country=Indonesia&method=4&month=09&year=1443

// FUNCTION TO GET USER LOCATION
function prayerTime(latitude, longitude) {
  fetch('https://api.aladhan.com/v1/calendar?latitude=' + latitude + '&longitude=' + longitude + '&method=11')
    .then((theResponse) => theResponse.json())
    .then(function (theResponse) {
      let date = new Date();
      // console.log(theResponse);
      let today = date.getDate();
      let data = theResponse.data[0].timings;
      let d = theResponse.data[today - 1];
      let dateReadable = d.date.readable;
      let dateTimezone = d.meta.timezone;
      let hijriDay = `${d.date.gregorian.weekday.en}, ${d.date.hijri.day} ${d.date.hijri.month.en} ${d.date.hijri.year}/${dateReadable}`;
      let app = document.getElementById('app');
      let day = document.createElement('h2');
      let table = document.createElement('table');
      let tableTbody = document.createElement('tbody');
      let loc = document.createElement('h2');
      day.innerHTML = hijriDay;
      app.appendChild(day);

      for (i in data) {
        let row = tableTbody.insertRow();
        let name = row.insertCell(0); //col 1 of the table
        let time = row.insertCell(1); //col 2 of the table
        name.innerHTML = i;
        time.innerHTML = data[i];
        tableTbody.appendChild(row);
      }

      loc.innerHTML = `Time zone: ${dateTimezone}`;
      app.appendChild(loc);
      table.appendChild(tableTbody);
      app.appendChild(table);
    });
}

function success(position) {
  //third function
  let userlocation = document.getElementById('userlocation');
  prayerTime(position.coords.latitude, position.coords.longitude);
  userlocation.innerHTML = `Position: Latitude= ${position.coords.latitude}; Longitude= ${position.coords.longitude};`;
}

function error() {
  prayerTime('21.3890824', '39.8579118');
  // Latitude of Makkah	21.3890824
  // Longitude of Makkah	39.8579118 https://www.gps-latitude-longitude.com/gps-coordinates-of-makkah
}

function userLocation() {
  //second function
  if (!navigator.geolocation) {
    alert('Oops! Geolocation is not available on your browser.');
  } else {
    navigator.geolocation.getCurrentPosition(success, error); //name of function callback: success, error
  }
}

function index() {
  //first function
  userLocation();
}

index(); //gunakan function index
