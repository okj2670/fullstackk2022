function setclock() {
  var dateInfo = new Date();
  var hour = dateInfo.getHours();
  var min = dateInfo.getMinutes();
  var sec = dateInfo.getSeconds();
  document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec;

  var year = dateInfo.getFullYear();
  var month = dateInfo.getMonth() + 1;
  var date = dateInfo.getDate();
  document.getElementById("date").innerHTML = year + ":" + month + ":" + date;
}

function numberfix(number) {
  // 9보다 작은 숫자는 앞에 0을 붙여줌
  // 7 -> 07
  // 2022.10.12.이용희 수정
  if (number < 10) return "0" + number;
  else return number;
}

setclock();
setInterval(setclock, 1000);
