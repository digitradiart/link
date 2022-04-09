// FUNCTION TO SHOW TIME
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
  document.getElementById('clock').innerHTML = h + ':' + m + ':' + s;
  setTimeout(startTime, 1000);
}
