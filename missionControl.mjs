import Airplane from './airplane.mjs';

function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(element) {
    console.log(`Fuel Capacity of ${element.name}: ${element.fuelCapacity}`);
    //below is how cc lesson wanted it, so much more annoying
    //console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  })
};

displayFuelCapacity();
