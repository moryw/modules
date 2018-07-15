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

let Airplane

let availableAirplanes = [
  {
    name: 'AeroJet',
    fuelCapacity: 800,
    availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators']
  },
  {
    name: 'Skyjet',
    fuelCapacity: 500,
    availableStaff: ['pilots', 'flightAttendants']
  }
];

let flightRequirements = {
  requiredStaff: 4,
};

function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
};

export {availableAirplanes, flightRequirements, meetsStaffRequirements};
















//end
