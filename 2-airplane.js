//const Airplane = {};

module.exports = {
  myAirplane: "CloudJet",
  //this is the way the course wants it
  displayAirplane: function() {
    return this.myAirplane;
  }
  //this is how i think it should be
  // displayAirplane() {
  //   return this.myAirplane;
  // }
};
