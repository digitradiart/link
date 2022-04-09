// 1. bikin function index untuk akses app dan user location
// 2. function userLocation
// 3. function success ngarahin ke function prayerTime
// 4. function error ngarahin ke function lat lon Jkt
// 5. function prayerTime fetch API pake data lat lon user

// http://api.aladhan.com/v1/timings/1398332113?latitude=51.508515&longitude=-0.1254872&method=2
//https://api.aladhan.com/v1/hijriCalendarByCity?city=Bogor&country=Indonesia&method=4&month=09&year=1443

// FUNCTION TO SHOW DATE AND TIME
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  var day = today.getDate();
  console.log(day);
  var month = today.getMonth() + 1;
  const daylist = ['Kamis', 'Jumat', 'Sabtu', 'Minggu', 'Senin', 'Selasa', 'Rabu'];
  const todayName = daylist[day % 7];
  if (day < 10) {
    day = '0' + today.getDate();
  }
  if (month < 10) {
    month = '0' + eval(today.getMonth() + 1);
  }

  var date = day + '-' + month + '-' + today.getFullYear();
  document.getElementById('today').innerHTML = `${todayName}, ${date}`;
  document.getElementById('clock').innerHTML = h + ':' + m + ':' + s;
  setTimeout(startTime, 1000);
}

//////////////////////////////////////////////////
const app = document.getElementById('app');
const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);
