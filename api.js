
const url ='https://api.openweathermap.org/data/2.5/weather?lat=44&lon=35&appid={3ebd77e906cd2ad7ad481eceb5ac0b97}';

const response = await fetch(url);
var data = await response.json();

console.log(data);