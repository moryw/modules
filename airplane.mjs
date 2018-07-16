// let Airplane = {
//   //how i want to do it
//   // availableAirplanes: [
//   //   {name: 'AeroJet', fuelCapacity: 800},
//   //   {name: 'Skyjet', fuelCapacity: 500}
//   // ],
// };
//
// Airplane.availableAirplanes = [
//     {name: 'AeroJet', fuelCapacity: 800},
//     {name: 'Skyjet', fuelCapacity: 500}
//   ];
//
// export default Airplane;

// export let Airplane

export let availableAirplanes = [{
    name: 'AeroJet',
    fuelCapacity: 800,
    availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
    maxSpeed: 1200,
    minSpeed: 300
  },
  {
    name: 'Skyjet',
    fuelCapacity: 500,
    availableStaff: ['pilots', 'flightAttendants'],
    maxSpeed: 800,
    minSpeed: 200
  }
];

export let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700
};

export function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
};

export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  let range = maxSpeed - minSpeed;
  if (range > requiredSpeedRange) {
    return true;
  } else {
    return false;
  }
};


















//end
