const Airplane = require('./1-airplane.js'); //module import property name doesnt have to match the exported var name

function displayAirplane() {
  console.log(Airplane.myAirplane);
};

displayAirplane();
