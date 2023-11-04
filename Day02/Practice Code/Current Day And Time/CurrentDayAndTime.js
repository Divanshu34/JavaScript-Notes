let today = new Date();
let day = today.getDay();
let days = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
document.getElementById("currentDay").innerHTML = days[day];
// console.log(day);
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
document.getElementById("currentTime").innerHTML = `${hour} : ${minute} : ${second}`;